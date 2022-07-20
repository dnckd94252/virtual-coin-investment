const Gradient = (props) => {
    const style = {
      lock: {
        display: props.scrollY <= 27000 ? "none" : props.scrollY >= 30500 ? "none" :  "flex",
        position: props.scrollY <= 27000 ? "relative" : props.scrollY >= 30500 ? "relative" :  "fixed",
      },
    };
    
    return (
      <div
        id="lock"
        className="vh-100 ml-5 align-items-center "
        style={style.lock}
      >
        <div className=" flex-column d-flex align-items-center justify-content-center lock">
          <div className=" d-flex align-items-center justify-content-center flex-column  align-content-center text">
            <h5>COIN</h5>
            <h5>CV</h5>
          </div>
        </div>
      </div>
    );
}

export default Gradient;