import React, {useContext, useEffect, useRef, useState} from 'react';
import CARDS from "../utils/constants";
import {warContext} from "../utils/warContext";

const Game = () => {

    const {name, onWinOfCompChange, onWinOfPlayerChange} = useContext(warContext);

    const [cardStatus, setCardStatus] = useState({
        cardOfComputer: null,
        cardOfPlayer: null,
    })

    useEffect(() => {
        refreshTable();
    }, [])

    const shuffleCard = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    const isPrioritet = (cards) => {
        const str = '/static/media/';
        const player1 = cardStatus.cardOfComputer;
        const player2 = cardStatus.cardOfPlayer;

        if (player1.substring(str.length)[0]
            === player2.substring(str.length)[0])
            return null;
        const index1 = cards.indexOf(player1);
        const index2 = cards.indexOf(player2);
        return index1 > index2 ? 1 : 2;
    }
    const refreshTable = () => {
        setCardStatus({
            cardOfComputer: cards.current.pop(),
            cardOfPlayer: cards.current.pop()
        })
    }
    const endGame = (count1, count2) => {
        if (count1 === count2)
            onWinOfCompChange(0, 'DRAW');
        else if (count1 > count2)
            onWinOfCompChange(1, 'YOU LOSE');
        else onWinOfPlayerChange(1, 'YOU WIN');
    }
    const handleClickNext = () => {
        if (cards.current.length) {
            let res = isPrioritet(CARDS);
            if (res)
                res === 1 ? scoreOfComputer.current++ : scoreOfPlayer.current++;
            refreshTable();
        } else endGame(scoreOfComputer.current, scoreOfPlayer.current)
    }


    let cards = useRef(shuffleCard([...CARDS]));
    let scoreOfComputer = useRef(0);
    let scoreOfPlayer = useRef(0);

    return (
        <div className={'game'}>
            <h2>COMPUTER - {scoreOfComputer.current}pnts</h2>
            <img style={{width: 150, margin: 10}}
                 name={'cardOfComputer'}
                 src={cardStatus.cardOfComputer}/>
            <img style={{width: 150, margin: 10}}
                 name={'cardOfPlayer'}
                 src={cardStatus.cardOfPlayer}/>
            <button onClick={handleClickNext}>next</button>
            <h2>{name} - {scoreOfPlayer.current}pnts</h2>
        </div>
    );

}

export default Game;