import axios from "axios";
import { useRef , useState , useEffect } from "react";

const Chat = prams => {
  const chatRef = useRef();
  const [user , setUser] = prams.user;
  const [list , setList] = useState(); 
  
  const chatList = () => {
    axios.post('/chat/list',{name : prams.name}).then(res => {
      setList(res.data);
    });
    chatRef.current.value = '';
  }

  useEffect(() => {
    chatList();
  },[])

  const chatAction = () => {
    const val = chatRef.current.value;
    const input = {
      name : prams.name ,
      user : user,
      comment : val,
    }
    axios.post('/chat',input).then(res => {
      const data = res.data;
      if(data === 'notUser') return alert('로그인 후 이용가능합니다.');
      if(data === 'notComment') return;
      chatList();
    });
  }

  const listTag = !list || list.length <= 0 ? null : list.map((item , i) => {
    const datetime = new Date(item.created_at);
    return (
      <div className="item d-flex  justify-content-between p-2 pl-3 pr-3" key={i}>
        <span className="nick m-0">{item.user_id}</span>
        <span className="content w-100 ml-3">{item.comment}</span>
        <p className="date m-0">{datetime.getHours()}:{datetime.getMinutes()}</p>
      </div>
    );
  })

  return (
    <div className="chat">
      <div className="title p-2 pl-4 border-bottom d-flex align-items-center">
        <i className="fa-brands fa-rocketchat mr-2"></i>
        <span>댓글</span>
      </div>
      <div className="list">
        {listTag}
      </div>
      <div className="input pl-3 pr-3 d-flex align-items-center">
        <input
          ref={chatRef}
          type="text"
          className=" form-control"
          name="reply"
          placeholder="댓글을 써주세요."
        />
        <button className="btn btn-success" onClick={chatAction}>작성</button>
      </div>
    </div>
  );
};

export default Chat;
