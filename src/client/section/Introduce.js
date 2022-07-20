import First from "../components/Introduce/First.js";
import Second from "../components/Introduce/Second.js";
import Third from "../components/Introduce/Third.js";


const Introduce = props => {
  return (
    <section id="introduce" className="position-relative">
      <First scrollY={props.scrollY} />
      <Second />
      <Third scrollY={props.scrollY} />
    </section>
  );
};

export default Introduce;
