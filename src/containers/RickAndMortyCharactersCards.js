import React, {Component} from 'react';
import axios from 'axios';

import CharactersCards from '../components/CharactersCards';
import CharactersInfo from "../components/CharactersInfo/CharactersInfo";
import Navigation from "../components/Navigation/Navigation";

const API_URL = "https://rickandmortyapi.com/api/character/";

class RickAndMortyCharactersCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            data: [],
            page: 1,
            buttonText: 'next page',
            loading: true,
            error: null
        };
    }

    getResultsFromApi() {
        this.setState({loading: true});
        axios.get(`${API_URL}?page=${this.state.page}`).then(({data: {results, info}}) => {
            this.setState({characters: results, data: info, loading: false})
        });
    }

    getPageResults(nextPrev) {
        if (nextPrev === 'next') {
            this.setState({page: this.state.page + 1}, () => {
                this.getResultsFromApi()
            })
        } else {
            this.setState({page: this.state.page - 1}, () => {
                this.getResultsFromApi()
            })
        }
    }

    componentDidMount() {
        axios.get(API_URL).then(({data: {results, info}}) => {
            this.setState({characters: results, data: info, loading: false});
        }).catch(error => {
            this.setState({error});
        });
    }


    render() {
        const {characters, error, loading, data, page} = this.state;
        console.log(this.state.characters);

        return (
            <div>
                <Navigation page={page} getResults={(nextPrev) => this.getPageResults(nextPrev)}/>
                <CharactersInfo info={data} error={error} loading={loading}/>
                <CharactersCards characters={characters} error={error} loading={loading}/>
            </div>
        )
    }
}

export default RickAndMortyCharactersCards;