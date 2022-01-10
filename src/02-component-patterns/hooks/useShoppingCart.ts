import { useState } from 'react';
import { products } from '../../data/products';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{
		[key: string]: ProductInCart;
	}>({});

	const onProductCountChange = ({
		count,
		product,
	}: {
		count: number;
		product: Product;
	}) => {
		// console.log({count});
		setShoppingCart((prevState) => {

			if (count === 0) {
				const { [product.id]: toDelete, ...rest } = prevState;
				return rest;
			}

			return {
				...prevState,
				[product.id]: {
					...product,
					count,
				},
			};
		});
	};

	return {
		shoppingCart,
		onProductCountChange,
	};
};
