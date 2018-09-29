import React, {Component} from 'react';
import axios from 'axios';

import CharactersList from '../components/CharactersList';
import Navigation from "../components/Homepage/Navigation/Navigation";

const API_URL = "https://rickandmortyapi.com/api/character/";

class RickAndMortyCharactersCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            character: [],
            data: [],
            page: parseInt(this.props.id, 10) || 1,
            loading: true,
            error: null
        };
    }

    updateWindowHistory() {
        window.history.pushState("object or string", "Title", `/page/${this.state.page}`);
    }

    getResultsFromApi() {
        this.setState({loading: true});

        axios.get(`${API_URL}?page=${this.state.page}`).then(({data: {results, info}}) => {
            this.setState({characters: results, data: info, loading: false})
        }).catch(error => {
            this.setState({error});
        });

        this.updateWindowHistory();
    }

    getPageResults(nextPrev) {
        if (nextPrev === 'next' && this.state.page < this.state.data.pages) {
            this.setState({page: this.state.page + 1}, () => {
                this.getResultsFromApi();
                this.updateWindowHistory();
            })
        }

        if (nextPrev !== 'next' && this.state.page > 1) {
            this.setState({page: this.state.page - 1}, () => {
                this.getResultsFromApi();
                this.updateWindowHistory();
            })
        }
    }

    updatePage(e) {
        this.setState({page: parseInt(e.target.value, 10)});
    }

    componentDidMount() {
        this.getResultsFromApi();
    }


    render() {
        const {characters, error, loading, data, page} = this.state;

        return (
            <div>
                <input type="number" min={1} max={this.state.data.pages} value={this.state.page} onChange={(e) => this.updatePage(e)} />
                <button onClick={() => this.getResultsFromApi()}>change!</button>
                <Navigation page={page} getResults={(nextPrev) => this.getPageResults(nextPrev)}/>
                <CharactersList characters={characters} error={error} loading={loading}/>
            </div>
        )
    }
}

export default RickAndMortyCharactersCards;