import React from 'react';

const EmailInput = () => (
    <form>
        <label className="email-label" htmlFor="email">電子信箱</label><br />
        <input className="background" type="text" id="email" name="email" /><br />
    </form>
);


export default EmailInput;