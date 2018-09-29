import React from 'react';
import { Link } from 'react-router-dom';
import { ROOT_URL } from '../../CONST';

const Header = () => {
    return (
        <header>
            <Link to={ROOT_URL}>homepage</Link>
        </header>
    );
};

export default Header;
