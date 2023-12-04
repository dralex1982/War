import React, {useContext} from 'react';
import {warContext} from "../utils/warContext";
import {Card} from "react-bootstrap";


const Result = () => {

    const {stats, setStatusGame} = useContext(warContext);

    return (
        <div className={'position-absolute top-50 start-50 translate-middle text-center'}>
                <Card style={{ width: '18rem' }}>
                <Card.Header>End game...</Card.Header>
                <Card.Body>
                    <Card.Title>{stats.statusEndGame}</Card.Title>
                    <h3>LOSE\WIN</h3>
                    <h3>{stats.winOfComp}\{stats.winOfPlayer}</h3>
                    <button className={'btn btn-primary'} onClick={() => setStatusGame(true)}>Again</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Result;
