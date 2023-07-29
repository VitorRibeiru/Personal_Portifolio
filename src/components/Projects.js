import {Container, Col, Tab, Row, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/WebHost.png";
import projImg2 from "../assets/img/Request.png";
import projImg3 from "../assets/img/DataAnalytcs.jpg";
import projImg4 from "../assets/img/PHP.jpg";
import projImg5 from "../assets/img/JS.png";
import projImg6 from "../assets/img/Phyton.png";
/*import colorSharp2 from "../assets/img/colorSharp2.png"; */

export const Projects = () => {

      const projects = [
        {
          title: "HostPage",
          description: "Host page simulation, using pure HTML and CSS.",
          imgUrl: projImg1,
        },
        {
          title: "Request APP",
          description: "The app that tracks and manages your requests with automatic email notifications and secure database storage.",
          imgUrl: projImg2
        },
        {
          title: "Insights Analysis Report",
          description: "$X savings, enhanced reactivity, and decision support through product and machine analysis, reduced variability, and actionable insights for process improvement and operational optimization.",
          imgUrl: projImg3,
        },
        {
          title: "Pirate Ava",
          description: "Management system simulating a university, where we have the registration of Students, Enrollments, Subjects and Grades, made in PHP using MySQL",
          imgUrl: projImg4,
        },
        {
          title: "Business Startup",
          description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
          imgUrl: projImg5,
        },
        {
          title: "Pirate Ava",
          description: "Management system simulating a university, where we have the registration of Students, Enrollments, Subjects and Grades, made in PHP using MySQL",
          imgUrl: projImg6,
        },
      ];


    return (
     <section className="project" id="projects">
        <Container>
            <Row>
                 <Col>
                 <h2>Projects</h2>
                 <p>See some of the projects signed by me</p>
                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                     <Nav.Item>
                        <Nav.Link eventKey="first">Developments</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey="second">Experiences</Nav.Link>
                     </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">About Me</Nav.Link>
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