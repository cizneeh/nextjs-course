import { useRouter } from 'next/router'

function PortfolioProjectPage() {
  const router = useRouter()

  console.log(router.pathname) // portfolio/[projectId]
  console.log(router.query) // {projectId: 'test'}

  // we could send a request to some backend server, fetch the content data,
  // and then render the page dynamically using the projectId

  return (
    <>
      <h1>The Portfolio Project Page</h1>
    </>
  )
}

export default PortfolioProjectPage
