import React, {useContext, useState} from 'react';
import {warContext} from "../utils/warContext";


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
            <div className={'start'}>
                <h1>Ready for WAR</h1>
                <input type={'text'}
                       placeholder={'Enter yor name'}
                       onChange={handleChangeName}/>
                <button onClick={handleClickGetName}>start</button>
            </div>
        );
};

export default Start;