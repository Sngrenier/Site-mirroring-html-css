import React from 'react'
import CartItem from './CartItem'

// this is a destructuring short-cut. Just something cool to know
// export default function CartList({value}) {
//     console.log(value)
//     const {cart} = value

    export default function CartList(props) {
        const {value} = props
        const {cart} = value
        // console.log(value, cart)


    return (
        <div className="container-fluid">
            {cart.map(item => {
                return <CartItem  key={item.id} item={item} value={value}/>
            })}
        </div>
    )
}
