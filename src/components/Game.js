import React, {Component} from 'react';

class Game extends Component {
    render() {
        return (
            <div className={'game'}>
                <h1>COMPUTER</h1>
                <div>card1</div>
                <div>card2</div>
                <button type={'submit'} onClick={this.handleClickNext}>next</button>
                <h1>YOU</h1>
            </div>
        );
    }
}

export default Game;