import React, { useState, useContext, useRef } from 'react';
import '@styles/Accessibility.scss';
import { FaCog } from 'react-icons/fa';
import { ImSun, ImContrast } from "react-icons/im";
import { GoTextSize } from "react-icons/go";
import { MdHearing  } from "react-icons/md";
import TooltipAlphabet from './TooltipAlphabet';

const Accessibility = () => {
    
    const itemsActive = useRef();
    const handlerToggleClass = () => {
        itemsActive.current.classList.toggle('accessibility-items--active')
    } 
    return  (
                <section className='accessibility'>
                    <ul className='accessibility-items' ref={itemsActive}>
                        <li className='config' onClick={()=> handlerToggleClass()}><FaCog /></li>
                        <li className='tooltip-alphabet size-text'>
                            <TooltipAlphabet text={'Ampliar tamaño de letra'} />
                            <GoTextSize />
                        </li>
                        <li className='tooltip-alphabet hearing'>
                            <TooltipAlphabet text={'Ampliar tamaño de letra'} />
                            <MdHearing />
                        </li>
                        <li className='tooltip-alphabet contrast'>
                            <TooltipAlphabet text={'Ampliar tamaño de letra'} />
                            <ImContrast />
                        </li>
                        <li className='tooltip-alphabet brightness'>
                            <TooltipAlphabet text={'Ampliar tamaño de letra'} />
                            <ImSun />
                        </li>
                    </ul>
                </section>
    );
}

export default Accessibility;