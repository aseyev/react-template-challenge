import React from 'react';
import s from './page.module.css';
import Card from './card';
import CardTest from './cardTest';

let CardsList = (props) => {

    // console.log(data);

    return <div className={s.cards_list}>
        <Card props={props}/>
        <Card/>
        <CardTest/>
        <CardTest/>
        <CardTest/>
        <CardTest/>
        <CardTest/>
        <CardTest/>
        <CardTest/>
        <CardTest/>
        <CardTest/>
        <CardTest/>
        
    </div>
    
}

export default CardsList;
