import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	Redirect,
} from 'react-router-dom';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages/index';
import { routes } from './routes';

import logo from '../logo.svg';
import { Suspense } from 'react';

export const Navigation = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Router>
				<div className='main-layout'>
					<nav>
						<img src={logo} alt='logo' />
						<ul>
							{routes.map(({ path, name }) => (
								<li key={path}>
									<NavLink
										key={path}
										to={path}
										activeClassName='nav-active'
									>
										{name}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>

					<Switch>
						{routes.map(({ path, Component }) => (
							<Route
								key={path}
								path={path}
								render={() => <Component />}
							/>
						))}

						<Redirect to={routes[0]['path']} />
					</Switch>
				</div>
			</Router>
		</Suspense>
	);
};
