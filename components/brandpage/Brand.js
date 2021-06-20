import "bootstrap/dist/css/bootstrap.min.css";
import Buttons from "./BrandButtons.js";
import Description from "./BrandDescriptions.js";
import Comments from "./BrandComments.js";
import BrandName from "./BrandName.js";
import Images from "./BrandImage.js";
import BrandTags from "./BrandTags.js";
import NextBrand from "./NextBrand.js";
import classes from "./Brand.module.css";

const Brand = ({ brand, likesRecord }) => {
  return (
    <div>
      <BrandName brandName={brand.name} brandSlogan={brand.slogan} />
      <NextBrand />
      <div className={classes.BrandContainer}>
        <Images imageList={brand.images} alt="an image" />
        <Buttons brand={brand} likesRecord={likesRecord} />
        <BrandTags brand={brand} />
        <Description descriptions={brand.description} />
        <Comments comments={brand.comment} id={brand.id} />
      </div>
    </div>
  );
};
export default Brand;
