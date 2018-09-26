import React from 'react';
import FetchError from "../shared/FetchError";
import LoadingSpinner from "../shared/LoadingSpinner";

const CharactersInfo = ({info, error, loading}) => {
    if (error) {
        return <FetchError />
    } else if (loading) {
        return <LoadingSpinner />
    }

    const { count, pages, next, prev } = info;
    // console.log(info);

    return (
        <div className='characters-info-details'>
            <h2>Total characters: {count}</h2>
            <h2>Total pages: {pages}</h2>
            <h2>Next page: {next}</h2>
            <h2>Prev page: {prev ? prev : 'There is no prev page'}</h2>
        </div>
    );


};

export default CharactersInfo;
