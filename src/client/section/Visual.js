import Init from "../fnc/Init.js";
import { useEffect } from "react";

const Visual = (props) => {
  const imgArr = {
    visual: [],
  };
  
  const load = () => {
    //   이미지 미리 넣어주기
    for (let i = 1; i <= 100; i++) {
      const img = document.createElement("img");
      img.src = require(`../image/visual/레이어 ${i}.png`);
      imgArr.visual.push(img);
    }
    const scroll = canvasSrc(window.scrollY);
    const imgSrc = imgArr.visual[scroll];
    imgSrc.onload = () => {
      canvasDraw(imgSrc);
    };
  };

  useEffect(() => {
    window.addEventListener("load", load);
    window.addEventListener("scroll", handleScroll);
  },[]);

  const style = {
    visual: {
      height: "7000px",
    },
    visualTextP1: {
      opacity: `${Init.ScrollOpacity(200, 2000, props.scrollY)}%`,
    },
    visualTextP2: {
      opacity: `${Init.ScrollOpacity(2100, 4000, props.scrollY)}%`,
    },
    visualTextSpan: {
      opacity: `${Init.ScrollOpacity(4100, 8000, props.scrollY)}%`,
    },
  };

  const handleScroll = e => {
    const canvas = document.querySelector("#visual canvas");
    if(!canvas) return
    const src = canvas.getAttribute("data-src");
    const image = !imgArr.visual[src] ? null : imgArr.visual[src];
    if (image) {
      canvasDraw(image);
    }
  };

  const canvasDraw = img => {
    const canvas = document.querySelector("#visual canvas");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, 1920, 1080);
  };

  const canvasSrc = val => {
    return Math.floor((val / style.visual.height.replace("px", "")) * 100) > 100
      ? 99
      : Math.floor((val / style.visual.height.replace("px", "")) * 100);
  };

  return (
    <section
      id="visual"
      className="d-flex position-relative"
      style={style.visual}
    >
      <div
        className="d-flex align-items-center justify-content-center vw-100 vh-100 position-sticky"
        style={{ top: 0, background: "black", overflowX:'hidden' }}
      >
        <canvas
          className=" position-absolute"
          data-src={canvasSrc(props.scrollY)}
          width={1920}
          height={1080}
          style={{
            height: 720,
            width: 1280,
          }}
        ></canvas>
        <div className="d-flex align-items-center justify-content-center textBox">
          <p style={style.visualTextP1} className="position-absolute"> 
            가상화폐란 정부에 의해 통제받지 않는 디지털 화폐의 일종으로
          </p>
          <p style={style.visualTextP2} className="position-absolute">
            개발자가 발행 및 관리하며 특정한 가상커뮤니티에서 통용되는
            결제수단입니다.
          </p>
          <span style={style.visualTextSpan} className="position-absolute">
            증명하기 어려운 가상화폐와 가치를 보호하고 신뢰할
            <br />
            만한 자산으로 측정하기 위해서는 어떻게 관리해야 할까요?
          </span>
        </div>
        <div className=" d-flex   flex-column justify-content-center icon align-items-center position-absolute">
          <i className="fa-solid fa-chevron-down d-flex align-items-center justify-content-center"></i>
          <span>MOUSE DOWN</span>
        </div>
      </div>
    </section>
  );
};

export default Visual;
