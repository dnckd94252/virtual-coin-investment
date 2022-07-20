import Visual from "../section/Visual.js";
import Introduce from "../section/Introduce.js";
import Talent from "../section/Talent.js"
import Step from "../section/Step.js";
import Init from "../fnc/Init.js";
import Proof from "../section/Proof.js";
import Asset from "../section/Asset.js";
import { useEffect , useState } from "react";

const Main = (props) => {
const [scrollY, setScrollY] = useState(1);

useEffect(() => {
  document.addEventListener("scroll", () => {
    const scrollPosition = window.pageYOffset;
    setScrollY(scrollPosition);
  });
}, []);

  const scrollArr = [
    {
      start : 15500,
      end : 34000,
    }    
  ]

  const style = {
    main : {
      background : Init.ChangeColor(scrollArr , scrollY)
    },
  }

  return (
    <main style={style.main}>
      <Visual scrollY={scrollY} />
      <Introduce scrollY={scrollY} />
      <Talent />
      <Step scrollY={scrollY} />
      <Proof scrollY={scrollY}/>
      <Asset />
    </main>
  );
};

export default Main;
