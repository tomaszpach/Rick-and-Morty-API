import React, {Component} from 'react';

import RickAndMortyCharactersCards from '../../containers/RickAndMortyCharactersCards';

class Homepage extends Component {
    render() {
        return (
            <div className="characters-list">
                <RickAndMortyCharactersCards history={this.props.history} id={this.props.match.params.id} />
            </div>
        );
    }
}

export default Homepage;
