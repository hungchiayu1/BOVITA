import classes from "./BrandDescription.module.css";

const Descriptions = ({ descriptions }) => {
  return (
    <div className={`${classes.DescriptionContainer} paragraph-regular`}>
      {descriptions}
    </div>
  );
};

export default Descriptions;
