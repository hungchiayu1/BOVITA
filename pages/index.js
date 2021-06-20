// Login Page
// Displays the login interface
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { Container, Col, Row } from "react-bootstrap";

//   Consists of 2 components :
import LoginMenu from "../components/login/LoginMenu";
import Text from "../components/login/Text";

function login() {
  return (
    <Container fluid style={{ height: "100%", backgroundColor: "#F4F7FF" }}>
      <Head>
        <title>Log In</title>
        <meta name="description" content="Log in" />
      </Head>
      <Row style={{ height: "100%" }}>
        <Col>
          <Text />
        </Col>
        <Col>
          <LoginMenu />
        </Col>
      </Row>
    </Container>
  );
}

export default login;
