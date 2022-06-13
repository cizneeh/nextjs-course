import { GetStaticPaths, GetStaticProps } from 'next'
import fs from 'fs/promises'
import path from 'path'
import { Product } from '.'

type Props = {
  loadedProduct: Product
}

function ProductDetailPage({ loadedProduct }: Props) {
  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // paramsは、key-valueペアの集合
  // keyはdynamic path segments. 今回はpidのみ
  if (!params)
    return {
      notFound: true,
    }

  const productId = params.pid as string

  const product = await fetchProductById(productId)
  if (!product) return { notFound: true }

  return {
    props: {
      loadedProduct: product,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // この関数の目的は、dynamic pathsのうち、どの具体的な値がpre-generateされるべきなのかをNext.jsに伝えること。
  const products = await fetchAllProducts()

  const paths = products.map(product => ({
    params: { pid: product.id },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

async function fetchAllProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), 'dummy-backend.json')
  const dataStr = await fs.readFile(filePath, 'utf-8')
  const products: Product[] = JSON.parse(dataStr).products

  return products
}

async function fetchProductById(id: string): Promise<Product | undefined> {
  const products = await fetchAllProducts()
  return products.find(product => product.id === id)
}

export default ProductDetailPage
