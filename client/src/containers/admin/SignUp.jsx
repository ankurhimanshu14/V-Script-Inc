import React, { useState, useEffect } from 'react';

import Input from '../../components/useInput';
import Button from '../../components/useButton';

export default function SignUp() {
    const [ inputs, setInputs ] = useState({});

    handleSubmit = (event) => {
        event.preventDefault();

    }

    useEffect(() => {
        fetch()
    })

    return (
        <React.Fragment>
            <div className="jumbotron">
                <h3 className="text-center">Sign Up Here</h3>
                <form className="form-group">
                    <Input 
                    id = "employeeId"
                    name="employeeId"
                    type="text"
                    value=""
                    onChange=""
                    placeholder="Employee ID"
                    />

                    <Input 
                    id = "email"
                    name="email"
                    type="email"
                    value=""
                    onChange=""
                    placeholder="Email"
                    />
                    
                    <Input 
                    id = "username"
                    name="username"
                    type="text"
                    value=""
                    onChange=""
                    placeholder="Username"
                    />
                    
                    <Input 
                    id = "password"
                    name="password"
                    type="password"
                    value=""
                    onChange=""
                    placeholder="Password"
                    />
                    
                    <Input 
                    id = "role"
                    name="role"
                    type="role"
                    value=""
                    onChange=""
                    placeholder="Role"
                    />
        
                    <Input 
                    id = "authority"
                    name="authority"
                    type="authority"
                    value=""
                    onChange=""
                    placeholder="Authority"
                    />

                    <Button
                    type="primary"
                    onClick=""
                    title="Submit"/>

                    <Button
                    type="secondary"
                    onClick=""
                    title="Reset"/>
                </form>
            </div>
        </React.Fragment>

    )
}