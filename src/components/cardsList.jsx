import React from 'react';
import s from './page.module.css';
import Card from './card';
// import Card from './card backup';
import CardTest from './cardTest';

// maps ana array from Cards
let CardsList = (props) => {
    let data=props.cardsForPage;
    let  cardsListing = data.map((p, key) => <Card key={p.id} props={p} />);

    return <div className={s.cards_list}>
        {/* <CardTest/> */}
        {cardsListing}
    </div>
    
}
export default CardsList;
