import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTitle,
} from '../components';

import styles from '../styles/styles.module.css';
import '../styles/custom-styles.css';

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
				<ProductCard product={product} className='bg-dark text-white '>
					<ProductCard.Image className='custom-image' />
					<ProductCard.Title title={'Card1'} className='text-bold' />
					<ProductCard.Buttons className='custom-buttons' />
				</ProductCard>

				<ProductCard product={product} className='bg-dark text-white '>
					<ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2)' }} />
					<ProductTitle className='text-bold' />
					<ProductButtons className='custom-buttons' />
				</ProductCard>

				<ProductCard product={product} style={{ backgroundColor: '#70D1F8' }}>
					<ProductImage style={{ boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.15)' }} />
					<ProductTitle style={ { fontWeight: 'bold'} } />
					<ProductButtons style={{display: 'flex', justifyContent: 'end'}} />
				</ProductCard>

				{/* <ProductCard />
            <ProductCard />
            <ProductCard /> */}
			</div>
		</div>
	);
};
