import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import gradient from "../assets/img/gradient.jpg";
import skillImg1 from "../assets/img/communication.png";
import skillImg2 from "../assets/img/english.png";
import skillImg3 from "../assets/img/teamwork.png";
import skillImg4 from "../assets/img/agile-method.png";
import skillImg5 from "../assets/img/fast-learning.png";
import skillImg6 from "../assets/img/continuous-learning.png";
import { i18n } from '../translate/i18n';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 3
    },
    /*     tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
    } */
  };



  return (<section className="skill" id="skills">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="skill-bx wow zoomIn">
            <h2>{i18n.t('skills.title')}</h2>
            <p>{i18n.t('skills.subtitle1')}<br></br>{i18n.t('skills.subtitle2')}</p>
            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

<div className="item">
  <img className='img-icon' src={skillImg1}></img>
  <h5>{i18n.t('skills.skill1')}</h5>
  <div className="star-rating">
    <span className="star" data-rating="1"></span>
    <span className="star" data-rating="1"></span>
    <span className="star" data-rating="1"></span>
    <span className="star" data-rating="1"></span>
  </div>
  <div className='level'>
  <span className="level description"> {i18n.t('skills.level1')} </span>
  </div>
</div>

<div className="item">
  <img className='img-icon' src={skillImg2}></img>
  <h5>{i18n.t('skills.skill2')}</h5>
  <div className="star-rating">
    <span className="star" data-rating="1"></span>
    <span className="star" data-rating="1"></span>
    <span className="star" data-rating="1"></span>
  </div>
  <div className='level'>
  <span className="level description"> {i18n.t('skills.level2')} </span>
  </div>
</div>

<div className="item">
  <img className='img-icon' src={skillImg3}></img>
  <h5>{i18n.t('skills.skill3')}</h5>
  <div className="star-rating">
    <span className="star" data-rating="1"></span>
    <span className="star" data-rating="1"></span>
    <span className="star" data-rating="1"></span>
    <span className="star" data-rating="1"></span>
  </div>
  <div className='level'>
  <span className="level description"> {i18n.t('skills.level3')} </span>
  </div>
</div>

<div className="item">
  <img className='img-icon' src={skillImg4}></img>
  <h5>{i18n.t('skills.skill4')}</h5>
  <div className="star-rating">
    <span className="star" data-rating="1"></span>
    <span className="star" data-rating="1"></span>
  </div>
  <div className='level'>
  <span className="level description"> {i18n.t('skills.level4')} </span>
  </div>
</div>

<div className="item">
  <img className='img-icon' src={skillImg5}></img>
  <h5>{i18n.t('skills.skill5')}</h5>
  <div className="star-rating">
    <span className="star" data-rating="1"></span>
    <span className="star" data-rating="1"></span>
    <span className="star" data-rating="1"></span>
    <span className="star" data-rating="1"></span>
  </div>
  <div className='level'>
  <span className="level description"> {i18n.t('skills.level5')} </span>
  </div>
</div>

<div className="item">
  <img className='img-icon' src={skillImg6}></img>
  <h5>{i18n.t('skills.skill6')}</h5>
  <div className="star-rating">
    <span className="star" data-rating="1"></span>
    <span className="star" data-rating="1"></span>
    <span className="star" data-rating="1"></span>
    <span className="star" data-rating="1"></span>
    <span className="star" data-rating="1"></span>
  </div>
  <div className='level'>
  <span className="level description"> {i18n.t('skills.level6')} </span>
  </div>
</div>





            </Carousel>
          </div>
        </div>
      </div>
    </div>
    <img className="background-image-left" src={gradient} />
    <br></br><br></br>
  </section>
  )
}