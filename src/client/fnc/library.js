import axios from "axios";

export const userLoad = set => {
  axios.get("/user/login").then(res => {
    if (res.data === "fail") set(null);
    else set(res.data);
  });
};

export const reload = (ref, setNum) => {
  ref.current.value = 0;
  setNum(0);
};

export const listLoad = (val, setList) => {
  axios.post("/coin/list", val).then(res => {
    setList(res.data);
  });
};

export const saleLoad = (val, setSale) => {
  axios.post("/coin/sale", val).then(res => {
    setSale(res.data);
  });
};

export const coinSell = (val) => {
  axios.post('/coin/sell',val).then(res => {
    const msg = res.data;
    if(msg === 'error') return alert('매도 가능 수량을 초과하였습니다. 다시 입력해주세요.');
  });
}
