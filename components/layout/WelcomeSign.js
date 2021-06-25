// Displays welcome sign for the page

import classes from "./WelcomeSign.module.css";
import { useRouter } from "next/router";

function WelcomeSign({ header, sub }) {
  const router = useRouter();

  return (
    <div className={router.query?.id ? classes.brandPage : classes.mainPage}>
      <span
        className={
          router.query?.id ? "heading-4-semibold" : `heading-5-regular`
        }
      >
        {header}
      </span>
      <span
        className={
          router.query?.id ? "paragraph-regular " : "heading-5-regular"
        }
      >
        {sub}
      </span>
    </div>
  );
}
export default WelcomeSign;
