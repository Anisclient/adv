import { useState } from 'react'
import './Counter.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount((c) => c + 1)
  return (
    <>
      <h3>{count}</h3>
      <button onClick={increment}>---- + ----</button>
    </>
  )
}
