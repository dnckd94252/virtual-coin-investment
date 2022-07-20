import Init from "../fnc/Init";
import img1 from "../image/step/1.svg";
import img2 from "../image/step/2.svg";
import img3 from "../image/step/3.svg";
import img4 from "../image/step/4.svg";
import img5 from "../image/step/5.svg";

const Step = props => {
  const style = {
    content: {
      left: `-${Init.TransformSlide(2000, 16500, props.scrollY, 2000)}px`,
    },
    text1: {
      opacity: `${Init.ScrollOpacity(18000, 23800, props.scrollY)}%`,
    },
    text2: {
      opacity: `${Init.ScrollOpacity(18500, 23800, props.scrollY)}%`,
    },
    text3: {
      opacity: `${Init.ScrollOpacity(19000, 23800, props.scrollY)}%`,
    },
  };
  return (
    <section id="step" className=" position-relative">
      <div className="contents d-flex  align-items-center position-sticky vh-100">
        <div
          className=" d-flex align-items-center content"
          style={style.content}
        >
          <div className="items d-flex  align-items-center">
            <div className="title mr-5">
              <h1>불가능을</h1>
              <h1>COIN CV로</h1>
              <h1>가능하게.</h1>
            </div>
            <div className="item">
              <div className="img d-flex align-items-center justify-content-center">
                <img src={img2} alt="" />
              </div>
              <div className="text p-3">
                <h3>기축데이터, 금융,</h3>
                <h3>사회 전반 시스템 부재</h3>
              </div>
            </div>
            <div>
              <i className="fa-solid fa-angle-right"></i>
            </div>
            <div className="item">
              <div className="img d-flex align-items-center justify-content-center">
                <img src={img3} alt="" />
              </div>
              <div className="text p-3">
                <h3>기축데이터, 금융,</h3>
                <h3>사회 전반 시스템 부재</h3>
              </div>
            </div>
            <i className="fa-solid fa-angle-right"></i>
            <div className="item">
              <div className="img d-flex align-items-center justify-content-center">
                <img src={img4} alt="" />
              </div>
              <div className="text p-3">
                <h3>기축데이터, 금융,</h3>
                <h3>사회 전반 시스템 부재</h3>
              </div>
            </div>
            <i className="fa-solid fa-angle-right"></i>
            <div className="item">
              <div className="img d-flex align-items-center justify-content-center">
                <img src={img1} alt="" />
              </div>
              <div className="text p-3">
                <h3>기축데이터, 금융,</h3>
                <h3>사회 전반 시스템 부재</h3>
              </div>
            </div>
          </div>
          <div
            className="d-flex vw-100 vh-100 flex-column align-items-center end justify-content-center"
            style={style.contentImg}
          >
            <img src={img5} alt="" />
            <div className="text d-flex align-items-center justify-content-center">
              <h3 className="ml-5 mr-5" style={style.text1}>
                자격
              </h3>
              <h3 className="ml-5 mr-5" style={style.text2}>
                증명
              </h3>
              <h3 className="ml-5 mr-5" style={style.text3}>
                성장
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step;
