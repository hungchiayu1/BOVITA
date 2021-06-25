// Layout that can be replicated for other pages
// Displays top part of the page: nav bar

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import { Settings, User, Bookmark, Search } from "react-feather";
import classes from "./Layout.module.css";
import { SiteFilter } from "../../contexts/filter-context";

function NewLayout() {
  // Importing search bar state
  const { setSearchQuery } = useContext(SiteFilter);

  return (
    <div className={classes.box}>
      <Link href="/brandpage">
        <a>
          <Image src="/images/Logo2.svg" alt="Logo" width={94} height={30} />
        </a>
      </Link>
      <div className={classes.input}>
        <input
          type="text"
          className={classes.inputBox}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className={classes.button}>
          <Search strokeWidth={1} size={15} />
        </button>
      </div>
      <div className={classes.icons}>
        <Settings strokeWidth={1} size={16} />
        <User strokeWidth={1} size={16} />
        <Bookmark strokeWidth={1} size={16} />
      </div>
    </div>
  );
}

export default NewLayout;
