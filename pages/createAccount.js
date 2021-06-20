// Create Acccount Page
import Head from "next/head";

import "../node_modules/font-awesome/css/font-awesome.min.css";
import Container from "react-bootstrap/Container";

import classes from "../components/createaccount/CreateAccountDisplay.module.css";

// Consists of one component
import CreateAccountDisplay from "../components/createaccount/CreateAccountDisplay";

function CreateAccount() {
  return (
    <Container fluid className={classes.container}>
      <Head>
        <title>Create Account here</title>
        <meta name="description" content="Create your account here now" />
      </Head>
      <CreateAccountDisplay />
    </Container>
  );
}
export default CreateAccount;
