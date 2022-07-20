const Footer = () => {
    return (
      <footer className="d-flex align-items-center">
        <div className="container d-flex justify-content-between">
          <div className="local d-flex flex-column justify-content-between">
            <div className="d-flex flex-column">
              <span>전라남도 여수시 소호동 소호7길 9-8</span>
              <span>dnckd942522@gmail.com | 010.4077.8003 | 061.691.9425</span>
              <span>WebDeveloper, Choi Woo Chang</span>
            </div>
            <div className="copyright">
              <span>COPYRIGHT © CHOIWOOCHANG ALL RIGHTS RESERVED.</span>
            </div>
          </div>
          <div className="sns d-flex justify-content-between">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>KakaoTalk</span>
          </div>
        </div>
      </footer>
    );    
}

export default Footer;