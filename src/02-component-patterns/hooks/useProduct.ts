import { useEffect, useRef, useState } from 'react';
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

	const isControlled = useRef(!!onChange);

	const increaseBy = (value: number = 1) => {
		if (isControlled.current) {
			return onChange!({ count: value, product });
		}

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
