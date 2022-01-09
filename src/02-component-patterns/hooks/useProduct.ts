import { useState } from "react";

interface Product {
    counter: number;
    increaseBy: (amount?: number) => void;
}

export const useProduct = (value: number = 0):Product => {
    const [counter, setCounter] = useState(value);

    const increaseBy = (value: number = 1) => {
        setCounter( prev => Math.max(prev + value, 0));
    }


    return {
        counter,
        increaseBy
    }
}