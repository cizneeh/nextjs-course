import { GetServerSideProps } from 'next'

type Props = {
  id: string
}

function UserIdPage({ id }: Props) {
  return <h1>{id}</h1>
}

export default UserIdPage

export const getServerSideProps: GetServerSideProps = async context => {
  const { params } = context
  if (!params)
    return {
      notFound: true,
    }

  // ここで、dynamic pathであるuid部分にアクセスできる。
  const userId = params.uid

  return {
    props: {
      id: userId,
    },
  }
}
