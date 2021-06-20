// Displays brand description

import classes from "./BrandDetails.module.css";

function BrandSlogan({ slogan }) {
  let newSlogan;
  if (slogan.length > 87) {
    newSlogan = slogan.slice(0, 87);
    newSlogan += "...";
  }
  return <div className={classes.slogan}>{newSlogan || slogan}</div>;
}

export default BrandSlogan;
