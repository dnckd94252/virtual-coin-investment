import Init from "../../fnc/Init";

const First = props => {
  const style = {
    first: {
      height: "3300px",
    },
    item: {
      top: 0,
      overflowX: "hidden",
    },
    img: {
      objectFit: "cover",
      zIndex: "-11",
    },
    text: {
      opacity: `${Init.ScrollOpacity(7000, 7000 + 2500, props.scrollY)}%`,
    },
    firstH1: {
      transform: `translateX(${Init.TransformX(300, 7200, props.scrollY)}px)`,
    },
    secondH1: {
      transform: `translateX(${Init.TransformX(-300, 7200, props.scrollY)}px)`,
    },
  };

  return (
    <div
      id="introduceFirst"
      className="d-flex align-items-centerjustify-content-center"
      style={style.first}
    >
      <div
        className="item position-sticky w-100 vh-100 d-flex align-items-center justify-content-center "
        style={style.item}
      >
        <img
          src={require("../../image/introduce/introduce1.jpg")}
          className="vw-100 vh-100 position-absolute"
          style={style.img}
          alt=""
        />
        <div
          className="text d-flex w-100 h-100  justify-content-center align-items-center flex-column position-relative"
          style={style.text}
        >
        <div className=" position-absolute w-100 h-100 blackBox"></div>
          <h1 style={style.firstH1}>기록하고</h1>
          <h1>증명하고</h1>
          <h1 style={style.secondH1}>성장하기</h1>
        </div>
      </div>
    </div>
  );
};

export default First;
