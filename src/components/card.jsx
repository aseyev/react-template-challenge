import React from 'react';
import s from './page.module.css';

let Card = (props) => {

    let data = props.props;

    let Picture = (props) => {
        return <div className={s.img_block}>
            <img className={s.img} src={props.props} alt="loading" />
        </div>
    }

    return <div className={s.card}>
        <Picture props={data.image_url} />
        <div className={s.title}>
            {data.title}
        </div>
        <div className={s.date_from}>
            {data.created_at}
        </div>
        <StarRating props={data.vote} />
        <div className={s.price}>
            {data.price}
        </div>
    </div>

}

let StarRating = (props) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        let starColor = () => i < props.props ? s.red : s.gray;
        stars.push(<div className={starColor()}>&#9733;</div>);
    }
    return <div className={s.rating}>
        {stars}
    </div>
}


export default Card;
