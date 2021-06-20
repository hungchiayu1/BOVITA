// Displays promotion tag

import classes from "./BrandPromotion.module.css";
import { Tag } from "react-feather";

function BrandPromotion() {
  return (
    <div className={classes.container}>
      <span className={classes.tag}>
        <Tag size={18} />
      </span>
      <span className={classes.promotion}>Promotion</span>
    </div>
  );
}

export default BrandPromotion;
