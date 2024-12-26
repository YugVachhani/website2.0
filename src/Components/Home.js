import React, { useEffect, useState } from "react";
import homeImageOne from "../assets/images/Home Image 1.png";
import homeImageTwo from "../assets/images/Home Image 2.png";
import homeImageThree from "../assets/images/Home Image 3.png";
import Product from "./Product";
import About from "./About";

const images = [homeImageOne, homeImageTwo, homeImageThree];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="flex flex-col gap-[44rem] max-[580px]:gap-[20rem]">
        <div className="slider-container-home">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`slide slide-home ${
                index === currentIndex ? "active" : ""
              }`}
            />
          ))}
        </div>
        <div>
          <Product />
        </div>
      </div>
      <div>
        <About />
      </div>
    </>
  );
};

export default Home;
