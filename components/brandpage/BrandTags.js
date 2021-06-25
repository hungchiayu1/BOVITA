import classes from "./BrandTags.module.css";
import { Tag, Globe } from "react-feather";
import { priceHandler } from "../../lib/brand-helper";

//BrandTag component
const BrandTags = ({ brand }) => {
  return (
    <div className={`${classes.TagRegion} paragraph-smaller`}>
      {brand.taglist.map(function (tag_name, index) {
        return (
          <button
            key={index}
            className={`${classes.TagBox} paragraph-smaller`}
            onClick={() => console.log(tag_name)}
          >
            {tag_name}
          </button>
        );
      })}
      <Dollar brandPrice={brand.price} />
      <Shipping />
      <Promotion brandPromotion={brand.promotion} />
    </div>
  );
};

const Dollar = ({ brandPrice }) => {
  let text = "Average";
  if (brandPrice === 3) {
    text = "Expensive";
  } else if (brandPrice === 1) {
    text = "Cheap";
  }
  return (
    <div className={classes.dollar}>
      {priceHandler(brandPrice)}
      <span>{text}</span>
    </div>
  );
};

//International shipping display component
const Shipping = () => {
  return (
    <div>
      <Globe strokeWidth={1} size={16} />
      <span>Internation shipping</span>
    </div>
  );
};

export default BrandTags;

const Promotion = ({ brandPromotion }) => {
  if (brandPromotion) {
    return (
      <div>
        <Tag size={18} strokeWidth={1} />
        <span>Ongoing Promotion</span>
      </div>
    );
  } else {
    return null;
  }
};
