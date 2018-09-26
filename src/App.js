import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Inputs from './components/inputs/index';
import RickAndMortyCharactersCards from './containers/RickAndMortyCharactersCards';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    onSubmit(e) {

        console.log('get input value');
        console.log(this.state.value);


        e.preventDefault();

    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };

    render() {
        return (
            <div className="App">
                {/*<form onSubmit={(e) => this.onSubmit(e)}>*/}
                    {/*<label>*/}
                        {/*Name:*/}
                        {/*<input type="text" name="name" value={this.state.value} onChange={(e) => this.handleChange(e)} />*/}
                    {/*</label>*/}
                    {/*<input type="submit" value="Submit" />*/}
                {/*</form>*/}
                {/*<Inputs />*/}
                <RickAndMortyCharactersCards />
            </div>
        );
    }
}

export default App;
