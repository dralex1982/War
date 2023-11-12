import React, {Component, useContext} from 'react';
import CARDS from "../utils/constants";

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
        this.setState(
            {
                cardOfComputer: this.cards.pop(),
                cardOfPlayer: this.cards.pop()
            }
        )
    }

    handleClickNext = () => {
        if (this.cards.length) {
            let res = this.isPrioritet(CARDS);
            if (res)
                res === 1 ? this.scoreOfComputer++ : this.scoreOfPlayer++;
            this.refreshTable();
        } else {
            if (this.scoreOfComputer === this.scoreOfPlayer)
                this.props.onWinOfCompChange(0, 'DRAW');
            else if (this.scoreOfComputer > this.scoreOfPlayer)
                this.props.onWinOfCompChange(1, 'YOU LOSE');
            else this.props.onWinOfPlayerChange(1, 'YOU WIN');
        }
    }

    render() {
        return (
            <div className={'game'}>
                <h2>COMPUTER - {this.scoreOfComputer}pnts</h2>
                <img style={{width: 150, margin: 10}}
                     name={'cardOfComputer'}
                     src={this.state.cardOfComputer}/>
                <img style={{width: 150, margin: 10}}
                     name={'cardOfPlayer'}
                     src={this.state.cardOfPlayer}/>
                <button onClick={this.handleClickNext}>next</button>
                <h2>{this.props.playerName} - {this.scoreOfPlayer}pnts</h2>
            </div>
        );
    }
}

export default Game;