// Displays the bottom portion of box
// - SignUp button, terms and conditions

import classes from "./SignUp.module.css";
import { ArrowRight } from "react-feather";
import Link from "next/link";

function SignUp() {
  return (
    <div>
      <div className={classes.checkBox}>
        <i
          style={{
            width: "24px",
            height: "24px",
            marginRight: "6px",
            paddingTop: "3px",
            cursor: "pointer",
          }}
          className=" fa fa-check-square fa-lg"
        />
        <span className={classes.checkBoxText}>
          Yes, I understand and agree to CommerceHulk&apos;s Terms and Services,
          including the User Agreement and Private Policy.
        </span>
      </div>
      <button className={classes.signUpButton}>
        <span className={classes.signUpButtonText}>Sign Up</span>
      </button>
      <div className={classes.routing}>
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
    </div>
  );
}

export default SignUp;
