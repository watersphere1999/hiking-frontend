import React from 'react';

const LiveInput = () => (
    
    <form>
        <label className="text-label" htmlFor="live">居住地</label><br />
        <select className="R1background" type="text" id="live" name="live" >
            <option>請選擇</option>
            <option>台北市</option>
            <option>台中市</option>    
        </select><br />
    </form>
);


export default LiveInput;