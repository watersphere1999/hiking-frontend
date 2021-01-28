//import React from 'react';
import './Register1.css';
import NameInput from '../components/NameInput';
import GenderInput from '../components/GenderInput';
import PhoneNumberInput from '../components/PhoneNumberInput';
import BirthInput from '../components/BirthInput';
import LiveInput from '../components/LiveInput';
import ButtonSubmit from '../components/ButtonSubmit';

function Register1() {
  return (
    <div className="container">
      <div className="R1title">建立個人資料</div>
      <NameInput />
      <GenderInput />
      <PhoneNumberInput/>
      <BirthInput/>
      <LiveInput/>
      <ButtonSubmit description={'同意並註冊'}/>
    </div>
  );
}

export default Register1;
