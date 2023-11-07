import './App.css';
import React, {Component} from 'react';
import Start from "./components/Start";
import Game from "./components/Game";

class App extends Component {
    constructor(props) {
        super(props);
        this.name = null;
    }

    startGame = () => {
        this.name = JSON.parse(sessionStorage.getItem('name'));
        if (this.name)
            return <Game/>
        return <Start name={'this.name'}/>;
    }

    getName = (name) => {
        if (!name) return null;
    }

    render() {
        return (
            <div className="App">
                {this.startGame()}
            </div>
        );
    }
}

export default App;