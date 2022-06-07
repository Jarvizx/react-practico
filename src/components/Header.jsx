import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '../containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import { FaStar } from 'react-icons/fa';
import { NavLink, Link } from "react-router-dom";


const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const { state } = useContext(AppContext);

	const handleToggle = () => {
		setToggle(!toggle);
	}

	return (
		<nav>
			<div className='header header--1'>
				<div className='header-title'>
					<h2>Colección</h2>
				</div>
				<div className='header-space'></div>
			</div>
			<div className='header header--2'>
				<div className='header-title'>
					<h2>de palabras</h2>
					</div>
				<div className='header-space'></div>
			</div>
			<div className='header header--3'>
				<div className='header-title'>
					<h2>digitales</h2>
					</div>
				<div className='header-space'></div>
				<div className='header-menu'>
					<div className="navbar-right">
						<ul>
							<li>
								<NavLink to="/" exact activeClassName="active">Colección</NavLink>
							</li>
							<li>
								<NavLink to="/que-es-esto" activeClassName="active">¿Qué es esto?</NavLink>
							</li>
							<li>
								<NavLink to="/destacados" activeClassName="active">
									<FaStar />
									Destacados
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Header;
