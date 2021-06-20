// Footer for each card item displaying each brand
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./BrandDetails.module.css";
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
    <Container className={classes.footerBorder}>
      <Row>
        <Col className={classes.column}>{priceHandler(brand.price)}</Col>
        <Col onClick={toggleLikeHandler} className={classes.column}>
          <i
            style={{ cursor: "pointer", float: "right" }}
            className={
              likesList.find((rec) => rec === brand.id)
                ? "fa fa-thumbs-up"
                : "fa fa-thumbs-o-up"
            }
          />
          &nbsp;&nbsp;
          <i className={classes.number}>{likeNumber} likes</i>
        </Col>
      </Row>
    </Container>
  );
}

export default BrandFooter;
