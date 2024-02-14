import { Accordion, Col, Container, Row } from 'react-bootstrap';

import { ProjectList as DummyProjects } from '../data/dummyProject'

const ProjectList = () => {
  return (
    <Container>
      <Accordion defaultActiveKey={['0']}> 
        {DummyProjects .map( (entry, index) => {
          return (
            <Accordion.Item eventKey={`${index}`}>
              <Accordion.Header>
                <Container>
                  <Row>
                    <Col>{entry.name}</Col>
                    <Col sm={4}>Tags: {entry.tags.join(', ')}</Col>
                  </Row>
                </Container>
              </Accordion.Header>
              <Accordion.Body>
                <Container>
                  {entry.description}
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          )
        })}
      </Accordion>
    </Container>
  )
}

export default ProjectList