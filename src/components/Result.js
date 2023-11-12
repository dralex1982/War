import React, {Component} from 'react';
import {warContext} from "../utils/warContext";
import Start from "./Start";
import App from "../App";
import Game from "./Game";
import {render} from "@testing-library/react";

class Result extends Component {

    handleClickNextGame = () => {
        this.props.onStartNewGame();
    }

    render() {
        return (
            <div className={'result'}>
                <h1>LOSE\WIN</h1>
                <h1>{this.props.winOfComp}\{this.props.winOfPlayer}</h1>
                <button onClick={this.handleClickNextGame}>Again
                </button>
            </div>
        );
    }

};

export default Result;
