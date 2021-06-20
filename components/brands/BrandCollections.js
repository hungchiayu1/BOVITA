// Displays bookmark icon

import classes from "./BrandCollections.module.css";
import { Bookmark } from "react-feather";

function BrandCollections() {
  return (
    <div className={classes.bookmark}>
      <span className={classes.icon}>
        <Bookmark color="#E0E0E0" size={16} />
      </span>
    </div>
  );
}

export default BrandCollections;
