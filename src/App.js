import './App.css';
import React, {Component} from 'react';
import Start from "./components/Start";
import Game from "./components/Game";
import Result from "./components/Result";
import {warContext} from './utils/warContext'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winOfComp: 0,
            winOfPlayer: 0,
            endgame: false,
            status: '',
            name: '',
        }
    }

    onNameChange = (name) => {
        if (name !== '') {
            sessionStorage.setItem("playerName", JSON.stringify(name));
            this.setState(
                {
                    name: name,
                });
        }
    }
    onWinOfCompChange = (sum, status) => {
        this.setState({
            winOfComp: (this.state.winOfComp + sum),
            endgame: true,
            status: status,
        })
    };
    onWinOfPlayerChange = (sum, status) => {
        this.setState({
            winOfPlayer: (this.state.winOfPlayer + sum),
            endgame: true,
            status: status,
        })
    };
    onStartNewGame = () => {
        this.setState({
            endgame: false
        })
    }

    render() {
        this.name = JSON.parse(sessionStorage.getItem('playerName'));
        if (!this.name)
            return <warContext.Provider>
                <Start onNameChange={this.onNameChange}/>
            </warContext.Provider>;
        if (!this.state.endgame)
            return <Game
                playerName={this.name}
                onWinOfCompChange={this.onWinOfCompChange}
                onWinOfPlayerChange={this.onWinOfPlayerChange}/>
        else return <warContext.Provider value={{
            winOfPlayer: this.state.winOfPlayer,
            winOfComp: this.state.winOfComp,
            status: this.state.status
        }}><Result
            onStartNewGame={this.onStartNewGame}/></warContext.Provider>
    }
}

export default App;