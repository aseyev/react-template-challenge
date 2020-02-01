import React from 'react';
import Paginator from './common/paginator';
import Header from './header';
import CardsList from './cardsList';
import s from './page.module.css';
import PreloaderCircle from "./common/PreloaderCircle";

export class PageWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            cards: [],
            currentPageNumber: 1,
            cardsOnPage: 12,
            cardsAllQuantity: 0,
        };
    }
    setCurrentPage = (newCurrentPage) => {
        this.setState({
            currentPageNumber: newCurrentPage
        })
    }
//Async loading JSON from server to local state 
    componentDidMount() {
        fetch("./list_ext.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        cards: result,
                        cardsAllQuantity: result.length
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
        let iMinOnPage = (this.state.currentPageNumber - 1) * this.state.cardsOnPage;
        let iMaxOnPage = (this.state.currentPageNumber * this.state.cardsOnPage) - 1;
        if (iMaxOnPage>this.state.cardsAllQuantity) iMaxOnPage = this.state.cardsAllQuantity-1;

        let lastPageNumber = Math.ceil(this.state.cardsAllQuantity / this.state.cardsOnPage);
        let cardsForPage = this.state.cards.slice(iMinOnPage,iMaxOnPage+1)

        // console.log(this.state);
        // console.log(cardsForPage);
        // console.log('first element\'s id on page ',iMinOnPage,', last element\'s id on page ',iMaxOnPage);
        // console.log('pages quantity ',lastPageNumber, ', current page ', this.state.currentPageNumber);

        return <div className={s.page_wrapper}>
            <Header iMinOnPage={iMinOnPage} iMaxOnPage={iMaxOnPage} cardsAllQuantity={this.state.cardsAllQuantity}/>
            <CardsList cardsForPage={cardsForPage}/>
            <Paginator lastPage={lastPageNumber} 
                currentPage={this.state.currentPageNumber} 
                setCurrentPage={this.setCurrentPage}/>
        </div>
    }
}