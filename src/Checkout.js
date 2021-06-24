import React from 'react'
import './Checkout.css'
import { useStatevalue } from './StateProvider'
import Subtotal from './Subtotal'
import ProductCart from './ProductCart'

function Checkout(){

    const[{cart}] = useStatevalue();

    return(
        <div className="checkout">
            <div className="cout-left">
                {
                    cart.length === 0?(
                    <div>
                        <h2 className="cout-title">Your shopping cart is empty.</h2>
                        <p>You don't have items in your cart. You can buy one.</p>
                    </div>
                    ) : (
                        <div>
                            <h2 className="cart-title">Your items inside the cart</h2>
                            {
                                cart.map(item =>(
                                    <ProductCart
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                ))
                            }
                        </div>
                    )
                }
               
            </div>
            {
                cart.length > 0 && (
                    <div className="cout-right">
                        <Subtotal/>
                    </div> 
                )
            }
           

        </div>
    )
}

export default Checkout