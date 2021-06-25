// Displays brand description

import classes from "./BrandSlogan.module.css";

function BrandSlogan({ slogan }) {
  let newSlogan;
  if (slogan.length > 87) {
    newSlogan = slogan.slice(0, 87);
    newSlogan += "...";
  }
  return (
    <div className={`${classes.slogan} paragraph-small`}>
      {newSlogan || slogan}
    </div>
  );
}

export default BrandSlogan;
