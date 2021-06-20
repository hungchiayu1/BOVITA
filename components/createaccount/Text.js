// Displays Logo and Create Account text on the top of the box
import Image from "next/image";
import classes from "./Text.module.css";

function Text() {
  return (
    <div style={{ height: "100%", paddingTop: "3.5px" }}>
      <Image src="/images/Logo2.svg" alt="Logo" width={94} height={30} />
      <span className={classes.createAccount}>Create Account</span>
    </div>
  );
}

export default Text;
