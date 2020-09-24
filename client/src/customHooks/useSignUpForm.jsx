import {useEffect, useState} from 'react';

const useSignUpForm = (callback) => {
    const [inputs, setInputs] = useState({});
    
    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/api/v1/users/sign-up', requestOptions)
        .then(res => res.json())
        .then(inputs => setInputs(inputs))
        .catch(err => console.log(err))
    },[]);

    function handleSubmit(event) {
        if (event) {
            event.preventDefault();
        }
        callback();
    }
    function handleInputChange(event) {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]:
        event.target.value}));
    }
    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
}

export default useSignUpForm;