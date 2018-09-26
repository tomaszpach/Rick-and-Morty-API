import React from 'react';

const Navigation = ({page, getResults}) => {
    return (
        <div>
            <button data-page={page} onClick={() => getResults()}>prev page ({page})</button>
            <button data-page={page} onClick={() => getResults('next')}>next page ({page})</button>
        </div>
    );
};

export default Navigation;
