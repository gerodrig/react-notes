import { useEffect, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface Props {
	counter: number;
	increaseBy: (amount?: number) => void;
}

interface useProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
}

export const useProduct = ({
	onChange,
	product,
	value = 0,
}: useProductArgs): Props => {
	const [counter, setCounter] = useState(value);

	const increaseBy = (value: number = 1) => {

		const newValue = Math.max(counter + value, 0);
		setCounter(newValue);

		onChange && onChange({ count: newValue, product });
	};

	useEffect(() => {
		setCounter(value);
	}, [value]);

	return {
		counter,
		increaseBy,
	};
};
