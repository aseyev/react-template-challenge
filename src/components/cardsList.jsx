import React from 'react';
import s from './page.module.css';
import Card from './card';
import CardTest from './cardTest';

let CardsList = (props) => {
    // console.log(props);
    // console.log(props.props);
    return <div className={s.cards_list}>
        <Card/>
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
