import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/App.css';
import CharactersCards from './components/Homepage/CharactersCards';
import CharacterDetails from './containers/ContainerCharacterDetails';
import registerServiceWorker from './registerServiceWorker';
import Header from "./components/Header/Header";

// used API: https://rickandmortyapi.com/

// todo prepare solid navigation and pagination
// todo rebuild homepage
// todo RWD!
// todo rebuild detail page
ReactDOM.render((
    <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <div className="app">
                <Route exact path="/"  component={CharactersCards} />
                <Route exact path="/page/:id"  component={CharactersCards} />
                <Route path="/character/:id" component={CharacterDetails} />
            </div>
        </div>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
