import React from 'react';

const PasswordInput = () => (
    <form>
        <label className="password-label" htmlFor="password">密碼</label><br />
        <input className="p-background" type="text" id="password" name="password" /><br />
    </form>
);


export default PasswordInput;