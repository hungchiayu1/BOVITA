// Displays the bottom portion of box
// - SignUp button, terms and conditions

import classes from "./SignUp.module.css";
import { ArrowRight, CheckSquare } from "react-feather";
import Link from "next/link";

function SignUp() {
  return (
    <>
      <div className={classes.checkBox}>
        <CheckSquare strokeWidth={1} size={24} />
        <span className={`${classes.checkBoxText} paragraph-smaller`}>
          Yes, I understand and agree to CommerceHulk&apos;s Terms and Services,
          including the User Agreement and Private Policy.
        </span>
      </div>
      <button className={`${classes.signUpButton} paragraph-semibold`}>
        Sign Up
      </button>
      <div className={`${classes.routing} paragraph-smaller`}>
        <Link href="/">
          <a className={classes.question}>Already have an account?</a>
        </Link>
        <Link href="/">
          <a className={classes.logIn}>
            Log in
            <ArrowRight style={{ paddingBottom: "0px" }} size={10} />
          </a>
        </Link>
      </div>
    </>
  );
}

export default SignUp;
