import React, {Component, useContext} from 'react';
import {warContext} from "../utils/warContext";
import CARDS from "../utils/constants";
import Result from "./Result";


class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.scoreOfComputer = 0
        this.scoreOfPlayer = 0
    }

    componentDidMount() {
        this.cards = this.shuffleCard([...CARDS]);
        this.refreshTable();
    }

    shuffleCard = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    isPrioritet = (cards) => {
        const str = '/static/media/';
        const player1 = this.state.cardOfComputer;
        const player2 = this.state.cardOfPlayer;

        if (player1.substring(str.length)[0]
            === player2.substring(str.length)[0])
            return null;
        const index1 = cards.indexOf(player1);
        const index2 = cards.indexOf(player2);
        return index1 > index2 ? 1 : 2;
    }

    refreshTable() {
        if (this.cards.length)
            this.setState(
                {
                    cardOfComputer: this.cards.pop(),
                    cardOfPlayer: this.cards.pop()
                }
            )
        else {
            if (this.scoreOfComputer === this.scoreOfPlayer)
                this.props.onWinOfCompChange(0);
            else if (this.scoreOfComputer > this.scoreOfPlayer)
                this.props.onWinOfCompChange(1);
            else this.props.onWinOfPlayerChange(1);
        }
    }

    handleClickNext = () => {
        let res = this.isPrioritet(CARDS);
        if (res)
            res === 1 ? this.scoreOfComputer++ : this.scoreOfPlayer++;
        this.refreshTable();
    }


    render() {
        return (
            <div className={'game'}>
                <h1>COMPUTER</h1>
                <h2>{this.scoreOfComputer}</h2>
                <img style={{width: 200}}
                     name={'cardOfComputer'}
                     src={this.state.cardOfComputer}/>
                <img style={{width: 200}}
                     name={'cardOfPlayer'}
                     src={this.state.cardOfPlayer}/>
                <button onClick={this.handleClickNext}>next</button>
                <h1>{this.props.playerName}</h1>
                <h2>{this.scoreOfPlayer}</h2>
            </div>
        );
    }
}

export default Game;