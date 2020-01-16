import React from 'react';
import s from './page.module.css';
import mockup from '../img/320×240.jpg';

let Card = (props) => {

    let data = props.props;

    console.log(data);

    return <div className={s.card}>
        <div className={s.img_block}>
            <img className={s.img} src={mockup} alt="logo" />
        </div>
        <div className={s.title}>
            {/* {data[1]} */}
        </div>
        <div className={s.date_from}>
            date
        </div>
        <div className={s.rating}>
            rating
        </div>
        <div className={s.price}>
            price
        </div>
    </div>
    
}

export default Card;
