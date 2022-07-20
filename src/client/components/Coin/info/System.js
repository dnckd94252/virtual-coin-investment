import { useRef } from "react";
import Buy from "./Buy";
import Sell from "./Sell";

const System = props => {
  const numRef = useRef();
  const [num,setNum] = props.state;
  const type = props.trade;
  const [user,setUser] = props.user;
  const data = props.data;

  const val =
    type === "buy" ? (
      <Buy
        user={[user, setUser]}
        data={data}
        num={num}
        numRef={numRef}
        setNum={setNum}
        pramsId={props.pramsId}
      />
    ) : (
      <Sell
        user={[user, setUser]}
        data={data}
        num={num}
        numRef={numRef}
        setNum={setNum}
        pramsId={props.pramsId}
      />
    );
      
    return val;
};

export default System;
