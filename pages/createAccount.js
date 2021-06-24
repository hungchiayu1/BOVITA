// Create Acccount Page
import Head from "next/head";

import "../node_modules/font-awesome/css/font-awesome.min.css";

import classes from "./index.module.css";

// Consists of one component
import CreateAccountDisplay from "../components/createaccount/CreateAccountDisplay";

// function CreateAccount() {
//   return (
//     <Container fluid className={classes.container}>
//       <Head>
//         <title>Create Account here</title>
//         <meta name="description" content="Create your account here now" />
//       </Head>
//       <CreateAccountDisplay />
//     </Container>
//   );
// }

function CreateAccount() {
  return (
    <div className={classes.createAccount}>
      <Head>
        <title>Create Account here</title>
        <meta name="description" content="Create your account here now" />
      </Head>
      <CreateAccountDisplay />
    </div>
  );
}
export default CreateAccount;
