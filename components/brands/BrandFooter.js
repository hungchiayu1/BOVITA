// Footer for each card item displaying each brand
import { useState, useEffect } from "react";
import classes from "./BrandFooter.module.css";
import { priceHandler } from "../../lib/brand-helper";

// TODO: add functionality for if data fails to update
// TODO: add loading state / UI for while info is being updated?

function BrandFooter({ brand, likesRecord }) {
  const [likeNumber, setlikeNumber] = useState(brand.likes);
  let likesList = likesRecord; // Local variable to store the likesRecord to provide instant UI update

  function toggleLikeHandler() {
    console.log(likesList.includes(brand.id)); //Before update

    const body = {
      id: brand.id,
      isLike: likesList.includes(brand.id),
    };

    if (likesList.includes(brand.id)) {
      setlikeNumber(likeNumber - 1);
      likesList.pop();
    } else {
      setlikeNumber(likeNumber + 1);
      likesList.push(brand.id);
    }

    fetch("/api/brand-data", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
      });
  }

  return (
    <div className={classes.container}>
      <div className={classes.dollarSigns}>{priceHandler(brand.price)}</div>
      <div className={`paragraph-small`}>{likeNumber} likes</div>
      <i
        onClick={toggleLikeHandler}
        style={{ cursor: "pointer" }}
        className={
          likesList.find((rec) => rec === brand.id)
            ? `fa fa-thumbs-up ${classes.icon}`
            : `fa fa-thumbs-o-up ${classes.icon}`
        }
      />
    </div>
  );
}

export default BrandFooter;
