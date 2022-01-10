import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    style?: React.CSSProperties;
}

export const ProductButtons = ({className, style }: Props) => {


    //TODO: receive maxCount property
    const { increaseBy, counter, maxCount } = useContext(ProductContext);

    //TODO isMaxReached = useCallback, dependencies [counter, maxCount]
    //true if count === maxCount
    // flase if count < maxCount

    const isMaxReached = useCallback(() => counter === maxCount, [counter, maxCount]);

    return (
        <div className={`${ styles.buttonsContainer } ${ className }` } style={ style }>
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}
            >
                -
            </button>
            <div className={styles.countLabel}> {counter} </div>
            <button
                className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
                onClick={() => increaseBy()}
            >
                +
            </button>
        </div>
        );
};