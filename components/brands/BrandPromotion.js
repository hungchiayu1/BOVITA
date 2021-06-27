// Displays promotion tag

import classes from "./BrandPromotion.module.css";
import { Tag } from "react-feather";

function BrandPromotion() {
  return (
    <div className={classes.container}>
      <Tag size={18} />
      <span className={`paragraph-smaller ${classes.icon}`}>Promotion</span>
    </div>
  );
}

export default BrandPromotion;
