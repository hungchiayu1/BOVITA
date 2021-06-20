import Image from "next/image";
import classes from "./BrandTitle.module.css";

function BrandTitle(props) {
  return (
    <div className={classes.title}>
      <span>
        <Image src={props.logo} alt="logo" height={35} width={30} />
      </span>
      <span className={classes.brandName}>{props.name}</span>
    </div>
  );
}

export default BrandTitle;
