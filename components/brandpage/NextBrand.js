import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./NextBrand.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const NextPage = () => {
  const router = useRouter();
  const brandId = Number(router.query.id);

  if (brandId === 6) {
    return (
      <div className={classes.NextPageContainer}>
        <FontAwesomeIcon icon={faArrowRight} className={classes.showIcon} />
      </div>
    );
  }

  return (
    <Link href={`/brandpage/${brandId + 1}`} passHref>
      <div className={classes.NextPageContainer}>
        <FontAwesomeIcon icon={faArrowRight} className={classes.ShowIcon} />
      </div>
    </Link>
  );
};

const PrevPage = () => {
  const router = useRouter();
  const brandId = Number(router.query.id);

  if (brandId === 1) {
    return (
      <div className={classes.PrevPageContainer}>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    );
  }

  return (
    <Link href={`/brandpage/${brandId - 1}`} passHref>
      <div className={classes.PrevPageContainer}>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </Link>
  );
};

const NextBrand = () => {
  return (
    <>
      <NextPage />
      <PrevPage />
    </>
  );
};
export default NextBrand;
