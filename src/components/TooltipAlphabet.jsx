import React from 'react';
import '@styles/TooltipAlphabet.scss';


const TooltipAlphabet = ({text}) => {
    return (
        <span className='tooltip-text'>{text}</span>
    )
}

export default TooltipAlphabet;