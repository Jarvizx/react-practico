import React from 'react';
import '@styles/AlphabetList.scss';
import { FaCaretLeft } from 'react-icons/fa';
import { NavLink, Link } from "react-router-dom";

const About = () => {
    return (
        <section className='about alphabet'>
			
            <p className='alphabet-hero alphabet-hero--back'> 
                <Link to="/">
                    <FaCaretLeft /> 
                        Volver
                </Link>
            </p>

			<div className='alphabet--separator'></div>
            <div className='alphabet-results'>
				<div className='alphabet-side-left'>
				</div>
				<div className='alphabet-container'>
					<h2 className='alphabet-title'>¿Qué es esto?</h2>
                    <p className='alphabet-description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
				</div>
			</div>
        </section>
    )
}

export default About;