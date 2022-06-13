import { useEffect, useState } from 'react'

function LastSalesPage() {
  const [sales, setSales] = useState<any>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://nextjs-course-80f78-default-rtdb.firebaseio.com/sales.json')
      .then(res => res.json())
      .then(data => {
        const sales = []

        for (const key in data) {
          sales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          })
        }

        setSales(sales)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <p>Loading</p>
  }

  // Reactは、コンポーネント関数を評価仕切ってからuseEffectの関数を実行するので、
  // useEffect内でsalesがセットされる前だと、sales.mapの部分でエラーになってしまう。
  // それを防ぐために、ここでさらに条件分岐させる。
  if (!sales) {
    return <p>No data yet</p>
  }

  return (
    <ul>
      {sales.map((sale: any) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  )
}

export default LastSalesPage
