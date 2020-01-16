import React from 'react';
import Paginator from './paginator';
import Header from './header';
import CardsList from './cardsList';
import s from './page.module.css';

export class PageWrapper extends React.Component {
    

    render() {
        return <div className={s.page_wrapper}>
            <Header />
            <CardsList />
            <Paginator />
        </div>
    }
}