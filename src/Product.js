import React from 'react'
import './Product.css';
import { useStatevalue } from './StateProvider';
    
function Product({id, title, image, price, rating}){
    const [{cart}, dispatch] = useStatevalue()

    console.log('cart content', cart)
    const addToCart = () => {
        dispatch({
        type: 'ADD_TO_CART',
        item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating
        }
    })
    }

    return(
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>*</p>
                        ))
                        
                    }
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product;