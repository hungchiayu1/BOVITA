// Login Page
import Head from "next/head";

import classes from "./index.module.css";

//   Consists of 2 components :
import LoginMenu from "../components/login/LoginMenu";
import Text from "../components/login/Text";

function Login() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Log In</title>
        <meta name="description" content="Log in" />
      </Head>
      <Text />
      <LoginMenu />
    </div>
  );
}

export default Login;
