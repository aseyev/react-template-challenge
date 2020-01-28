import React from 'react';
import s from './page.module.css';

//Single Card 
const Card = (props) => {

    let data = props.props;

    return <div className={s.card} key={props.id} onMouseOver={props.onMouseOver}>

        <Picture url={data.image_url} />

        <TitleFormatted props={data.title} />

        <TimePassed props={data.created_at} />

        <StarRating props={data.vote} />

        <div className={s.price}>
            {`฿${data.price.toFixed(2)}`}
        </div>

    </div>
}
const Picture = (props) => {

    return <div className={s.img_block}>
        <img className={s.img} src={props.url} alt="loading" />
        {/* <img src={user.photos.small != null ? user.photos.small : userTemplatePic} alt={user.name} /> */}
    </div>
}
const TitleFormatted = (props) => {
    let titleLoaded = props.props;
    let titleFormat = titleLoaded;
    let maxL = 88;
    if (titleLoaded.length > maxL) {titleFormat = titleLoaded.slice(0, maxL-3)+'...'}
    return <div className={s.title}>
        {titleFormat}
    </div>
}

// Counts a Day gap between loading and now, and chooses a phrase
const TimePassed = (props) => {
    let data = props.props;
    let now = new Date();
    let fromJson = new Date(data);
    const diffDays = Math.floor((now - fromJson) / 86400000);

    const periodSwitch = (counter) => {
        if (counter / 365 > 1) { return "More than 1 year ago" }
        else {
            if (counter / 30 > 1) { return "More than 1 month ago" }
            else {
                if (counter / 7 > 1) { return "More than 1 week ago" }
                else {
                    if (counter === 0) { return "Posted today" }
                    else {return "Out of Date" }
                    }
                }
            }
        }
        return <div className={s.date_from}>
            {periodSwitch(diffDays)}
        </div>
    }
    
// Forms JSX from an array of correctly colored stars
    const StarRating = (props) => {
        const stars = [];
        let rating = props.props
        for (let i = 0; i < 5; i++) {
            const starColor = () => i < rating ? s.red : s.gray;
            stars.push(<div className={starColor()}  key={i} >&#9733;</div>);
        }
        return <div className={s.rating}>
            {stars}
        </div>
    }

    export default Card;
