import React from 'react';
import './Login1.css';
import Login from '../components/Login';
import FormInputLabel from '../components/FormInputLabel';
import BackButton from '../components/BackButton';

function Login1() {
    return (
      <div className="container">
        <BackButton />
        <div className="title">登入</div>
        <FormInputLabel label={'電子信箱'} placeholder={'請輸入電子信箱'} id={'useremail'} />
        <hr className="divider"></hr>
        <div className="error-info">錯誤資訊</div>
        <FormInputLabel label={'密碼'} placeholder={'請輸入密碼'} id={'userpassword'} />
        <hr className="divider"></hr>
        <div className="error-info">錯誤資訊</div>
        <Login description={'登入'} />
      </div>
    );
}

export default Login1;