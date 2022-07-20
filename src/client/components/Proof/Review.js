import creator from "../../image/proof/creator.jpg";
import gig from "../../image/proof/gig.jpg";
import emp from "../../image/proof/emp.jpg";
import Init from "../../fnc/Init";

const Review = props => {
  const style = {
    lock: {
      opacity: props.scrollY >= 30500 ? "100%" : "0%",
    },
    item1: {
      transform: `translateX(-${Init.TransformPercent(
        31000,
        props.scrollY,
        500
      )}%)`,
      left: `-${Init.TransformSlide(25, 31000, props.scrollY, 500)}px`,
    },
    item2: {
      transform: `translateX(-${
        Init.TransformPercent(31000, props.scrollY, 500) * 2
      }%)`,
      left: `-${Init.TransformSlide(50, 31000, props.scrollY, 500)}px`,
    },
    item3: {
      transform: `translateX(-${
        Init.TransformPercent(31000, props.scrollY, 500) * 3
      }%)`,
      left: `-${Init.TransformSlide(75, 31000, props.scrollY, 500)}px`,
    },
    finalText: {
      opacity: `${Init.TransformPercent(32000, props.scrollY, 700)}%`,
    },
  };
  return (
    <div id="proofReview" className="ml-5 mr-5 position-relative">
      <div className="items vh-100 d-flex align-items-center position-sticky">
        <div
          className=" flex-column d-flex align-items-center justify-content-center item lock"
          style={style.lock}
        >
          <div className=" d-flex align-items-center justify-content-center flex-column  align-content-center text">
            <h5>COIN</h5>
            <h5>CV</h5>
          </div>
        </div>
        <div className="finalText position-absolute" style={style.finalText}>
          <h1>누구든</h1>
          <h1>무엇이든</h1>
        </div>
        <div className="item position-relative" style={style.item1}>
          <img src={creator} className="position-absolute w-100 h-100" alt="" />
          <div className=" d-flex flex-column justify-content-between p-5 h-100 contents">
            <div className="title d-flex  justify-content-between">
              <h3>CREATOR</h3>
              <span>****</span>
            </div>
            <div className="content mt-5">
              <span>
                크리에이터들이 만들어 낸 다양한 창작물과 재능을 자산화, 토큰화
                할 수 있는 기반을 만들어요.
              </span>
            </div>
            <div className=" d-flex align-items-center justify-content-between">
              <div className="user d-flex align-items-center">
                <div className="color"></div>
                <span>model_top</span>
              </div>
              <div className="icon">
                <i className="fa-solid fa-minus d-flex align-items-center justify-content-center"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="item position-relative" style={style.item2}>
          <img src={gig} className="position-absolute w-100 h-100" alt="" />
          <div className=" d-flex flex-column justify-content-between p-5 h-100 contents">
            <div className="title d-flex justify-content-between">
              <div>
                <h3>GIG</h3>
                <h3>WORKER</h3>
              </div>
              <span>****</span>
            </div>
            <div className="content mt-5">
              <span>
                블록체인 기반의 거래 구조 덕분에 긱 워커의 재능과 경력, 평판을
                투명하게 거래하고 흩어진 이력을 관리할 수 있어요.
              </span>
            </div>
            <div className=" d-flex align-items-center justify-content-between">
              <div className="user d-flex align-items-center">
                <div className="color"></div>
                <span>elon.M</span>
              </div>
              <div className="icon">
                <i className="fa-solid fa-minus d-flex align-items-center justify-content-center"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="item position-relative" style={style.item3}>
          <img src={emp} className="position-absolute w-100 h-100" alt="" />
          <div className=" d-flex flex-column justify-content-between p-5 h-100 contents">
            <div className="title d-flex  justify-content-between">
              <div>
                <h3>SELF</h3>
                <h3>EMPLOYED</h3>
              </div>
              <span>****</span>
            </div>
            <div className="content mt-5">
              <span>
                개인사업자의 소득과 거래 이력, 경험과 전문성을 쉽게 증명할 수
                있어서 금융 상품을 이용하기도 더 쉬워져요.
              </span>
            </div>
            <div className=" d-flex align-items-center justify-content-between">
              <div className="user d-flex align-items-center">
                <div className="color"></div>
                <span>cafe22</span>
              </div>
              <div className="icon">
                <i className="fa-solid fa-minus d-flex align-items-center justify-content-center"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
