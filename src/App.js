import './App.css';
import React, {Component} from 'react';
import Start from "./components/Start";
import Game from "./components/Game";
import Result from "./components/Result";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winOfComp: 0,
            winOfPlayer: 0,
            endgame: false,
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
    onWinOfCompChange = (sum) => {
        this.setState({
            winOfComp: (this.state.winOfComp + sum),
            endgame: true
        })
    };
    onWinOfPlayerChange = (sum) => {
        this.setState({
            winOfPlayer: (this.state.winOfPlayer + sum),
            endgame: true
        })
    };
    onStartNewGame = ()=>{
        this.setState({
            endgame: false
        })
    }
    render() {
        this.name = JSON.parse(sessionStorage.getItem('playerName'));
        if (!this.name)
            return <Start onNameChange={this.onNameChange}/>;
        if (!this.state.endgame)
            return <Game
                playerName={this.name}
                onWinOfCompChange={this.onWinOfCompChange}
                onWinOfPlayerChange={this.onWinOfPlayerChange}/>
        else return <Result
            winOfPlayer={this.state.winOfPlayer}
            winOfComp={this.state.winOfComp}
            onStartNewGame={this.onStartNewGame}/>
    }
}

export default App;