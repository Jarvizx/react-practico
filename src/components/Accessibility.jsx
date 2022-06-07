import React, { useState, useContext, useRef } from 'react';
import '@styles/Accessibility.scss';
import { FaCog } from 'react-icons/fa';
import { ImSun, ImContrast } from "react-icons/im";
import { GoTextSize } from "react-icons/go";
import { MdHearing  } from "react-icons/md";

const Accessibility = () => {
    
    const itemsActive = useRef();
    const handlerToggleClass = () => {
        itemsActive.current.classList.toggle('accessibility-items--active')
    } 
    return  (
                <section className='accessibility'>
                    <ul className='accessibility-items' ref={itemsActive}>
                        <li className='config'  onClick={()=> handlerToggleClass()}><FaCog /></li>
                        <li className='size-text'><GoTextSize /></li>
                        <li className='hearing'><MdHearing /></li>
                        <li className='contrast'><ImContrast /></li>
                        <li className='brightness'><ImSun /></li>
                    </ul>
                </section>
    );
}

export default Accessibility;