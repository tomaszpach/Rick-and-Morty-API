import React from 'react';

export default (Component) => {
    // console.log('component', Component);
    return (props) => (
        <div style={{backgroundColor: props.backgroundColor || 'red'}}>
            <Component {...props} />
        </div>
    )
};
