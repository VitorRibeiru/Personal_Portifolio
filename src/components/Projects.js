import { Container, Col, Tab, Row, Nav, /* NavItem  */ } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import projImg1 from "../assets/img/WebHost.png";
import projImg2 from "../assets/img/Request.png";
import projImg3 from "../assets/img/DataAnalytcs.jpg";
import projImg4 from "../assets/img/PHP.jpg";
import projImg5 from "../assets/img/JS.png";
import projImg6 from "../assets/img/Phyton.png";
import expImg1 from "../assets/img/expintern.png";
import expImg2 from "../assets/img/expgraduation.png";
import expImg3 from "../assets/img/expweb.png";
import expImg4 from "../assets/img/expgames.png";
import expImg5 from "../assets/img/expproject.png";
import expImg6 from "../assets/img/expfreelas.png";
import abtImg1 from "../assets/img/eu.jpeg";
import { i18n } from "../translate/i18n";

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

  const navButtons = document.querySelectorAll('.nav-button');
  const descriptionText = document.getElementById('description-text');

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      navButtons.forEach(btn => {
        btn.classList.remove('selected');
      });
      button.classList.add('selected');
    });
  });

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const renderSelectedContent = () => {
    switch (selectedButton) {
      
      case 'Estágio':
        return (
          <div>
            <span className="span-title">Experiências adquiridas em Estágio</span><br></br><br></br>
            <span className="span-subtitle">Engenharia Industrial Michelin:</span><br></br>
            <span className="span-description">
             Durante o meu estágio na Michelin, como o único especialista em TI na indústria, fui nomeado Desenvolvedor da Indústria 4.0. 
             Minhas responsabilidades incluíam a gestão do sistema de rastreabilidade de produtos, o desenvolvimento digital da indústria e a criação de soluções para otimizar processos. 
             <br></br><br></br>Além de garantir o funcionamento e gerenciar acessos, criei ferramentas digitais utilizando Power X, aplicativos e painéis de controle utilizando DAX e Power Query,
             que receberam reconhecimento pela qualidade e inovação. Utilizando Phyton e PowerAutomate automatizei fluxos e relatórios para agilizar a tomada de decisões, o que aumentou a eficiência e visibilidade da empresa. 
             <br></br><br></br>Apresentei soluções inovadoras internacionalmente,interagindo com diversas culturas e participando de reuniões globais para compartilhar avanços digitais. 
             Como líder de projetos, ofereci suporte técnico, conduzi treinamentos e promovi meu crescimento pessoal, ao mesmo tempo em que auxiliava no desenvolvimento de outras pessoas. 
             Também ampliei meus conhecimentos na área de Dados, realizando formações como MicroStrategy e PI System e aplicando esses aprendizados na prática.
             </span>
          </div>
        );
      case 'Graduação':
        return (
          <div>
            <span className="span-title">Experiências adquiridas na Graduação</span><br></br><br></br>
            <span className="span-subtitle">Voluntário do Núcleo de Ensino a Distância:</span><br></br>
            <span className="span-description">Na epoca da pandemia onde as Faculdades inciaram as aulas online fui voluntário NEAD,o projeto visava ensinar e auxiliar tanto os novos alunos da Graduação que nunca tiveram contato com o AVA (Ambiente Virtual de Aprendizagem)
            </span><br></br><br></br>
            <span className="span-subtitle">Desenvolvimentos de projetos:</span><br></br>
            <span className="span-description">Atuei na recriação da infraestrutura de redes da universidade usando o Cisco Packet Tracer, desenvolvendo habilidades em design de redes, configuração de dispositivos como roteadores e switches, implementação de segurança, resolução de problemas e monitoramento de tráfego.
            </span><br></br><br></br>
          </div>
        );
        case 'Aplicações Web':
        return (
          <div>
            <span className="span-title">Experiências de Desenvolvimento Web adquiridas</span><br></br><br></br>
            <span className="span-subtitle">Criações de Aplicações Web:</span><br></br>
            <span className="span-description">
            Durante o bacharel desenvolvi um sistema de gestão de alunos onde atuamos ouvimos as requisições do cliente, o sistema desenvolvido em PHP e phpMyAdmin (SQL DataBase) quando finalizado foi capaz de registrar e dar permissões de administrador,cadastrar e alunos, cadastrar matérias e matricular os alunos nas matérias e lançar as notas dos alunos em cada matéria matriculada.
            O sistema foi utilizado para avaliar os conhecimentos na área/matéria (PHP).
            </span><br></br><br></br>
            <span className="span-subtitle">Venda de Sites :</span><br></br>
            <span className="span-description">
            Atuei na prestação de serviços também comercializando websites que eram criados por mim, principalmente na àrea de auxílio técnico para celulares. (JavaScript)
            </span><br></br>        
          </div>
        );
        case 'Jogos':
          return (
            <div>
              <span className="span-title">Experiências adquiridas desenvolvendo Jogos</span><br></br><br></br>
              <span className="span-subtitle">Desenvolvimentos de Jogos 2D - JavaScript:</span><br></br>
              <span className="span-description"> 
              Durante a minha graduação, criei um jogo estilo "Space Blaster" usando JavaScript. Nele, os jogadores controlam uma nave espacial, enfrentando inimigos e desviando de ataques. 
              Ao longo desse processo, aprimorei minhas habilidades em diversos aspectos, desde a elaboração de mecânicas de jogo até a criação de animações, gráficos, 
              gestão de eventos e sistemas de pontuação. permitiu explorar a programação de jogos, 
              o design de mecânicas envolventes e a criação de uma experiência de jogo desafiadora e divertida.
              </span><br></br><br></br>
              <span className="span-subtitle">Jogo RPG 3D - Unreal Engine:</span><br></br>
              <span className="span-description">
              Desenvolvi um jogo RPG na Unreal Engine como parte do meu Trabalho de Conclusão de Curso (TCC). 
              Durante esse projeto, adquiri conhecimentos abrangentes em design de jogos, programação (Blueprint e C++), 
              modelagem 3D, animações, narrativa interativa e otimização. A experiência também me ensinou sobre colaboração em equipe, g
              erenciamento de projetos e o processo de lançamento e distribuição de jogos. 
              No geral, essa jornada me proporcionou um conjunto valioso de habilidades interdisciplinares no campo do desenvolvimento de jogos e tecnologia.
              </span><br></br>
            </div>
          );
        case 'Projetos':
          return (
            <div>
              <span className="span-title">Experiências adquiridas em Projetos</span><br></br><br></br>
              <span className="span-subtitle">Projeto de Aquisição de Impressora 3D:</span><br></br>
              <span className="span-description">
              Em desenvolvimento, atualizações em breve.
              </span><br></br>
              <span>
                
              </span>
            </div>
          );
          case 'Freelancer':
            return (
              <div>
                <span className="span-title">Experiências como Autonomo</span><br></br><br></br>
                <span className="span-subtitle">Freelancer:</span><br></br>
                <span className="span-description">Autonomo desde os 15 anos, trabalhei na prestação de auxílio a serviços técnicos, abrangendo atividades como instalações de softwares, drivers, impressoras, configurações de sistemas e dispositivos periféricos.</span><br></br><br></br>
                <span className="span-subtitle">Tutor:</span><br></br>
                <span className="span-description">Atuei na elaboração de materiais didáticos para aulas e como tutor particular dando aulas de reforço e aulas de informática.
                </span><br></br><br></br>
              </div>
            );
      default:
        return (
          <div>
            <span className="span-title">Veja as experiências que adquiri ao decorrer da minha vida</span><br></br><br></br>
            <span className="span-subtitle">Escolha uma das opções ao lado</span><br></br>           
          </div>
        );
        return null;
    }
  };

  const renderImgSelectedContent = () => {
    switch (selectedButton) {
      
      case 'Estágio':
        return (
          <img className="img-description" src={expImg1}></img>         
        );
        case 'Graduação':
          return (
            <img className="img-description" src={expImg2}></img>       
          );
          case 'Aplicações Web':
            return (
              <img className="img-description" src={expImg3}></img>       
            );
            case 'Jogos':
              return (
                <img className="img-description" src={expImg4}></img>       
              );
              case 'Projetos':
                return (
                  <img className="img-description" src={expImg5}></img>       
                );
                case 'Freelancer':
                  return (
                    <img className="img-description" src={expImg6}></img>       
                  );
        default:
        return null;
    }};

    const renderAboutSelectedContent = () => {
      switch (selectedButton) {
        
        case 'Perfil':
          return (
            <div>
              <span className="span-title">João Vitor da Silva Ribeiro</span><br></br><br></br>
              <span className="span-subtitle">Brasileiro, 22 anos, Resende - RJ</span><br></br>
              <span className="span-description">
              Minha paixão pela tecnologia e inovação é evidente em meu trabalho e procuro sempre me manter atualizado sobre as tendências e avanços da área. Além disso, sou altamente ambicioso e estou sempre buscando aprender mais para aprimorar minhas habilidades e oferecer soluções de software inovadoras e eficazes.
              </span>
            </div>
          );
        case 'Minha Vida':
          return (
            <div>
              <span>Em Desenvolvimento</span>
            </div>
          );
          case 'Hobbies':
          return (
            <div>
            <span>Em Desenvolvimento</span>            
            </div>
          );
          case 'Objetivos':
            return (
              <div>
              <span>Em Desenvolvimento</span>
              </div>
            );
          case 'Sonhos':
            return (
              <div>
              <span>Em Desenvolvimento</span>
              </div>
            );
          default:
            return (
              <div>
                <span className="span-title">Veja as experiências que adquiri ao decorrer da minha vida</span><br></br><br></br>
                <span className="span-subtitle">Escolha uma das opções ao lado</span><br></br>           
              </div>
            );
          return null;
      }
    };
  
    const renderAboutImgSelectedContent = () => {
      switch (selectedButton) {
        
        case 'Perfil':
          return (
            <img className="img-description" src={abtImg1}></img>         
          );
          case 'Minha Vida':
            return (
              <img className="img-description" src={'#'}></img>       
            );
            case 'Hobbies':
              return (
                <img className="img-description" src={'#'}></img>       
              );
              case 'Objetivos':
                return (
                  <img className="img-description" src={'#'}></img>       
                );
                case 'Sonhos':
                  return (
                    <img className="img-description" src={'#'}></img>       
                  );
                
                    return (
                      <img className="img-description" src={expImg6}></img>       
                    );
          default:
          return null;
      }};
  
    



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
                  <div className="exp-container">
                    <div className="sidebar">
                      <div>
                        <div className="exp-nav">
                          <button className={`nav-button ${selectedButton === 'Estágio' ? 'selected' : ''}`} onClick={() => handleButtonClick('Estágio')}><span>Estágio</span></button>
                          <button className={`nav-button ${selectedButton === 'Graduação' ? 'selected' : ''}`} onClick={() => handleButtonClick('Graduação')}><span>Graduação</span></button>
                          <button className={`nav-button ${selectedButton === 'Aplicações Web' ? 'selected' : ''}`} onClick={() => handleButtonClick('Aplicações Web')}><span>Aplicações Web</span></button>
                          <button className={`nav-button ${selectedButton === 'Jogos' ? 'selected' : ''}`} onClick={() => handleButtonClick('Jogos')}><span>Jogos</span></button>
                          <button className={`nav-button ${selectedButton === 'Projetos' ? 'selected' : ''}`} onClick={() => handleButtonClick('Projetos')}><span>Projetos</span></button>
                          <button className={`nav-button ${selectedButton === 'Freelancer' ? 'selected' : ''}`} onClick={() => handleButtonClick('Freelancer')}><span>Freelancer</span></button>
                          </div>
                      </div>

                    </div>
                    <div className="description" id="description-text">
                      {renderSelectedContent()}
                    </div>
                    <div className="img">
                    {renderImgSelectedContent()}
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <div className="exp-container">
                    <div className="sidebar">
                      <div>
                        <div className="exp-nav">
                          <button className={`nav-button ${selectedButton === 'Perfil' ? 'selected' : ''}`} onClick={() => handleButtonClick('Perfil')}><span>Perfil</span></button>
                          <button className={`nav-button ${selectedButton === 'Minha Vida' ? 'selected' : ''}`} onClick={() => handleButtonClick('Minha Vida')}><span>Minha Vida</span></button>
                          <button className={`nav-button ${selectedButton === 'Hobbies' ? 'selected' : ''}`} onClick={() => handleButtonClick('Hobbies')}><span>Hobbies</span></button>
                          <button className={`nav-button ${selectedButton === 'Objetivos' ? 'selected' : ''}`} onClick={() => handleButtonClick('Objetivos')}><span>Objetivos</span></button>
                          <button className={`nav-button ${selectedButton === 'Sonhos' ? 'selected' : ''}`} onClick={() => handleButtonClick('Sonhos')}><span>Sonhos</span></button>
                          </div>
                      </div>

                    </div>
                    <div className="description">
                      {renderAboutSelectedContent()}
                    </div>
                    <div className="img">
                      {renderAboutImgSelectedContent()}
                    </div>
                  </div>                  
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}