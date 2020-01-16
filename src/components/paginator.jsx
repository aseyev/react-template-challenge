import React from 'react';
import s from './page.module.css';

let Paginator = ({pages=2, currentPage=1}) => {
    return <div className={s.paginator}>
        <div className={s.button_current}>1</div>
        <div className={s.button}>2</div>
        <div className={s.button_next}>></div>
    </div>
    
}

export default Paginator;
