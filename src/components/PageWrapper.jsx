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
            items: ""
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

    render() {
        
        console.log(this.state)
        return <div className={s.page_wrapper}>
            <Header />
            <CardsList />
            <Paginator />
        </div>
    }
}