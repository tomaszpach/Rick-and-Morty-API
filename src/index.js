import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import { ROOT_URL } from './CONST';

// used API: https://rickandmortyapi.com/

import './App.scss';

class App extends React.Component {
    state = {
        CaptainKirkBio: {},
        Header: null,
        Homepage: null,
        CharacterDetails: null
    };

    componentDidMount() {
        import(/* webpackChunkName: 'Header' */ './components/Header/Header').then(Header => {
            this.setState({ Header: Header.default });
        });
        import(/* webpackChunkName: 'Homepage' */ './components/Homepage/Homepage').then(Homepage => {
            this.setState({ Homepage: Homepage.default });
        });
        import(/* webpackChunkName: 'ContainerCharacterDetails' */ './containers/ContainerCharacterDetails').then(CharacterDetails => {
            this.setState({ CharacterDetails: CharacterDetails.default });
        });
    }

    render() {
        const { Header, Homepage, CharacterDetails } = this.state;
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    {Header ? <Header/> : <div>Header</div>}
                    <div className="app">
                        <Route exact path={ROOT_URL} component={Homepage}/>
                        <Route path={`${ROOT_URL}page/:id`} component={Homepage}/>
                        <Route path={`${ROOT_URL}character/:id`} component={CharacterDetails}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));