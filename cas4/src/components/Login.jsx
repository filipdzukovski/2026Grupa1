import React, { useState, useEffect } from 'react';
import { Input } from './Input';
import { Dropdown } from './Dropdown';



export const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [inputType, setInputType] = useState("password");
    const [selectedOption, setSelectedOption] = useState(1)

    const elements = [
        { value: 1, name: 'Facebook' },
        { value: 2, name: 'Instagram' },
        { value: 3, name: 'TikTok' }
    ]

    useEffect(() => {
        console.log("Username: ", username);
        console.log("Password: ", password);
    }, [username, password])

    function handleChangeInput() {
        setInputType(inputType === 'password' ? 'text' : 'password')
    }

    function showValues(event) {
        event.preventDefault();
        alert(`Username: ${username}\nPassword: ${password}\nApplication: ${selectedOption}`)
    }

    return (
        <div id='login'>
            <form onSubmit={showValues}>
                <Input
                    type={'text'}
                    placeholder={'Enter Username'}
                    value={username}
                    onChange={(event) => {
                        console.log(event)
                        setUsername(event.target.value)
                    }}

                />
                <Input
                    type={inputType}
                    placeholder={'Enter Password'}
                    value={password}
                    name='togglePass'
                    setToggle={handleChangeInput}
                    onChange={(e) => {
                        console.log(e)
                        setPassword(e.target.value)
                    }}
                />
                <Dropdown elements={elements} onChange={(e) => { setSelectedOption(e.target.value) }} />
                <button className='action-button'>Sign In</button>
            </form>
        </div>
    )
}