import React, {Component} from 'react';

// import RickAndMortyCharactersCards from '../../containers/RickAndMortyCharactersCards';

class Homepage extends Component {
    state = {
        RickAndMortyCharactersCards: null
    };

    componentDidMount() {
        import(/* webpackChunkName: 'RickAndMortyCharactersCards' */ '../../containers/RickAndMortyCharactersCards').then(RickAndMortyCharactersCards => {
            this.setState({ RickAndMortyCharactersCards: RickAndMortyCharactersCards.default });
        });
    }
    render() {
        const { RickAndMortyCharactersCards } = this.state;

        return (
            <div className="characters-list">
                {RickAndMortyCharactersCards ? <RickAndMortyCharactersCards history={this.props.history} id={this.props.match.params.id} /> : <div>loading</div>}
            </div>
        );
    }
}

export default Homepage;
