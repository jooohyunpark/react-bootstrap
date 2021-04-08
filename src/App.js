import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.scss";

function App() {
  return (
    <Container className="app">
      <Row>
        <Col sm={12} md={6} lg={4}>
          <Button variant="primary">Primary</Button>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Button variant="primary">Primary</Button>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Button variant="primary">Primary</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
