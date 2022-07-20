import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const loginAction = e => {
    e.preventDefault();
    const input = document.getElementsByTagName("input");
    const data = {
      id: input.id.value,
      pw: input.pw.value,
    };
    axios.post("/user/login", data).then(res => {
      const data = res.data;
      if (data === "fail") {
        return alert("아이디 혹은 비밀번호가 틀렸습니다.");
      } else {
        alert("로그인이 완료되었습니다.");
        return navigate("/");
      }
    });
  };

  return (
    <section
      id="login"
      className="d-flex align-items-center justify-content-center"
    >
      <div className="d-flex align-items-center contents p-5 flex-column">
        <div className="title">
          <h3>LOGIN</h3>
        </div>
        <div className="input d-flex align-items-center justify-content-center flex-column">
          <form
            className=" d-flex align-items-center justify-content-center flex-column"
            onSubmit={loginAction}
          >
            <input
              type="text"
              name="id"
              className="login-input"
              placeholder="UserName"
            />
            <input
              type="password"
              name="pw"
              className="login-input"
              placeholder="Password"
            />
            <button className="btn btn-dark w-100 mt-4 pt-3 pb-3">
              로그인
            </button>
            <button
              className="btn btn-secondary w-100 mt-4 pt-3 pb-3"
              type="button"
            >
              회원가입
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
