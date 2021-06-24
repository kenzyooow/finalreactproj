import React from 'react'
import './ProductCart.css'
import { useStatevalue } from './StateProvider'

function ProductCart({id,title,image,price,rating}){

    const [{cart}, dispatch] = useStatevalue();

    const removeItem =() =>{
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }
    
    return(
        <div className="productcart">
            <img className="productcart-img" src={image} alt=""/>
            <div className="productcart-info">
                <p className="productcart-title">{title}</p>
                <p className="productcart-price">${price}</p>
            
            <div className="productcart-rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) =>(
                        <span>*</span>
                    ))
                }
            </div>
            <button onClick={removeItem}>Remove from cart</button>
            </div>
        </div>
    )
}

export default ProductCart