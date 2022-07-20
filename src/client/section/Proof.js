import Introduce from "../components/Proof/Introduce.js";
import Slide from "../components/Proof/Slide.js";
import Lock from "../components/Proof/Lock.js";
import Contents from "../components/Proof/Contents.js";
import Review from "../components/Proof/Review.js";
const Proof = props => {
  return (
    <section id="proof" className=" position-relative">
      <Introduce />
      <Slide scrollY={props.scrollY} />
      <Lock scrollY={props.scrollY} />
      <Contents />
      <Review scrollY={props.scrollY} />
    </section>
  );
};

export default Proof;
