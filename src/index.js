import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import CharactersCards from './components/Homepage/CharactersCards';
import CharacterDetails from './containers/ContainerCharacterDetails';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/"  component={CharactersCards} />
            <Route exact path="/page/:id"  component={CharactersCards} />
            <Route path="/character/:id" component={CharacterDetails} />
        </div>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
