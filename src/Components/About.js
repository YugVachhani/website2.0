import React, { useEffect, useState } from "react";
import AntiAcneTwo from "../assets/images/AntiAcne 2.jpg";
import MoistureLockTwo from "../assets/images/Moisture lock 2.jpg";
import NiacinamideLockTwo from "../assets/images/Niacinamide 2.jpg";
import SalicylicLockTwo from "../assets/images/Salicylic 2.jpg";
import SkinBrighteningTwo from "../assets/images/Skin Brightening 2.png";
import VitaminCTwo from "../assets/images/Vitamin c 2.jpg";
import HairSerumTwo from "../assets/images/Hair Serum 2.jpg";

const images = [
  AntiAcneTwo,
  MoistureLockTwo,
  NiacinamideLockTwo,
  SalicylicLockTwo,
  SkinBrighteningTwo,
  VitaminCTwo,
  HairSerumTwo,
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex items-center gap-5 px-10 py-5">
      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-[580px]:grid-cols-1 max-[580px]:gap-5 xl:gap-40 md:gap-10 h-screen">
        <div className="flex flex-col gap-2.5">
          <span className="text-2xl font-mono font-bold">About Us</span>
          <div className="flex flex-col gap-2.5 items-start font-mono">
            <span>
              Skin care products are mostly categorized into two: overpriced or
              over-complicated.
            </span>
            <span>
              As such, many consumers sit on the sidelines, left overwhelmed by
              complex chemical compounds, excess choice and a lack of confidence
              when it comes to choosing the right products for optimal skin
              health.
            </span>
            <span>That’s where SCIENTISTRY work.</span>
            <span>
              We create high-performance skin care formulated so that it is easy
              to select, easy to use and effortlessly slots into every skincare
              routine. We formulate every serum with the right percentage of
              active ingredients to deliver targeted results and hydrate and
              soothe the skin.
            </span>
            <span>
              We stand for skincare that works without overwhelming you, your
              skin or your bank account.
            </span>
            <span>
              Central to our skin health mantra is derma innovation that looks
              into the latest insights from skin science to ingredient
              technologies. Listening to the needs of our customers and their
              feedback so we can create targeted serums that address their
              needs; and improving on existing serums based on these insights.
            </span>
            <span>
              On that note you will be pleased to know that we are currently
              working on a number of new products that will build on our current
              range of targeted serums.!
            </span>
          </div>
        </div>
        <div className="slider-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`slide ${index === currentIndex ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
