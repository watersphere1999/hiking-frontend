import React from 'react';

const BirthInput = () => (
    
    <form>
        <label className="text-label" htmlFor="birth">生日</label><br />
        <input className="R1background" type="date" id="birth" name="birth" placeholder="請選擇"/><br />
    </form>
);


export default BirthInput;