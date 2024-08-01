import { useState } from 'react'
import styles from "./counter.module.css"
console.log(styles)

// const states = [1, 'Jyoti']

export default function Counter({username,children}) {
  const [count, setCount] = useState(0)
  const [name, setName] = useState(username)

  console.log('rendering');
 console.log(children);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className={styles['text-xl']}>{count}</h1>
      <h2>{name}</h2>
      <button className={[styles.button ,styles.fontSize].join(' ')}
        onClick={() => {
          setName({username})
          setCount((previousState) => previousState + 1)
          setCount((previousState) => previousState + 1)
          setCount((previousState) => previousState + 1)
        }}
      >
        Increase Count
      </button>
      {
        children
      }
    </div>
  )
}