import React from "react";
import AntiAcneOne from "../assets/images/AntiAcne 1.jpg";
import MoistureLockOne from "../assets/images/Moisture lock 1.jpg";
import NiacinamideOne from "../assets/images/Niacinamide 1.jpg";
import SalicylicOne from "../assets/images/Salicylic 1.jpg";
import SkinBrighteningOne from "../assets/images/Skin Brightening 1.png";
import VitaminCOne from "../assets/images/Vitamin c 1.jpg";
import HairSerumOne from "../assets/images/Hair Serum 1.jpg";
import { Link } from "react-router-dom";

const Product = () => {
  const skinItems = [
    {
      id: "anti-acne",
      name: "Anti Acne Face Serum",
      subname: "3% BICOMIDE Encapsulated Niacinamide",
      image: AntiAcneOne,
    },
    {
      id: "moisture-lock",
      name: "Moisture Lock Hydrating Face Serum",
      subname: "2% HYALURONIC ACID + 1.5% PENTAVITIN",
      image: MoistureLockOne,
    },
    {
      id: "niacinamide",
      name: "Niacinamide Face Serum",
      subname: "10% NIACINAMIDE + 1% HYALURONIC ACID",
      image: NiacinamideOne,
    },
    {
      id: "salicylic",
      name: "Salicylic Acid Face Serum",
      subname: "2% SALICYLIC ACID + 5% APIBREEZE",
      image: SalicylicOne,
    },
    {
      id: "skin-brightening",
      name: "Skin Brightening Face Serum",
      subname: "2% SEPIWHITE + 5% NIACINAMIDE",
      image: SkinBrighteningOne,
    },
    {
      id: "vitamin-c",
      name: "Vitamin C Face Serum",
      subname: "10% ETHYL ASCORBIC ACID",
      image: VitaminCOne,
    },
    {
      id: "hair-serum",
      name: "Revival Hair Density Serum",
      subname: "3% Redensyl + 0.3% Hairgenyl",
      image: HairSerumOne,
    },
  ];

  // const hairItems = [
  //   {
  //     id: "hair-serum",
  //     name: "Revival Hair Density Serum",
  //     subname: "3% Redensyl + 0.3% Hairgenyl",
  //     image: HairSerumOne,
  //   },
  // ];

  return (
    <div className="flex flex-col gap-5">
      <div className="xl:text-3xl max-[580px]:text-lg font-mono font-bold justify-center flex whitespace-nowrap">
        SCIENCE ABOVE EVERY MYTH
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {skinItems.map((item) => (
          <div key={item.id}>
            <Link to={`/product/${item.id}`}>
              <div className="flex flex-col items-center">
                <img src={item.image} alt={item.subname} width={400} />
                <div className="flex flex-col items-center gap-2.5">
                  <span className="text-lg font-mono font-bold">
                    {item.name}
                  </span>
                  <span className="text-base font-mono">{item.subname}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* <div className="text-3xl font-mono font-bold justify-center flex">
        HAIR
      </div> */}
      {/* <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {hairItems.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.subname} />
            <div className="flex flex-col items-center gap-2.5">
              <span className="text-lg font-mono font-bold">{item.name}</span>
              <span className="text-base font-mono">{item.subname}</span>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Product;
