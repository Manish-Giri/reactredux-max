import React from 'react';

import './Person.css';

const person = ( props ) => {

    const nameChange = event => {
        const newName = event.target.value;
        props.changed(newName, props.id);
    }

    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={nameChange} value={props.name} />
        </div>
    )
};

export default person;
