import {Container, Col, Tab, Row, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/WebHost.png";
import projImg2 from "../assets/img/Request.png";
import projImg3 from "../assets/img/DataAnalytcs.jpg";
import projImg4 from "../assets/img/PHP.jpg";
import projImg5 from "../assets/img/JS.png";
import projImg6 from "../assets/img/Phyton.png";
import { i18n } from "../translate/i18n";
/*import colorSharp2 from "../assets/img/colorSharp2.png"; */

export const Projects = () => {


  const p1title = i18n.t('projects.project1.title');
  const p1description = i18n.t('projects.project1.description');
  const p2title = i18n.t('projects.project2.title');
  const p2description = i18n.t('projects.project2.description');
  const p3title = i18n.t('projects.project3.title');
  const p3description = i18n.t('projects.project3.description');
  const p4title = i18n.t('projects.project4.title');
  const p4description = i18n.t('projects.project4.description');
  const p5title = i18n.t('projects.project5.title');
  const p5description = i18n.t('projects.project5.description');
  const p6title = i18n.t('projects.project6.title');
  const p6description = i18n.t('projects.project6.description');


      const projects = [
        {
          title: p1title,
          description: p1description,
          imgUrl: projImg1,
        },
        {
          title: p2title,
          description: p2description,
          imgUrl: projImg2,
        },
        {
          title: p3title,
          description: p3description,
          imgUrl: projImg3,
        },
        {
          title: p4title,
          description: p4description,
          imgUrl: projImg4,
        },
        {
          title: p5title,
          description: p5description,
          imgUrl: projImg5,
        },
        {
          title: p6title,
          description: p6description,
          imgUrl: projImg6,
        },
      ];


    return (
     <section className="project" id="projects">
        <Container>
            <Row>
                 <Col>
                 <h2>{i18n.t('projects.title')}</h2>
                 <p>{i18n.t('projects.subtitle')}</p>
                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                     <Nav.Item>
                        <Nav.Link eventKey="first">{i18n.t('projects.nav1')}</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey="second">{i18n.t('projects.nav2')}</Nav.Link>
                     </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">{i18n.t('projects.nav3')}</Nav.Link>
                     </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                       <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                            }
                        </Row>
                        </Tab.Pane>                        
                        <Tab.Pane eventKey="second">
                          <p>Lore Ipsum</p>
                          </Tab.Pane>
                        <Tab.Pane eventKey="third">
                         <p>Lore Ipsum</p>
                          </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                 </Col>
            </Row>
        </Container>
        {/*<img className="background-img-right" src={colorSharp2}></img>*/}     
      </section>
    ) 
}