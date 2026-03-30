import React from 'react';
import { Goodbye } from './Goodbye';

export class Hello extends React.Component {

    render() {
        return (
            <div>
                <h2 style={{color:'red',backgroundColor:'green'}}>Class Component Example</h2>
                <Goodbye />
            </div>
        )
    }

}