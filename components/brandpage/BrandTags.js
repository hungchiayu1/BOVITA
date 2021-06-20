import classes from "./BrandTags.module.css";
import { Tag, Globe } from "react-feather";
import { priceHandler } from "../../lib/brand-helper";

//BrandTag component
const BrandTags = ({ brand }) => {
  return (
    <div className={classes.TagRegion}>
      {brand.taglist.map(function (tag_name, index) {
        return (
          <div key={index}>
            <button
              className={classes.TagBox}
              onClick={() => console.log(tag_name)}
            >
              {tag_name}
            </button>
          </div>
        );
      })}
      <Dollar brandPrice={brand.price} />
      <Shipping />
      <Promotion brandPromotion={brand.promotion} />
    </div>
  );
};

const Dollar = ({ brandPrice }) => {
  let text = <span className={classes.dollarText}>Average</span>;
  if (brandPrice === 3) {
    text = <span className={classes.dollarText}>Expensive</span>;
  } else if (brandPrice === 1) {
    text = <span className={classes.dollarText}>Cheap</span>;
  }
  return (
    <div className={classes.dollar}>
      {priceHandler(brandPrice)}
      {text}
    </div>
  );
};

//International shipping display component
const Shipping = () => {
  return (
    <div className={classes.shipping}>
      <Globe strokeWidth={1} size={16} />
      <span className={classes.shippingText}>Internation shipping</span>
    </div>
  );
};

export default BrandTags;

const Promotion = ({ brandPromotion }) => {
  if (brandPromotion) {
    return (
      <div className={classes.promotion}>
        <Tag size={18} strokeWidth={1} />
        <span className={classes.promotionText}>Ongoing Promotion</span>
      </div>
    );
  } else {
    return null;
  }
};
