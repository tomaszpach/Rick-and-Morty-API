import React from 'react';

export default (Component) => {
    return (props) => (
        <div style={{backgroundColor: props.backgroundColor || 'red'}}>
            <Component {...props} />
        </div>
    )
};
