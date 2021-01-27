import arrow from './material-icons-black-arrow-back.svg';
import './App.css';
import EmailInput from './components/EmailInput';
import PasswordInput from './components/PasswordInput';
import CheckPassword from './components/CheckPassword';
import ButtonSubmit from './components/ButtonSubmit';

function App() {
  return (
    <div className="container">
      <img src={arrow} className="MaterialIcons-blackArrow-back" />
      <div className="title">註冊帳號</div>
      <EmailInput />
      <div className="error-info">錯誤資訊</div>
      <PasswordInput />
      <div className="password-info">密碼必須包含8個字元以上</div>
      <CheckPassword />
      <div className="privacy-info">使用這個應用程式前，請先詳閱「Go Hiking」的<br />
        《<span className="text-style-1">隱私權政策</span>》及《<span className="text-style-1">服務條款</span>》
      </div>
      <ButtonSubmit />
    </div>
  );
}

export default App;
