import React from 'react'
import { Button } from '../Button'

const cache = {
  /*
  "{a: 2, b: 2}": 4
  "{a: 2, b: 3}": 5
  */
}

const sum = (a, b) => { // 2, 2; 2, 3
  const key = JSON.stringify({ a, b }) // "{a: 2, b: 2}"
  if (cache[key]) {
    console.log('from cache', cache[key]);
    return
  }
  const res = a + b
  cache[key] = res
  console.log('calculated', cache[key]);
}

// 2, 2 => 4
// 2, 3 => 5
// 2, 2 => 4

export const Memo = () => {
  return (
    <>
      <Button onClick={() => sum(2, 2)}>2+2</Button>
      <Button onClick={() => sum(2, 3)}>2+3</Button>
      <Button onClick={() => sum(2, 4)}>2+4</Button>
    </>
  )
}
