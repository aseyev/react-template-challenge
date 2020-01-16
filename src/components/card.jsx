import React from 'react';
import s from './page.module.css';

let Card = (props) => {

    let data = props.props;

    return <div className={s.card}>

        <Picture props={data.image_url} />

        <div className={s.title}>
            {data.title}
        </div>

        <TimePassed props={data.created_at} />

        <StarRating props={data.vote} />

        <div className={s.price}>
            {data.price}
        </div>

    </div>
}
let Picture = (props) => {
    return <div className={s.img_block}>
        <img className={s.img} src={props.props} alt="loading" />
    </div>
}

let TimePassed = (props) => {
    let data = props.props;
    let now = new Date();
    let fromJson = new Date(data);
    const diffDays = Math.floor((now - fromJson)/86400000);
    
    return <div className={s.date_from}>
        {`Posted ${diffDays} Days ago`}
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
