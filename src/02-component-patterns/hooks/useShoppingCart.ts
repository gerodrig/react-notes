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
			const productInCart: ProductInCart = prevState[product.id] || {
				...product,
				count: 0,
			};

			if (Math.max(productInCart.count + count, 0) > 0) {
				productInCart.count += count;
				return {
					...prevState,
					[product.id]: productInCart,
				};
			}

			//delete product
			const { [product.id]: toDelete, ...rest } = prevState;
			return rest;

			// if (count === 0) {
			// 	const { [product.id]: toDelete, ...rest } = prevState;
			// 	return rest;
			// }

			// return {
			// 	...prevState,
			// 	[product.id]: {
			// 		...product,
			// 		count,
			// 	},
			// };
		});
	};

	return {
		shoppingCart,
		onProductCountChange,
	};
};
