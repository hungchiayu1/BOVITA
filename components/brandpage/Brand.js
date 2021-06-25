import classes from "./Brand.module.css";

import Buttons from "./BrandButtons.js";
import Description from "./BrandDescriptions.js";
import Comments from "./BrandComments.js";
import Images from "./BrandImage.js";
import BrandTags from "./BrandTags.js";
import NextBrand from "./NextBrand.js";

const Brand = ({ brand, likesRecord }) => {
  return (
    <div className={classes.container}>
      <NextBrand />
      <div className={classes.BrandContainer}>
        <Images imageList={brand.images} alt="an image" />
        <div className={classes.content}>
          <Buttons brand={brand} likesRecord={likesRecord} />
          <BrandTags brand={brand} />
          <Description descriptions={brand.description} />
          <Comments comments={brand.comment} id={brand.id} />
        </div>
      </div>
    </div>
  );
};
export default Brand;
