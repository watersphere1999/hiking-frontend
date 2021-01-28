import React from 'react';

const NameInput = () => (
    <form>
        <label className="text-label" htmlFor="name">名字</label><br />
        <input className="R1background"  type="text" id="name" name="name" placeholder="輸入您的名稱"/><br />
    </form>
);


export default NameInput;