// こうやってNode.js Core APIをインポートしてgetStaticPropsで使うことはできるが、
// これをクライアントサイドのコード部分(Component Function内とか)で使うことはできないので注意。
// Next.jsは賢いので、どれがサーバーサイド用のimportなのか(どれがサーバーサイドコードのみで使われているか)
// を判断して、それらをクライアントに送られるcode bundleからstrip outしてくれる。
import fs from 'fs/promises'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import path from 'path'

type Props = {
  products: Product[]
}

export type Product = {
  id: string
  title: string
  description: string
}

function HomePage({ products }: Props) {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  )
}

// It prepares the props for you component.
// That's why this is called 'getStaticPros'.
// It must return an object that has a key named 'props'.
// Next.jsは、この関数を実行した後に、関数コンポーネントを実行する
// You can write any code in here (mostly to get some data),
// and it will expose the data through props to this homepage component.
export async function getStaticProps() {
  // process.cwd()は、pagesフォルダではない。これが実行されるときは、Next.jsがこれを実行している。
  // そして、Next.jsはprojectのrootフォルダをカレンとディレクトリとして扱う（？）
  // ここらへん曖昧なので、ドキュメント読んだ方が良いかも。
  console.log('Re-generating...')

  const filePath = path.join(process.cwd(), 'dummy-backend.json')

  const dataStr = await fs.readFile(filePath, 'utf-8')
  const products: Product[] = JSON.parse(dataStr).products

  return {
    props: {
      products,
    },
    revalidate: 10,
  }
}

export default HomePage
