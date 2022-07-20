import coin from "../../image/proof/coin.svg";
import chart from "../../image/proof/chart.svg";
import lock1 from "../../image/proof/lock1.svg";
import lock2 from "../../image/proof/lock2.svg";
import diamond from "../../image/proof/diamond.svg";
import Init from "../../fnc/Init";

const Slide = props => {
  const style = {
    title: {
      transform: `translateX(${Init.TransformSlide(
        -600,
        22725,
        props.scrollY,
        1300
      )}px)`,
      opacity : `${props.scrollY < 27000 ? 100 : 0}%`
    },
    gradient: {
      border: "2px solid transparent",
      padding: "0",
      backgroundImage:
        "linear-gradient(#000,#000),linear-gradient(315deg,#e657af,#0049ff,#43cf2e)",
      backgroundOrigin: "border-box",
      backgroundClip: "content-box,border-box",
      transform: `translateX(calc(-${Init.TransformPercent(
        24100,
        props.scrollY,
        1000
      )}% * 3))`,
      left: `-${Init.TransformSlide(75, 24100, props.scrollY, 1000)}px`,
    },
    item1: {
      transform: `translateX(-${Init.TransformPercent(
        24100,
        props.scrollY,
        1000
      )}%)`,
      left: `-${Init.TransformSlide(25, 24100, props.scrollY, 1000)}px`,
    },
    item2: {
      transform: `translateX(calc(-${Init.TransformPercent(
        24100,
        props.scrollY,
        1000
      )}% * 2))`,
      left: `-${Init.TransformSlide(50, 24100, props.scrollY, 1000)}px`,
    },
    lock1: {
      opacity: `${Init.ScrollOpacity(20000, 25000, props.scrollY)}%`,
    },
    lock2: {
      opacity: `${Init.ScrollOpacity(25000, 26000, props.scrollY)}%`,
      transform: "translateX(16px)",
    },
    text: {
      opacity: `${Init.ScrollOpacity(26000, 30000, props.scrollY)}%`,
    },
  };
  

  return (
    <div id="proofSlide">
      <div className="contents position-sticky d-flex align-items-center vh-100">
        <div className="title" style={style.title}>
          <h1>안전하고</h1>
          <h1>대체불가능한</h1>
          <h1>COIN CV.</h1>
        </div>
        <div
          className="items d-flex align-items-center ml-5"
          style={style.title}
        >
          <div className="item d-flex align-items-center  justify-content-between p-4 flex-column">
            <div className="itemTitle d-flex justify-content-between w-100">
              <h5>CREATOR</h5>
              <span>****</span>
            </div>
            <div className="img">
              <img src={coin} alt="" />
            </div>
            <div className=" d-flex align-items-center justify-content-lg-between bottomText w-100">
              <span>ASSET</span>
              <i className="fa-solid fa-minus d-flex align-items-center justify-content-center"></i>
            </div>
          </div>
          <div
            className="item d-flex align-items-center  position-relative  justify-content-between p-4 flex-column"
            style={style.item1}
          >
            <div className="itemTitle d-flex justify-content-between w-100">
              <h5>
                GIG
                <br />
                WORKER
              </h5>
              <span>****</span>
            </div>
            <div className="img">
              <img src={chart} alt="" />
            </div>
            <div className=" d-flex align-items-center justify-content-lg-between bottomText w-100">
              <span>ASSET</span>
              <i className="fa-solid fa-minus d-flex align-items-center justify-content-center"></i>
            </div>
          </div>
          <div
            className="item d-flex align-items-center position-relative justify-content-between p-4 flex-column"
            style={style.item2}
          >
            <div className="itemTitle d-flex justify-content-between w-100">
              <h5>
                SELF
                <br />
                EMPLOYED
              </h5>
              <span>****</span>
            </div>
            <div className="img">
              <img src={diamond} alt="" />
            </div>
            <div className=" d-flex align-items-center justify-content-lg-between bottomText w-100">
              <span>ASSET</span>
              <i className="fa-solid fa-minus d-flex align-items-center justify-content-center"></i>
            </div>
          </div>
          <div
            className="item lock mr-4 position-relative d-flex align-items-center  justify-content-center flex-column"
            style={style.gradient}
          >
            <img
              src={lock1}
              className="position-absolute"
              style={style.lock1}
              alt=""
            />
            <img
              src={lock2}
              className="position-absolute"
              style={style.lock2}
              alt=""
            />
            <div className="d-flex align-items-center justify-content-center flex-column text" style={style.text}>
              <h5>COIN</h5>
              <h5>CV</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
