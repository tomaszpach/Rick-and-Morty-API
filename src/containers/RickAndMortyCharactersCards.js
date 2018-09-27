import React, {Component} from 'react';
import axios from 'axios';

import CharactersCards from '../components/CharactersCards';
import CharactersInfo from "../components/Homepage/CharactersInfo/CharactersInfo";
import Navigation from "../components/Homepage/Navigation/Navigation";

const API_URL = "https://rickandmortyapi.com/api/character/";

class RickAndMortyCharactersCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            character: [],
            data: [],
            page: 1,
            loading: true,
            error: null
        };
    }

    getResultsFromApi() {
        this.setState({loading: true});

        axios.get(`${API_URL}?page=${this.state.page}`).then(({data: {results, info}}) => {
            this.setState({characters: results, data: info, loading: false})
        }).catch(error => {
            this.setState({error});
        });
    }

    getPageResults(nextPrev) {
        if (nextPrev === 'next' && this.state.page < this.state.data.pages) {
            this.setState({page: this.state.page + 1}, () => {
                this.getResultsFromApi()
            })
        }

        if (nextPrev !== 'next' && this.state.page > 1) {
            this.setState({page: this.state.page - 1}, () => {
                this.getResultsFromApi()
            })
        }
    }

    updatePage(e) {
        this.setState({page: parseInt(e.target.value, 10)});
    }

    componentDidMount() {
        this.getResultsFromApi();

        axios.get(`${API_URL}2`).then(({data}) => {
            this.setState({character: data});
        });
    }


    render() {
        const {characters, error, loading, data, page} = this.state;

        return (
            <div>
                <input type="number" min={1} max={this.state.data.pages} value={this.state.page} onChange={(e) => this.updatePage(e)} />
                <button onClick={() => this.getResultsFromApi()}>change!</button>
                <button onClick={() => console.log(this.state.character)}>details</button>
                <Navigation page={page} getResults={(nextPrev) => this.getPageResults(nextPrev)}/>
                <CharactersInfo info={data} error={error} loading={loading}/>
                <CharactersCards characters={characters} error={error} loading={loading}/>
            </div>
        )
    }
}

export default RickAndMortyCharactersCards;