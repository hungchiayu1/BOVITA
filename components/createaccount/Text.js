// Displays Logo and Create Account text on the top of the box
import Image from "next/image";
import classes from "./Text.module.css";

function Text() {
  return (
    <>
      <Image src="/images/Logo2.svg" alt="Logo" width={94} height={30} />
      <span className={`heading-6-semibold`}>Create Account</span>
    </>
  );
}

export default Text;
