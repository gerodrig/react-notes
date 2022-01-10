import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface Props {
	counter: number;
	maxCount?: number;
	isMaxCountReached: boolean;
	increaseBy: (amount?: number) => void;
	reset: () => void;
}

interface useProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const useProduct = ({
	onChange,
	product,
	value = 0,
	initialValues
}: useProductArgs): Props => {
	const [counter, setCounter] = useState<number>(initialValues?.count ?? value);

	const isMounted = useRef(false);

	//console.log(initialValues?.maxCount);

	const increaseBy = (value: number = 1) => {

		if (initialValues?.maxCount && counter + value > initialValues.maxCount) {
			//alert('Max count reached');
			
			return ;
		}
		const newValue = Math.max(counter + value, 0);
		setCounter(newValue);

		onChange && onChange({ count: newValue, product });
	};

	const reset = () => {
		setCounter(initialValues?.count ?? 0);
	};

	useEffect(() => {

		if(!isMounted.current) return;

		setCounter(value);
	}, [value]);

	useEffect(() => {
		isMounted.current = true;
	}, []);

	return {
		counter,
		maxCount: initialValues?.maxCount,
		isMaxCountReached: !!initialValues?.maxCount && counter === initialValues.maxCount,

		reset,
		increaseBy,
	};
};
