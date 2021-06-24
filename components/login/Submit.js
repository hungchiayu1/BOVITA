// Submit portion for the form
// Contains button for form submition

import { ArrowRight } from "react-feather";
import Link from "next/link";

import classes from "./Submit.module.css";

function Submit({ handleSubmit, formIsValid }) {
  return (
    <>
      <button
        onClick={(e) => handleSubmit(e, "/brandpage")}
        className={`${classes.submitButton} paragraph-semibold`}
        disabled={!formIsValid}
      >
        Log In
      </button>
      <div className={`${classes.register} pargraph-smaller`}>
        <Link href="/createAccount">
          <a className={classes.not}>Not a member?</a>
        </Link>
        <Link href="/createAccount">
          <a className={classes.create}>
            Create Account
            <ArrowRight size={10} strokeWidth={1} />
          </a>
        </Link>
      </div>
    </>
  );
}

export default Submit;
