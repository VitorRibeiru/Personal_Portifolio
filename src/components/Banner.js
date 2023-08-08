import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/PC4.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { i18n } from '../translate/i18n';
//import 'animate.css';
//import TrackVisibility from 'react-on-screen';

export const Banner = () => {  


  const FD = i18n.t('banner.FD');
  const WD = i18n.t('banner.WD');
  const DA = i18n.t('banner.DA');
  const BC = i18n.t('banner.BC');

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [FD, WD, DA, BC];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(/* 300 - Math.random() * */ 150);
  const period = 1000;
  
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
  
    return () => { clearInterval(ticker) };
  }, [text]);
  
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
    setText(updatedText);
  
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.5);
    }
  
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  }
  

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
                    <span className="tagline">{i18n.t('banner.tag')}</span>
                    <div className="myself">                        
                    <h1>{i18n.t('banner.name')}</h1>
                    <h1 className="txt-rotate">
                    <span className="wrap">{text}</span>
                    </h1>
                    </div>
                    <p>{i18n.t('banner.text1')}<br></br>
                       {i18n.t('banner.text2')}<br></br>
                       {i18n.t('banner.text3')}<br></br>
                       {i18n.t('banner.text4')}</p>
                    <div className="btn">
                      <button className="mbtn"><a>{i18n.t('banner.button')}</a></button>
                    </div>
                    </Col>
          <Col xs={12} md={6} xl={5}>          
          <img src={headerImg} alt="Header Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}