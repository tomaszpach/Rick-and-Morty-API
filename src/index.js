import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Header from "./components/Header/Header";
import Homepage from './components/Homepage/Homepage';
import CharacterDetails from './containers/ContainerCharacterDetails';

import './styles/App.css';
import { ROOT_URL } from './CONST';

// used API: https://rickandmortyapi.com/

// todo prepare solid navigation and pagination
// todo rebuild homepage
// todo RWD!
// todo rebuild detail page
ReactDOM.render((
    <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <div className="app">
                <Route exact path={ROOT_URL} component={Homepage}/>
                <Route path={`${ROOT_URL}page/:id`} component={Homepage}/>
                <Route path={`${ROOT_URL}character/:id`} component={CharacterDetails}/>
            </div>
        </div>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
