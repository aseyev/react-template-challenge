import React from 'react';
import s from './page.module.css';
import mockup from '../img/mockup-card.jpg';

let CardTest = ({pagesPortion, itemsQuantity}) => {
    return <div className={s.card_test}>
        <div className={s.img_test}>
            <img className={s.img} src={mockup} alt="logo" />
        </div>
    </div>
    
}

export default CardTest;
