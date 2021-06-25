import Image from "next/image";
import classes from "./BrandTitle.module.css";

function BrandTitle(props) {
  return (
    <div className={classes.title}>
      <div className={classes.logo}>
        <Image src={props.logo} alt="logo" height={24} width={30} />
      </div>
      <span className={`heading-6-semibold ${classes.brandName}`}>
        {props.name}
      </span>
    </div>
  );
}

export default BrandTitle;
