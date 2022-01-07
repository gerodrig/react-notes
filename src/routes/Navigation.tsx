import { BrowserRouter, Navigate, NavLink } from 'react-router-dom';
import { Routes, Route  } from 'react-router-dom';
import { routes } from './routes';

import logo from '../logo.svg';
import { Suspense } from 'react';


export const Navigation = () => {
	return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt='logo' />
                    <ul>
                        {/*TODO: create dynamic navlinks*/}
                        {routes.map(({to, name}) => {
                            return <li key={to}><NavLink to={to} className={ ({isActive}) => isActive ? 'nav-active' : ''}>{name}</NavLink></li>
                        })}
                        {/* <li>
                            <NavLink to='/lazy1' className={ ({isActive}) => isActive ? 'nav-active' : ''} >Lazy 1</NavLink>
                        </li>
                        <li>
                            <NavLink to='/lazy2' className={ ({isActive}) => isActive ? 'nav-active' : ''} >Lazy 2</NavLink>
                        </li>
                        <li>
                            <NavLink to='/lazy3' className={ ({isActive}) => isActive ? 'nav-active' : ''} >Lazy 3</NavLink>
                        </li>
                        */}
                    </ul> 
                    </nav>

                    <Routes>
                        {routes.map( ({to, path, Component}) => {
                            return <Route key={ to } path={ path } element={ <Component /> } />
                        })}
                        {/* <Route path='lazy1' element={ <LazyPage1 />} />
                        <Route path='lazy2' element={<LazyPage2 />} />
                        <Route path='lazy3' element={<LazyPage3 />} /> */}

                        <Route path='/*' element={ <Navigate to={ routes[0].to} replace /> } />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
	);
};
