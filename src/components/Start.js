import React, {useContext, useState} from 'react';
import {warContext} from "../utils/warContext";
import {Card} from "react-bootstrap";

const Start = () => {

    const {onNameChange} = useContext(warContext);
    const [nameValue, setNameValue] = useState('');

    const handleClickGetName = () => {
        onNameChange(nameValue);
    }

    const handleChangeName = (event) => {
        const newName = event.target.value.trim();
        setNameValue(newName);
    }

    return (
        <div className={'position-absolute top-50 start-50 translate-middle text-center'}>
                <Card style={{ width: '18rem' }}>
                <Card.Header>Ready for WAR</Card.Header>
                <input type={'text'}
                       placeholder={'Enter yor name'}
                       onChange={handleChangeName}/>
                <button className={'btn btn-primary'}
                        onClick={handleClickGetName}>start
                </button>
            </Card>
        </div>
    );
};

export default Start;