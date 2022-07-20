import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { userLoad } from "../fnc/library";
import Info from "../components/Coin/Info";
import CoinChart from "../components/Coin/CoinChart";
import Order from "../components/Coin/Order";
import Chat from "../components/Coin/Chat";

const CoinInfo = props => {
  const prams = useParams();
  const [user, setUser] = useState();
  const [daily, setDaily] = useState();

  const url = `https://api.bithumb.com/public/candlestick/${prams.id}_KRW/24h`;

  useEffect(() => {
    userLoad(setUser);
    fetch(url)
      .then(res => res.json())
      .then(json => setDaily(json.data));
  }, []);
  
  const infoTag = <Info  pramsId={prams.id} user={[user, setUser]} />;
  const chart = !daily ? null : <CoinChart data={daily} />;

  return (
    <section id="coininfo" className="container">
      {infoTag}
      <div className="d-flex  align-items-center justify-content-between">
        {chart}
        <Chat name={prams.id} user={[user , setUser]} />
        <Order user={[user, setUser]} name={prams.id} />
      </div>
    </section>
  );
};

export default CoinInfo;
