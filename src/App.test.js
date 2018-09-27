import React from 'react';
import ReactDOM from 'react-dom';
import CharactersCards from './components/Homepage/CharactersCards';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CharactersCards />, div);
  ReactDOM.unmountComponentAtNode(div);
});
