import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import classes from "./BrandImage.module.css";
import { useState } from "react";

const Images = ({ imageList }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className={classes.ImageContainer}>
      <Carousel fade activeIndex={index} onSelect={handleSelect}>
        {imageList.map(function (image, index) {
          return (
            <Carousel.Item key={index}>
              <Image width={744} height={557} src={image} alt="First slide" />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Images;
