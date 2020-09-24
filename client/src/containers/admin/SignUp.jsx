import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/useInput';
import Button from '../../components/useButton';

import useSignUpForm from '../../customHooks/useSignUpForm';

const SignUp = () => {

    const signup = () => {
        
        alert(`User Created!
               Name: ${inputs.username}
               Email: ${inputs.email}`);
    }
    const { inputs, handleSubmit, handleInputChange } = useSignUpForm(signup);

    return (
        <React.Fragment>
            <div className="jumbotron mt-5">
                <h3 className="text-center">Sign Up Here</h3>
                <form className="form-group" onSubmit={handleSubmit}>
                    <Input 
                    id = "employeeId"
                    name="employeeId"
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Employee ID"
                    required
                    />

                    <Input 
                    id = "email"
                    name="email"
                    type="email"
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    />
                    
                    <Input 
                    id = "username"
                    name="username"
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Username"
                    required
                    />
                    
                    <Input 
                    id = "password"
                    name="password"
                    type="password"
                    onChange={handleInputChange}
                    placeholder="Password"
                    required
                    />
                    
                    <Input 
                    id = "role"
                    name="role"
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Role"
                    required
                    />
        
                    <Input 
                    id = "authority"
                    name="authority"
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Authority"
                    required
                    />

                    <Button
                    variant="primary"
                    type="submit"
                    title="Submit"/>

                    <Button
                    variant="secondary"
                    type="reset"
                    title="Reset"/>
                </form>
                <Link to="/sign-in"><p className="float-right">Already have an account?</p></Link>
            </div>
        </React.Fragment>
    )
}

export default SignUp;