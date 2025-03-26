import { Button, Col, Container, Row } from 'react-bootstrap';
import { HiExternalLink } from 'react-icons/hi';
import '../../App.css';
import { Slide, Zoom } from 'react-reveal';
import { projectsData } from './projectsData';

const Projects = () => {
    return (
        <Container className="projCont scrollItem">
            <Zoom top>
                <div className="separator py-3">
                    <h2 className="projContHead">Projects</h2>
                </div>
            </Zoom>

            {projectsData.map((item, index) => (
                <Container>
                    {item.show && (
                        <Slide right={index % 2 === 0} left={index % 2 !== 0}>
                            <Row className="indProj">
                                <Col sm={6} style={{ padding: '0px' }}>
                                    <img src={item.thumbNail} className="ProjectImage" />
                                </Col>
                                <Col sm={6} className="indProjDes">
                                    <h2 style={{ padding: '10px', marginBottom: '20px' }}>{item.projectName}</h2>
                                    <h5>{item.briefSummary}</h5>
                                    <Row style={{ padding: '20px 0px' }}>
                                        <Col xs={6}>
                                            <Button variant="success" className="projBtn">
                                                <a
                                                    href={item.liveLink}
                                                    target="_blank"
                                                    style={{
                                                        color: 'inherit',
                                                        textDecoration: 'none',
                                                        display: 'grid',
                                                        gridTemplateColumns: '0.5fr 1fr'
                                                    }}
                                                >
                                                    <HiExternalLink style={{ fontSize: '24px' }} />
                                                    <div style={{ textAlign: 'left' }}>Live</div>
                                                </a>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Slide>
                    )}
                </Container>
            ))}
        </Container>
    );
};
export default Projects;
