import {Container, Col, Tab, Row, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
/*import colorSharp2 from "../assets/img/colorSharp2.png"; */

export const Projects = () => {

      const projects = [
        {
          title: "Pirate Ava",
          description: "Management system simulating a university, where we have the registration of Students, Enrollments, Subjects and Grades, made in PHP using MySQL",
          imgUrl: projImg1,
        },
        {
          title: "HostPage",
          description: "Host page simulation, using pure HTML and CSS.",
          imgUrl: projImg2,
        },
        {
          title: "Web Scrapping Cotation",
          description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
          imgUrl: projImg3,
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
                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                     </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
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