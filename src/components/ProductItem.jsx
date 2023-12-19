import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<div className='Container'>
				<div className='ImgContainer'>				
					<img src={product.images[0]} alt={product.title} />
				</div>
				<div className="product-info">
					<div>
						<p>${product.price}</p>
						<p>{product.title}</p>
						<p>{product.category.name}</p>
					</div>
					<figure onClick={() => handleClick(product)} >
						<img src={addToCartImage} alt="" />
					</figure>
				</div>
			</div>
			
		</div>
	);
}

export default ProductItem;
