// Displays bookmark icon

import classes from "./BrandCollections.module.css";
import { Bookmark } from "react-feather";

function BrandCollections() {
  return (
    <div className={classes.bookmark}>
      <Bookmark size={16} />
    </div>
  );
}

export default BrandCollections;
