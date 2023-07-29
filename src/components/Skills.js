import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import gradient from "../assets/img/gradient.jpg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

 
  
  window.onload = () => { 
  const numbers = document.querySelectorAll('.number');
  const svgEl = document.querySelectorAll('svg circle');
  const counters = Array(numbers.length);
  const intervals = Array(counters.length);
  counters.fill(0);

    const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      numbers.forEach((number, index) => {
        intervals[index] = setInterval(() => {
          if(counters[index] === parseInt(number.dataset.num)){
            clearInterval(counters[index]);
          } else {
            counters[index] += 1;
            number.innerHTML = counters[index] + "%";
            svgEl[index].style.strokeDashoffset = Math.floor(440 - 442 * parseFloat(number.dataset.num / 100));
          }
        }, 20);
      });
    } else {
      intervals.forEach(interval => clearInterval(interval));
    }
  }, { threshold: [0.5] });

  const skillSection = document.getElementById('skills');
  observer.observe(skillSection);
};
  return ( <section className="skill" id="skills"> 
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="skill-bx wow zoomIn">
          <h2>Skills</h2>
          <p>See some of the knowledge I master.<br></br> Knowledge gives you the power to determine your own destiny.</p>
          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
            <div className="item">
              <div className="outer">
                <div className="inner">
                  <div className="number" data-num="70">
                  </div>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" strokeLinecap="round" />
              </svg>
              <h5>Agile Methodology</h5>
            </div>
            <div className="item">
              <div className="outer">
                <div className="inner">
                  <div className="number" data-num="75">
                  </div>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" strokeLinecap="round" />
              </svg>
              <h5>English</h5>
            </div>            
            <div className="item">
              <div className="outer">
                <div className="inner">
                  <div className="number" data-num="85">
                  </div>
                </div>
              </div>
              <svg version="1.1" width="160px" height="160px">
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" strokeLinecap="round" />
              </svg>
              <h5>Programming Logic</h5>
            </div>
            <div className="item">
              <div className="outer">
                <div className="inner">
                  <div className="number" data-num="90">
                  </div>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" strokeLinecap="round" />
              </svg>
              <h5>Communicative</h5>
            </div>
            <div className="item">
              <div className="outer">
                <div className="inner">
                  <div className="number" data-num="95">
                  </div>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" strokeLinecap="round" />
              </svg>
              <h5>Fast Learning</h5>
            </div>  
            <div className="item">
              <div className="outer">
                <div className="inner">
                  <div className="number" data-num="100">
                  </div>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" strokeLinecap="round" />
              </svg>
              <h5>Lifelong Learner</h5>
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