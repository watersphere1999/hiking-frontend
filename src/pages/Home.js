import "./Home.css";
import sample from "../sample.jpg";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div className="up">
        <img src={sample} alt="" className="sampleImage" />
        <div className="goHikingText">GO HIKING</div>
      </div>
      <div className="down">
        <input
          type="button"
          className="rectangleGoogle"
          defaultValue="透過Google登入"
        />
        <input
          type="button"
          className="rectangleFacebook"
          defaultValue="透過Facebook登入"
        />
        <input
          type="button"
          className="rectangleApple"
          defaultValue="透過Apple登入"
        />
        <input
          type="button"
          className="rectangleEmail"
          defaultValue="透過Email登入"
        />
      </div>
      <div style={{ textAlign: "center" }}>
        還不是會員嗎?<Link to="/register">註冊新帳號</Link>
      </div>
      <button type="button" className="useButton">
        直接使用
      </button>
    </div>
  );
}

export default App;
