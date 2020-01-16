import React, {useState} from 'react';
import s from './page.module.css';
import Card from './card';
import CardTest from './cardTest';

let CardsList = (props) => {
    const [data, setData] = useState(props.props);

    // console.log(data);

    return <div className={s.cards_list}>
        <Card props={data}/>
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
