import React from 'react'

const GreetingTwo = ({productId, productName}) => {
  return (
    <div>
        <h2>ProductId : {productId}</h2>
        <h2>ProductName : {productName}</h2>
    </div>
  )
}

export default GreetingTwo