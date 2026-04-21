import React, { useState } from 'react'
// Da se kreira sign up forma (so min 5 polinja) i button koj na klik ke gi prikaze vnesenite
// vrednosti vo edna tabela, a na povtoren klik ke ja trgne (skrie) tabelata.

export class SignUpFormClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            age: "",
            showTable: false
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value // e.target.name => firstName,lastName,email...
        })
    }

    render() {
        return (
            <div id='sign-up-form'>
                <h2>Sign Up</h2>
                <input
                    type='text'
                    name='firstName'
                    placeholder='Enter First Name'
                    value={this.state.firstName}
                    onChange={this.handleInputChange }
                />
                <br />
                <br />
                <input
                    type='text'
                    name='lastName'
                    placeholder='Enter Last Name'
                    value={this.state.lastName}
                    onChange={ this.handleInputChange}
                />
                <br />
                <br />
                <input
                    type='email'
                    name='email'
                    placeholder='Enter Email Address'
                    value={this.state.email}
                    onChange={ this.handleInputChange}
                />
                <br />
                <br />
                <input
                    type='password'
                    name='password'
                    placeholder='Enter Password'
                    value={this.state.password}
                    onChange={ this.handleInputChange}
                />
                <br />
                <br />
                <input
                    type='number'
                    name='age'
                    placeholder='Enter Age'
                    value={this.state.age}
                    onChange={ this.handleInputChange}
                />
                <br />
                <br />
                <button onClick={() => { this.setState({ showTable: !this.state.showTable }) }}>{this.state.showTable ? 'Hide Table' : 'Show Table'}</button>
                <br />
                <br />

                {this.state.showTable && <table border={1}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.firstName}</td>
                            <td>{this.state.lastName}</td>
                            <td>{this.state.email}</td>
                            <td>{this.state.password}</td>
                            <td>{this.state.age}</td>
                        </tr>
                    </tbody>
                </table>}
            </div>
        )
    }
}