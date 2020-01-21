import React from 'react';
import Circle from "../../img/circlesСircle.svg";
import s from './../page.module.css';

let PreloaderCircle = () => {
    return <div className={s.preloader_position}>
        <img src={Circle} alt={'loading...'}/>
    </div>
    
}

export default PreloaderCircle;