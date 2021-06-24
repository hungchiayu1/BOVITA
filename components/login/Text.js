// Text Box for the quote on the left side of screen in Login Page
import classes from "./Text.module.css";

function Text() {
  return (
    <span className={`${classes.text} heading-1-regular`}>
      World&apos;s websites <br></br> within your hands.
    </span>
  );
}

export default Text;
