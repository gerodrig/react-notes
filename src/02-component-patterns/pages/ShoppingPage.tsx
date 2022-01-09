import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTitle,
} from '../components';

import styles from '../styles/styles.module.css';

const product = {
	id: '1',
	title: 'Coffee Mug - Card',
	img: './coffee-mug.png',
};

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />

			<div className={styles.shoppingLayout}>
				<ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Title title={'Card1'} />
					<ProductCard.Buttons />
				</ProductCard>

				<ProductCard product={product}>
					<ProductImage />
					<ProductTitle />
					<ProductButtons/>
				</ProductCard>

				{/* <ProductCard />
            <ProductCard />
            <ProductCard /> */}
			</div>
		</div>
	);
};
