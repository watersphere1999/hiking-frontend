import React from 'react';
import { useHistory } from "react-router-dom";

const EmailLogin = ({ description }) => {    
    let history = useHistory();

    function handleClick() {
        history.push("/Login1");
    }

    return (
        <input className="rectangleEmail" type="button" defaultValue={description} onClick={handleClick} />
    );
};


export default EmailLogin;