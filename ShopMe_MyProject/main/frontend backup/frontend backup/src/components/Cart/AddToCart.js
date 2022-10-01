import Item from '../Item/Item'
import { useState } from 'react'
const AddToCart = (props) => {

    const { cart } = props
    sessionStorage['total'] = cart
    
    return (
        <div >
            {Object.values(cart).map((item) => {
                console.log(item.product.productName)
                return <Item product={item} />

            })}
        </div>
    )
}

export default AddToCart;