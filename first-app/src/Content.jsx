import React, { useEffect } from 'react'

const Content = ({ data, setData }) => {
  useEffect(() => {
    const load = async () => {
      const res = await fetch('https://thirukkural.senkanthal.org/kural/1')
      const json = await res.json()
      setData(json)
    }

    load()
  }, [])

  return (
    <div>
      {data.kural}
    </div>
  )
}

export default Content
