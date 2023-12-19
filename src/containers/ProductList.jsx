import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import '@styles/ProductList.scss';

const API = 'http://api.escuelajs.co/api/v1/products';

const normalizeText = (text) => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const ProductList = ({category}) => {
	const products = useGetProducts(API);

	const filteredProducts = category
    ? products.filter(product => normalizeText(product.category.name) === normalizeText(category))
    : products;

	return (
		<section className="main-container">
			<p style={{textAlign:'center'}}>La siguiente lista de productos es obtenida de una API pública. No se garantiza la congruencia de datos en cada producto.</p>
			<div className="ProductList">
				{filteredProducts.length > 0 ? (
					filteredProducts.map(product => (
						<ProductItem product={product} key={product.id} />
					))
				) : (
					<h3 style={{textAlign:'center',position:'absolute',left:0,right:0}}>No existen productos para esta categoría.</h3>
				)}
			</div>
		</section>
	);
}

export default ProductList;
