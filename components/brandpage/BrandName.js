import classes from "./BrandName.module.css";
const BrandName = ({ brandName, brandSlogan }) => {
  return (
    <div>
      <div className={classes.title_font}>{brandName}</div>
      <div className={classes.welcome_sign_font}>{brandSlogan}</div>
    </div>
  );
};

export default BrandName;
