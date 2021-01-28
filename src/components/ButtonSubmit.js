import React from 'react';
import { useHistory } from "react-router-dom";

const ButtonSubmit = ({ description }) => {    
    let history = useHistory();

    function handleClick() {
        history.push("/register1");
    }

    return (
        <input className="Rectangle" type="button" defaultValue={description} onClick={handleClick} />
    );
};


export default ButtonSubmit;