import React, {Component, useContext} from 'react';
import {warContext} from "../utils/warContext";
import Start from "./Start";
import App from "../App";
import Game from "./Game";
import {render} from "@testing-library/react";

const Result = () => {

    const {stats, setStatusGame} = useContext(warContext);

    return (
        <div className={'result'}>
            <h1>{stats.statusEndGame}</h1>
            <h2>LOSE\WIN</h2>
            <h2>{stats.winOfComp}\{stats.winOfPlayer}</h2>
            <button onClick={() => setStatusGame(true)}>Again</button>
        </div>
    );
};

export default Result;
