import { lazy, LazyExoticComponent } from 'react';
//import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
	path: string;
	Component: JSXComponent | LazyExoticComponent<JSXComponent>;
	name: string;
	children?: Route[];
}

const LazyPage1 = lazy(
	() =>
		import(
			/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'
		)
);
const LazyPage2 = lazy(
	() =>
		import(
			/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'
		)
);
const LazyPage3 = lazy(
	() =>
		import(
			/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'
		)
);

export const routes: Route[] = [
	{
		path: '/lazy',
		Component: LazyPage1,
		name: 'LazyPage1',
	},
	{
		path: '/lazy2',
		Component: LazyPage2,
		name: 'LazyPage2',
	},
	{
		path: '/lazy3',
		Component: LazyPage3,
		name: 'LazyPage3',
	},
];
