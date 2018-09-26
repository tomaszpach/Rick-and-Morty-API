import React from 'react';

const InputsForm = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const listItems = numbers.map((number, index) =>
        <button key={index} className="button" style={{width: '33%'}}>{number}</button>
    );
    return (
        <div className="buttons-wrapper" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            {listItems}
        </div>
    );
};

export default InputsForm;
