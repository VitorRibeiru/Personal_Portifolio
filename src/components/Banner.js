import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/PC4.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
//import 'animate.css';
//import TrackVisibility from 'react-on-screen';

export const Banner = () => {  
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["FullStack Developer", "Web Developer", "Data Analyst", "01010110 01010010"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  
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
      setDelta(prevDelta => prevDelta / 2);
    }
  
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }
  

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <div className="myself">                        
                    <h1>{`Hi!  I'm Vitor Ribeiro`}</h1>
                    <h1 className="txt-rotate">
                    <span className="wrap">{text}</span>
                    </h1>
                    </div>
                    <p>If even variables need to be declared, why not declare myself to you? I love technology and the things it lets us do.
                    <br></br> I love to learn new things and develop.<br></br> In love with games and coffe! 
                    <br></br> Committed to making a positive impact on the world!</p>
                    <div className="btn">
                      <button className="mbtn"><a>Feel the Force</a></button>
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