// Displays welcome sign for the page

import classes from "./WelcomeSign.module.css";

function WelcomeSign({ name }) {
  return (
    <div className={`${classes.container} heading-5-regular`}>
      <p>Welcome, {name}.&nbsp;</p>
      <p>Brands tailored just for you.</p>
    </div>
  );
}
export default WelcomeSign;
