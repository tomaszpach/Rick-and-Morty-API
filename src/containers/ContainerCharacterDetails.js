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
            console.log(data);
        }).catch(error => {
            this.setState({error});
        });
    }

    componentDidMount() {
        this.getResultsFromApi();
    }

    render() {
        const { name, status, image } = this.state.character;

        return (
            <div className="App CharacterDetails">
                <CharacterDetails
                    loading={this.state.loading}
                    name={name}
                    status={status}
                    image={image}
                />
            </div>
        );
    }
}

export default ContainerCharacterDetails;
