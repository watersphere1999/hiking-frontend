import React from 'react';

const PhoneNumberInput = () => (
    <form>
        <label className="phone-label" htmlFor="phone">手機</label><br />
        <select className="PhoneRegionBackground" type="text" id="phone" name="phoneRegion" >
            <option>台灣+8860</option>
            <option>香港+852</option>
            <option>伊拉克+964</option> 
        </select>
        <input className="PhoneNumberBackground" type="text" id="phone" name="phoneNumber"placeholder="輸入您的手機號碼" />
        <br />
    </form>
);


export default PhoneNumberInput;