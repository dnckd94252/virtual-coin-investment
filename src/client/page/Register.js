import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const registerAction = (e) => {
    e.preventDefault();
    const input = document.getElementsByTagName('input');
    const data = {
      id: input.id.value,
      pw: input.pw.value,
      pwCheck: input.pwCheck.value,
      name: input.name.value,
      phone: input.phone.value,
    };

    if(data.pw !== data.pwCheck) return alert('비밀번호와 비밀번호 확인이 다릅니다.');
    const phoneRegex = /^[0-9]*$/;

    if(!phoneRegex.test(data.phone)) return alert('휴대폰번호는 숫자만 입력 가능합니다.');
    
    axios.post('/user/register',data).then(res => {
      const data = res.data;
      if(data === 'fail') return alert('아이디가 중복되었습니다.');
      else {
        alert('회원가입이 완료되었습니다.');
        navigate('/login');
      }
    }).catch(err => console.log(err));
  }

  return (
    <section
      id="register"
      className="pt-5 pb-5 d-flex align-items-center justify-content-center"
    >
      <div className="contents d-flex align-items-center p-5 flex-column">
        <div className="title">
          <h3>REGISTER</h3>
        </div>
        <div className="form">
          <form className="d-flex flex-column" onSubmit={registerAction}>
            <span>아이디</span>
            <input
              type="text"
              className="registerForm"
              name="id"
              placeholder="UserName"
              required
              minLength={8}/>
            <span>비밀번호</span>
            <input
              type="password"
              className="registerForm"
              name="pw"
              placeholder="Password"
              required
              minLength={10}
            />
            <span>비밀번호 확인</span>
            <input
              type="password"
              className="registerForm"
              name="pwCheck"
              placeholder="PasswordCheck"
              required
            />
            <span>이름</span>
            <input
              type="text"
              className="registerForm"
              name="name"
              required
              placeholder="이름"
            />
            <span>전화번호</span>
            <input
              type="text"
              className="registerForm"
              name="phone"
              placeholder="전화번호"
              required
              maxLength={10}
            />
            <button className="btn btn-dark w-100">회원가입</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
