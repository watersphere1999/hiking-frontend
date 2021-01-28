import React from 'react';
import arrow from '../material-icons-black-arrow-back.svg';
import './Register0.css';
import ButtonSubmit from '../components/ButtonSubmit';
import FormInputLabel from '../components/FormInputLabel';

function Register0() {
    return (
      <div className="container">
        <img src={arrow} alt="arrow" className="MaterialIcons-blackArrow-back" />
        <div className="title">註冊帳號</div>
        <FormInputLabel label={'電子信箱'} placeholder={'請輸入電子信箱'} id={'email'} />
        <hr className="divider"></hr>
        <div className="error-info">錯誤資訊</div>
        <FormInputLabel label={'密碼'} placeholder={'請輸入密碼'} id={'password'} />
        <hr className="divider"></hr>
        <div className="password-info">密碼必須包含8個字元以上</div>
        <FormInputLabel label={'確認密碼'} placeholder={'請重新輸入密碼'} id={'check-password'} />
        <hr className="divider"></hr>
        <div className="privacy-info">使用這個應用程式前，請先詳閱「Go Hiking」的<br />
          《<span className="text-style-1">隱私權政策</span>》及《<span className="text-style-1">服務條款</span>》
        </div>
        <ButtonSubmit description={'同意並註冊'} />
      </div>
    );
}

export default Register0;