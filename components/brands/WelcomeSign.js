// Displays welcome sign for the page
import Container from "react-bootstrap/Container";

import classes from "./WelcomeSign.module.css";

function WelcomeSign(props) {
  return (
    <Container className={classes.main}>
      <span className={classes.h1}>
        Welcome {props.message} <br></br>
        Brands tailored just for you.
      </span>
    </Container>
  );
}
export default WelcomeSign;
