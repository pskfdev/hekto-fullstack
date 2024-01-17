import React from 'react'

type Props = {
    params: { id: string }
}

const ProductDetail = (props: Props) => {
  return (
    <div>ProductDetail: {props.params.id}</div>
  )
}

export default ProductDetail