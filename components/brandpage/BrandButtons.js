import { Bookmark, Share, ThumbsUp, ThumbsDown } from "react-feather";

import classes from "./BrandButtons.module.css";
import { useState } from "react";

const LikeButton = ({ brand, likesRecord }) => {
  const [likeNumber, setlikeNumber] = useState(brand.likes);

  function toggleLikeHandler() {
    let likesList = likesRecord; // Local variable to store the likesRecord to provide instant UI update
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
    console.log(likesList);

    fetch("/api/brand-data", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  }

  return (
    <div className={classes.likeIcon} onClick={toggleLikeHandler}>
      {likesRecord.find((rec) => rec === brand.id) ? (
        <ThumbsUp className={classes.icon} strokeWidth={1} size={24} />
      ) : (
        <ThumbsDown className={classes.icon} strokeWidth={1} size={24} />
      )}
      <span className={classes.iconText}>{likeNumber} likes</span>
    </div>
  );
};

const BookmarkButton = () => {
  //Handler for clicking bookmark icon
  const clickBookmark = () => {
    console.log("Add to bookmark!");
  };

  return (
    <div className={classes.bookmarkIcon}>
      <Bookmark
        onClick={clickBookmark}
        strokeWidth={1}
        size={24}
        className={classes.icon}
      />
      <span className={classes.iconText}>Bookmark</span>
    </div>
  );
};

const ShareButton = () => {
  //handler for clicking share icon
  const clickShare = () => {
    console.log("Shared!");
  };
  return (
    <div className={classes.shareIcon}>
      <Share
        onClick={clickShare}
        strokeWidth={1}
        size={24}
        className={classes.icon}
      />
      <span className={classes.iconText}>Share</span>
    </div>
  );
};

//Future updates  !
// This should take in a user object that tells whether user has liked or bookmarked this brand
const Buttons = ({ brand, likesRecord }) => {
  return (
    <div className={classes.StyledBox}>
      <span className={classes.iconContainer}>
        <LikeButton brand={brand} likesRecord={likesRecord} />
        <BookmarkButton />
        <ShareButton />
      </span>
    </div>
  );
};
export default Buttons;
