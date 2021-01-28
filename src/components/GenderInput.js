import React from 'react';
const GenderInput = () => (
    <form>
        <label className="gender-label" htmlFor="gender">性別</label>
        <select className="Genderbackground" type="text" id="gender" name="gender" >        
            <option>請選擇</option>
            <option>男</option>
            <option>女</option>    
        </select><br />
    </form>
);


export default GenderInput;