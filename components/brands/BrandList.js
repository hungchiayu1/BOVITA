// Consists of the list of all brands displayed in the site

import { useContext } from "react";

import classes from "./BrandList.module.css";

// Consists of one component <BrandItem />
import BrandItem from "./BrandItem";
import { SiteFilter } from "../../contexts/filter-context";

function BrandList({ brands, likesRecord }) {
  // Access search bar input state
  // searchQuery STATE: value of the inputbar in the navbar
  const { searchQuery } = useContext(SiteFilter);

  return (
    <div className={classes.container}>
      {brands
        .filter((brand) => {
          return brand.name.toLowerCase().includes(searchQuery);
        })
        .map((brand) => {
          return (
            <BrandItem key={brand.id} brand={brand} likesRecord={likesRecord} />
          );
        })}
    </div>
  );
}

export default BrandList;
