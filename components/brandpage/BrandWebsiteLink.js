import classes from "./BrandWebsiteLink.module.css";

const LinkToWebsite = ({ WebsiteLink }) => {
  return (
    <form action={WebsiteLink} className={classes.LinkContainer}>
      <input type="submit" value="Visit Website" className={classes.Link} />
    </form>
  );
};
export default LinkToWebsite;
