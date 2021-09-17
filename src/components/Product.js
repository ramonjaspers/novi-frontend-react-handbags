import React from 'react';

function Product({ highlight, image, title, price }) {
    return (
        <article>
            <span>{highlight}</span>
            <img src={image} alt={title} />
            <p>{title}</p>
            <p>{price}</p>
        </article>
    );
}
export default Product;
