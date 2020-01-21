import React from 'react';
import s from './page.module.css';

let Header = (props) => {
    return <div className={s.header}>
        <p>{`${props.iMinOnPage + 1} - ${props.iMaxOnPage + 1} from ${props.cardsAllQuantity}`}</p>
    </div>
    
}

export default Header;
