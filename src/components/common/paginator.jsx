import React, { useState, useEffect } from "react";
import s from "./../page.module.css";

let Paginator = ({ lastPage = 2, currentPage = 1, setCurrentPage }) => {
    const [arrNumbers, setArrNumbers] = useState([]);
    const [buttonsQ, setButtonsQ] = useState(9);

    useEffect(() => {
        if (buttonsQ < 3 || buttonsQ > 9 || buttonsQ%2===0) {setButtonsQ(5)}
        let arr = [];
        if (buttonsQ >= lastPage) {
            for (let i = 1; i <= lastPage; i++) {arr.push(i)}
        }
        else if (currentPage <= Math.floor(buttonsQ/2)) {
            for (let i = 1; i <= buttonsQ; i++) {arr.push(i)}
        }
        else if (currentPage > lastPage - Math.floor(buttonsQ/2) ) {
            for (let i = lastPage-buttonsQ+1; i <= lastPage; i++) {arr.push(i)}
        }
        else {
            for (let i = currentPage-Math.floor(buttonsQ/2); i <= currentPage+Math.floor(buttonsQ/2); i++) {arr.push(i)}
        }

        setArrNumbers(arr);
    }, [currentPage, lastPage, buttonsQ ]);
    //CONTROL
    console.log('arrNumbers ', arrNumbers); 
    let arrButtons = arrNumbers.map((button, i) => {return (
        <div>{button[i]}</div>
        )
    } )
    console.log('arrButtons ', arrButtons); 
    return (
        <div className={s.paginator}>
            <div className={s.button_current}>1</div>
            <div className={s.button}>2</div>
            <div className={s.button_next}>></div>
        </div>
    );
};

export default Paginator;
