const Talent = () => {
  return (
    <section
      id="talent"
      className="pt-5 container d-flex justify-content-between"
    >
      <div className="title position-sticky vh-100  d-flex  flex-column justify-content-center">
        <h1>당신의</h1>
        <h1>다양한 재능을</h1>
        <h1>COIN CV에.</h1>
      </div>
      <div className="contents d-flex flex-column justify-content-between">
        <div className="item d-flex flex-column  justify-content-end align-items-end">
          <img src={require("../image/talent/1.jpg")} alt="" />
          <span className="mt-3">스터디 클래스를 운영하는 정호영 씨도</span>
        </div>
        <div className="item d-flex flex-column  justify-content-end ">
          <img src={require("../image/talent/2.jpg")} alt="" />
          <span className="mt-3">프리랜서 개발자 송보름 씨도</span>
        </div>
        <div className="item d-flex flex-column  justify-content-end align-items-end">
          <img src={require("../image/talent/3.jpg")} alt="" />
          <span className="mt-3">카페를 운영하는 김은혜 씨도</span>
        </div>
      </div>
    </section>
  );
};

export default Talent;
