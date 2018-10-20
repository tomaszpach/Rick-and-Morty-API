import React, {Component} from 'react';
import axios from "axios";
import CharacterDetails from "../components/CharacterDetails/CharacterDetails";

const API_URL = "https://rickandmortyapi.com/api/character/";

class ContainerCharacterDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            loading: true,
            character: []
        }
    }

    getResultsFromApi() {
        this.setState({loading: true});

        axios.get(API_URL + this.state.id).then(({data}) => {
            this.setState({character: data, loading: false});
        }).catch(error => {
            this.setState({error});
        });
    }

    componentDidMount() {
        this.getResultsFromApi();
    }

    render() {
        const { loading, character } = this.state;

        return (
            <CharacterDetails
                loading={loading}
                character={character}
            />
        );
    }
}

export default ContainerCharacterDetails;
