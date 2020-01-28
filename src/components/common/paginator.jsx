import React, { useState, useEffect } from "react";
import s from "./../page.module.css";

let Paginator = ({ lastPage = 2, currentPage = 1, setCurrentPage }) => {
    const [arrNumbers, setArrNumbers] = useState([]);

    //THIS STATE for setting pages quantity in pagination
    const [buttonsQ, setButtonsQ] = useState(5);

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
    const arrButtons = arrNumbers.map((button, key) => {
        let currentStyle = null
        button === currentPage ? currentStyle = s.button_current : currentStyle = s.button
        return ( 
            <div className={currentStyle} key={key} onClick={()=>setCurrentPage(button)} >
                {button}
            </div>
        ) 

    } )
    console.log('arrButtons ', arrButtons); 
    return (
        <div className={s.paginator}>
            {arrButtons}
        </div>
    );
}; 

export default Paginator;
