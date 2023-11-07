import React, {Component} from 'react';

class Result extends Component {
    render() {
        return (
            <div className={'result'}>
                <h1>LOSE\WIN</h1>
                <h1>RESULT</h1>
                <button type={'submit'}
                        onClick={this.handleClickAgain}>Again
                </button>
            </div>
        );
    }
}

export default Result;