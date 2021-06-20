// Layout that can be replicated for other pages
// Displays top part of the page: nav bar

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import { Settings, User, Bookmark, Search } from "react-feather";
import classes from "./Layout.module.css";
import Container from "react-bootstrap/Container";
import { SiteFilter } from "../../contexts/filter-context";

function NewLayout() {
  // Importing search bar state
  const { setSearchQuery } = useContext(SiteFilter);

  return (
    <Container className={classes.box}>
      <div className={classes.logo}>
        <Link href="/brandpage" className={classes.logoText}>
          <a>
            <Image src="/images/Logo2.svg" alt="Logo" width={94} height={30} />
          </a>
        </Link>
      </div>
      <div className={classes.input}>
        <input
          type="text"
          className={classes.inputBox}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className={classes.button}>
          <Search
            strokeWidth={1}
            size={13.52}
            style={{ paddingBottom: "3px" }}
          />
        </button>
      </div>
      <div className={classes.icons}>
        <div className={classes.icon}>
          <Settings strokeWidth={1} size={16} />
        </div>
        <div className={classes.icon}>
          <User strokeWidth={1} size={16} />
        </div>
        <div className={classes.icon}>
          <Bookmark strokeWidth={1} size={16} />
        </div>
      </div>
    </Container>
  );
}

export default NewLayout;
