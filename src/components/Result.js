import React, {Component} from 'react';
import {warContext} from "../utils/warContext";
import Start from "./Start";
import App from "../App";
import Game from "./Game";
import {render} from "@testing-library/react";

const Result = ({onStartNewGame}) => {

    const handleClickNextGame = () => {
        onStartNewGame();
    }

    return (
        <warContext.Consumer>
            {value =>
                <div className={'result'}>
                    <h1>{value.status}</h1>
                    <h2>LOSE\WIN</h2>
                    <h2>{value.winOfComp}\{value.winOfPlayer}</h2>
                    <button onClick={handleClickNextGame}>Again</button>
                </div>
            }
        </warContext.Consumer>
    );
};

export default Result;
