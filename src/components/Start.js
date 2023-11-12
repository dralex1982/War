import React, {Component} from 'react';


class Start extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    handleClickGetName = () => {
        const name = this.state.name.trim();
        this.props.onNameChange(name);
    }

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <div className={'start'}>
                <h1>Ready for WAR</h1>
                <input type={'text'}
                       placeholder={'Enter yor name'}
                       onChange={this.handleChangeName}/>
                <button onClick={this.handleClickGetName}>start</button>
            </div>
        );
    }
};

export default Start;