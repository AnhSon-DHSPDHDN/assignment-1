import { useEffect, useState } from 'react'

export default function useMagicNum() {
  const [magicNum, setMagicNum] = useState(null)

  useEffect(() => {
    let timerId = setInterval(() => {
      setMagicNum(Math.round(Math.random() * 100))
    }, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, [])

  return magicNum
}
