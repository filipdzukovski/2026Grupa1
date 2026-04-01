import React from 'react';

export const Welcome = (props) => {
    console.log(props);
    return (
        <div>
            <h2>Some {props.name} {props.lastName}</h2>
            <p>Age: {props.age}</p>
        </div>
    )
}