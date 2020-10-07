import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import './Product.css'

function Product({id, title, image, price, rating}) {
    return (
        <div className="product">
            <p>{title}</p>
            <p className="product__">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p><StarIcon className="star"></StarIcon></p>
                    ))

                }
            </div>
            <img src={image} />
            <button>Add to basket</button>
        </div>
    )
}

export default Product
