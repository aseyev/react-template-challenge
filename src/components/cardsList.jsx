import React from 'react';
import s from './page.module.css';
import Card from './card';
import CardTest from './cardTest';

let CardsList = (props) => {
    let data=props.props;
    let  cardsListing = data.map(p => <Card props={p} />);

    return <div className={s.cards_list}>
        {/* <CardTest/> */}
        {cardsListing}
    </div>
    
}

export default CardsList;
