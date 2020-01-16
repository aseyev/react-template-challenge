import React from 'react';
import Line from "../img/circled-line";
import s from './preloader.module.css';

let PreloaderLine = () => {
    return <div className={s.preloader_position}>
        <img src={Line} alt={'loading...'}/>
    </div>
    
}

export default PreloaderLine;