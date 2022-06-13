import { GetServerSideProps } from 'next'

type Props = {
  username: string
}

function UserProfilePage({ username }: Props) {
  return (
    <>
      <h1>{username}</h1>
    </>
  )
}

export default UserProfilePage

export const getServerSideProps: GetServerSideProps = async context => {
  // contextという引数を受け取ることと、returnするオブジェクトのフォーマットは
  // getStaticPropsと同じ。ただ、もちろんrevalidateは指定できない。

  // getStaticPropsと違い、contextオブジェクトからはparams(pathの情報)等だけでなく、
  // full request objectも取得できる。
  // resオブジェクトをいじることで、Next.jsによって送られるレスポンスに、追加のheaderを
  // を入れたり色々いじることができる。クッキーを入れたり。レスポンス送り返すの自体はNextがやる。
  // これらは、Node.js組み込みのreq, resオブジェクト。正確にはIncomming Messageと、Server Response.
  const { params, req, res } = context

  return {
    props: { username: 'Shinjiro' },
  }
}
