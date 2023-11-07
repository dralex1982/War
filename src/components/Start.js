import React from 'react';

const Start = () => {
    let setNameToSessionStorage = name => {
        sessionStorage.setItem("playerName", JSON.stringify(name));
    }
    let handleSubmitGetName = e => {
        e.preventDefault();
        const name = e.currentTarget.name.value.trim();
        if (name !== '')
            setNameToSessionStorage(name);
        console.log(name);
    }
    return (
        <div className={'start'}>
            <h1>Ready for WAR</h1>
            <form onSubmit={handleSubmitGetName}>
                <input type={'text'} name={'name'} placeholder={'Enter yor name'}/>
                <button type={'submit'}>start</button>
            </form>
        </div>
    );
};

export default Start;