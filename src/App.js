import './App.css';
import React, {useState} from 'react';
import Start from "./components/Start";
import Game from "./components/Game";
import Result from "./components/Result";
import {warContext} from './utils/warContext'

const App = () => {

    const [stats, setStats] = useState({
        winOfComp: 0,
        winOfPlayer: 0,
        statusEndGame: '',
    });

    const [statusGame, setStatusGame] = useState(true);
    const [name, setName] = useState(JSON.parse(sessionStorage.getItem('playerName')));

    const onNameChange = value => {
        setName(name => {
            if (value !== '')
                sessionStorage.setItem("playerName", JSON.stringify(value));
            return {name: value || name.name}
        })
    };
    const onWinOfCompChange = (sum, statusEndGame) => {
        setStats({
            winOfComp: (stats.winOfComp + sum),
            winOfPlayer: stats.winOfPlayer,
            statusEndGame: statusEndGame,
        });
        setStatusGame(false);
    }
    const onWinOfPlayerChange = (sum, statusEndGame) => {
        setStats({
            winOfComp: stats.winOfComp,
            winOfPlayer: (stats.winOfPlayer + sum),
            statusEndGame: statusEndGame,
        });
        setStatusGame(false);
    }

    //setName();
    //console.log(!name)

    if (!name)
        return <warContext.Provider
            value={{onNameChange}}><Start/>
        </warContext.Provider>;
    if (statusGame)
        return <warContext.Provider
            value={{stats, name, onWinOfCompChange, onWinOfPlayerChange}}><Game/>
        </warContext.Provider>
    else return (<warContext.Provider
        value={{stats, setStatusGame}}><Result/>
    </warContext.Provider>)

}

export default App;