import React from 'react';
import ProductList from '@containers/ProductList';
import { useParams } from 'react-router-dom';


const Home = () => {
	const { category } = useParams();
	return (
		<>
			{category ? (
				<h1 style={{textAlign:'center'}}>Filtrado por categoría: {category}</h1>
			) : (
				<h1 style={{textAlign:'center'}}>Filtrado por categoría: All</h1>
			)}
			<ProductList category={category}/>
		</>
	);
}

export default Home;
