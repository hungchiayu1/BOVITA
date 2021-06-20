// Submit portion for the form
// Contains button for form submition

import { ArrowRight } from "react-feather";
import Link from "next/link";

import classes from "./Submit.module.css";

function Submit({ handleSubmit, formIsValid }) {
  return (
    <div>
      <button
        onClick={(e) => handleSubmit(e, "/brandpage")}
        className={classes.submitButton}
        disabled={!formIsValid}
      >
        <span className={classes.buttonText}>Log In</span>
      </button>
      <div className={classes.register}>
        <Link href="/createAccount">
          <a className={classes.not}>Not a member?</a>
        </Link>
        <Link href="/createAccount">
          <a className={classes.create}>
            Create Account
            <ArrowRight
              style={{ paddingBottom: "2px" }}
              size={10}
              strokeWidth={1}
            />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Submit;
