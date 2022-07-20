import Init from "../../fnc/Init.js";

const Third = props => {
  const style = {
    section: {
      background: `url(${require("../../image/introduce/back.jpg")})`,
      backgroundSize: "100%",
      overflowX: "hidden",
    },
    point1: {
      transform: `translateX(${Init.TransformX(-300, 10000, props.scrollY)}px)`,
    },
    point2: {
      transform: `translateX(${Init.TransformX(300, 10000, props.scrollY)}px)`,
      right: "100%",
    },
    text1: {
      transform: `translateX(${Init.TransformX(-200, 10000, props.scrollY)}px)`,
    },
    text2: {
      transform: `translateX(${Init.TransformX(200, 10000, props.scrollY)}px)`,
    },
  };
  
  return (
    <div id="introduceThird" className="d-flex align-items-center">
      <div
        className="contents w-100 d-flex position-relative justify-content-between flex-column"
        style={style.section}
      >
        <div className="point" style={style.point1}></div>
        <div className="text d-flex  w-100 align-items-center justify-content-center flex-column">
          <div className="w-100 item h-100 text-center d-flex align-items-center justify-content-center">
            <h3 style={style.text1}>가치를</h3>
          </div>
          <div className="w-100 item h-100 text-center d-flex align-items-center justify-content-center">
            <h3>증명하고 싶다면</h3>
          </div>
          <div className="w-100 item h-100 text-center d-flex align-items-center justify-content-center">
            <h3 style={style.text2}>누구든지.</h3>
          </div>
        </div>
        <div className="point" style={style.point2}></div>
      </div>
    </div>
  );
};

export default Third;
