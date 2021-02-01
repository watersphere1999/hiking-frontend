import React from 'react';
import { useHistory } from "react-router-dom";

const Login = ({ description }) => {    
    let history = useHistory();

    function handleClick() {
        history.push("/PersonalPage");
    }

    return (
        <input className="Rectangle" type="button" defaultValue={description} onClick={handleClick} />
    );
};


export default Login;