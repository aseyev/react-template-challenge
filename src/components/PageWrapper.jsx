import React from 'react';
import Paginator from './paginator';
import Header from './header';
import CardsList from './cardsList';
import s from './page.module.css';

export class PageWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch("../../list.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    initialState = {
        id: 1,
        title: "Get Rid of ACOMMERCE For Good",
        vote: 5,
        price: 200,
        image_url: "http://lorempixel.com/320/240?random1",
        created_at: "2018-12-08 17:01:15"
    };
    render() {
        return <div className={s.page_wrapper}>
            <Header />
            <CardsList props={this.initialState} />
            <Paginator />
        </div>
    }
}