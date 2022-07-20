import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Init from "../fnc/Init";
import {userLoad} from "../fnc/library"

const Header = props => {
  const currentUrl = useLocation();
  const [login, setLogin] = props.login;
  const [scrollY, setScrollY] = useState(1);
  
  useEffect(() => {
    if (
      currentUrl.pathname === "/" ||
      currentUrl.pathname === "/login" ||
      currentUrl.pathname === "/register"
    ) {
      document.addEventListener("scroll", () => {
        const scrollPosition = window.pageYOffset;
        setScrollY(scrollPosition);
      });
    }
  }, [currentUrl.pathname]);
  
  useEffect(() => {
    userLoad(setLogin);
  }, [currentUrl]);

  const scrollArr = {
    "/": [
      {
        start: 10300,
        end: 11200,
      },
      {
        start: 11800,
        end: 15000,
      },
      {
        start: 34000,
        end: 50000,
      },
    ],
    "/exchange": [
      {
        start: 0,
        end: 10000,
      },
    ],
    "/login": [],
    "/register": [],
    other: [
      {
        start: 0,
        end: 10000,
      },
    ],
  };

  const style = {
    header: {
      color: `${Init.ChangeColor(
        !scrollArr[currentUrl["pathname"]]
          ? scrollArr["other"]
          : scrollArr[currentUrl["pathname"]],
        scrollY
      )}`,
    },
  };

  const util = (
    <>
      <Link to="/register" className="mr-3 ml-3">
        회원가입
      </Link>
      <Link to="/login" className="mr-3 ml-3">
        로그인
      </Link>
    </>
  );
  

  return (
    <header
      className="w-100 pt-3 pb-3 d-flex align-items-center justify-content-between"
      style={style.header}
    >
      <Link to="/" className="ml-5 pl-5">
        <h3 className=" font-weight-bold m-0">COIN CV</h3>
      </Link>
      <div className="text d-flex align-items-center justify-content-center pr-5  justify-content-between mr-5">
        {!login ? (
          util
        ) : (
          <Link to="/mypage" className="mr-3 ml-3">
            {login.name}님
          </Link>
        )}
        <Link to="/exchange" className="mr-3 ml-3">
          거래소
        </Link>
      </div>
    </header>
  );
};

export default Header;
