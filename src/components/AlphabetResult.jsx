import React from "react";
import { FaStar } from 'react-icons/fa';

const AlphabetResult = ({word, definition}) => {

    return <div className='alphabet-result'>
                <div className='alphabet-letter-detail'>
                    <h4>{word}</h4>
                    <div className='alphabet-add-highlight'><FaStar /></div>
                </div>
                <div className='alphabet-detail'>{definition}</div>
            </div>;
}

export default AlphabetResult;