import React from 'react';
import EnhancedHoc from './HocComponent';

const HocEnhancedApp = (props) => {
    // console.log('hocEnhancedApp props', props);
    return (
        <p>Hello enhanced App (Higher-order component) {props.foo}</p>
    );
};

export default EnhancedHoc(HocEnhancedApp);
