import React, {Component} from 'react';
import './App.css';
import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character/";

class CharacterDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            character: []
        }
    }


    getResultsFromApi() {
        this.setState({loading: true});

        axios.get(API_URL + this.state.id).then(({data}) => {
            this.setState({character: data, loading: false});
            console.log(data);
        }).catch(error => {
            this.setState({error});
        });
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        this.getResultsFromApi();
    }

    render() {
        const { name, status, gender, species, location } = this.state.character;

        return (
            <div className="App CharacterDetails">
                <h2>{name}</h2>
                <p>Is still alive: <b>{status}</b></p>
                <p>Gender: <b>{gender}</b></p>
                <p>Species: <b>{species}</b></p>
                <p>Location: <b>{}</b></p>
            </div>
        );
    }
}

export default CharacterDetails;
