import React, {Component} from 'react';
import axios from 'axios';

import CharactersCards from '../components/CharactersCards';

const API_URL = "https://rickandmortyapi.com/api/character";

class RickAndMortyCharactersCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            loading: true,
            error: null
        };
    }


    componentDidMount() {
        axios.get(API_URL).then(({ data: { results } }) => {
            this.setState({ characters: results, loading: false });
        }).catch( error => {
            this.setState({ error });
        });
    }


    render() {
        const { characters, error, loading } = this.state;

        return <CharactersCards characters={characters} error={error} loading={loading} />
    }
}

export default RickAndMortyCharactersCards;