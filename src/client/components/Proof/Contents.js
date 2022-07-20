import question from "../../image/proof/question.jpg";
import deal from "../../image/proof/deal.jpg";
import message from "../../image/proof/message.jpg";

const Contents = () => {
  return (
    <div
      id="proofContents"
      className="container d-flex flex-column align-items-end"
    >
      <div className="contents d-flex flex-column ">
        <div className="title">
          <h1>더 나은 일거리와 재능 거래,</h1>
          <h1>금융 서비스 이용까지.</h1>
          <h1>모든게 가능해져요.</h1>
        </div>
        <div className="text">
          <span>
            COIN CV는 또 다른 기회와 가치를 연결합니다. COIN CV를 통해 나에게
            맞는 일을 쉽고 빠르게 찾을 수 있고, 금융 서비스 이용이 가능해집니다.
            블록체인의 가치를 지키고, 그 코인을 판매해 수익을 나누는 선순환의
            구조도 만들 수 있습니다.
          </span>
        </div>
        <div className="items mt-5 pt-5">
          <div className="item d-flex align-items-center mb-5 justify-content-between">
            <div className="gradient d-flex align-items-center justify-content-center">
              <div className="gradientText d-flex align-items-center justify-content-center flex-column">
                <h5>COIN</h5>
                <h5>MARKETPLACE</h5>
              </div>
            </div>
            <span>블록체인 CV 기반 매칭 서비스</span>
          </div>
          <div className="item d-flex align-items-center mb-5 justify-content-between">
            <div className="gradient d-flex align-items-center justify-content-center">
              <div className="gradientText d-flex align-items-center justify-content-center flex-column">
                <h5>GIG FINANCE</h5>
              </div>
            </div>
            <span>긱 이코노미 최적화 디지털 금융 솔루션</span>
          </div>
          <div className="item d-flex align-items-center mb-5 justify-content-between">
            <div className="gradient d-flex align-items-center justify-content-center">
              <div className="gradientText d-flex align-items-center justify-content-center flex-column">
                <h5>TALENT</h5>
                <h5>ASSETIZATION</h5>
              </div>
            </div>
            <span>크리에이터 재능 자산화 및 가치 창출</span>
          </div>
        </div>
      </div>
      <div className="service">
        <div className="title d-flex">
          <h1>운영중인 서비스</h1>
        </div>
        <div className="items d-flex align-items-center mt-5 justify-content-between">
          <div className="item d-flex flex-column">
            <img src={deal} alt="" />
            <span className="mt-5">코인 거래 및 시세 확인 시스템</span>
            <span>거래소</span>
          </div>
          <div className="item d-flex flex-column">
            <img src={message} alt="" />
            <span className="mt-5">구매자와 거래자의 커뮤니티</span>
            <span>메신저</span>
          </div>
          <div className="item d-flex flex-column">
            <img src={question} alt="" />
            <span className="mt-5">문의 사항과 답변하기</span>
            <span>Q&A</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
