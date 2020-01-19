import React from 'react';
import Paginator from './paginator';
import Header from './header';
import CardsList from './cardsList';
import s from './page.module.css';
import PreloaderCircle from "./PreloaderCircle";

export class PageWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
//Async loading JSON from server to local state 
    componentDidMount() {
        fetch("./list_ext.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
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
//Show preloader svg on screen until data not downloaded
//Prevents unneccessary rerenders of children components 
    render() {
        if ( !this.state.isLoaded ) {
            return <PreloaderCircle />
        }

        console.log(this.state);

        return <div className={s.page_wrapper}>
            <Header />
            <CardsList props={this.state.items}/>
            <Paginator />
        </div>
    }
}