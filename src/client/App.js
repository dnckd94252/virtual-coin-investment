import Main from "./page/Main.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./section/Header.js";
import Footer from "./section/Footer.js";
import Exchange from "./page/Exchange.js";
import Login from "./page/Login.js";
import Register from "./page/Register.js";
import CoinInfo from "./page/CoinInfo.js";
import MyPage from "./page/MyPage.js";
import { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [login, setLogin] = useState(null);
  
  useEffect(() => {
    axios.get("/user/login").then(res => {
      if (res.data === "fail") setLogin(null);
      else setLogin(res.data);
    });
  }, []);
  
  return (
    <Router>
      <Header login={[login,setLogin]} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/exchange/:id" element={<CoinInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mypage" element={<MyPage login={[login,setLogin]} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
