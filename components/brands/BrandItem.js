// BrandItem to display each card showing all brand details

import React from "react";
import Link from "next/link";
import Image from "next/image";

import classes from "./BrandItem.module.css";

// Consists of 5 components
import BrandTitle from "./BrandTitle";
import BrandSlogan from "./BrandSlogan";
import BrandFooter from "./BrandFooter";
import BrandPromotion from "./BrandPromotion";
import BrandCollections from "./BrandCollections";

function BrandItem({ brand, likesRecord }) {
  return (
    <div className={classes.card}>
      <Link href={`/brandpage/${brand.id}`}>
        <a className={classes.anchor}>
          <div className={classes.imageHolder}>
            <Image
              className={classes.image}
              src={brand.images[0]}
              alt="Image of brand"
              width={340}
              height={242}
            />
            <BrandCollections />
            {brand.promotion ? <BrandPromotion /> : null}
          </div>
          <div className={classes.cardBody}>
            <div className={classes.name}>
              <BrandTitle name={brand.name} logo={brand.logo} />
            </div>
            <>
              <BrandSlogan slogan={brand.slogan} />
            </>
          </div>
        </a>
      </Link>
      <div className={classes.footer}>
        <BrandFooter brand={brand} likesRecord={likesRecord} />
      </div>
    </div>
  );
}

export default BrandItem;
