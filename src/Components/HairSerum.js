import React, { useEffect, useState } from "react";
import HairOne from "../assets/images/Hair Serum 1.jpg";
import HairTwo from "../assets/images/Hair Serum 2.jpg";
import HairThree from "../assets/images/Hair Serum 3.png";
import HairFour from "../assets/images/Hair Serum 4.jpg";
import HairFive from "../assets/images/Hair Serum 5.jpg";
import HairSeven from "../assets/images/Hair Serum 7.jpg";
import Flipkart from "../assets/images/Flipkart.svg";
import Amazon from "../assets/images/Amazon.svg";
import "./style.css";

const images = [HairOne, HairTwo, HairThree, HairFour, HairFive, HairSeven];

const AntiAnceFaceSerum = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const openRevivalHairDensitySerumFlipkart = () => {
    window.open(
      "https://www.flipkart.com/scientistry-3-redensyl-0-3-hairgenyl-hair-serum-promote-growth-prevent-hairfall/p/itm612b08794db9c"
    );
  };
  const openRevivalHairDensitySerumAmazon = () => {
    window.open(
      "https://www.amazon.in/Scientistry-Redensyl-Hairgenyl-Increase-Stimulate/dp/B0DCC1WDY8?crid=2ONF9G4ZJBM2R&dib=eyJ2IjoiMSJ9.vfTLSQGnWFYV6eYZWWDtT4ws8MpKJ_O-Ruc7w7U0c0xNyVFIXpH2_P7KXDCfqU5Es0zM_Ldu1wpKMJZTxw95vUJmXXem8iqNWiNUxZja8CoczqscUuBw9Bsbto3GcIz0Mg3HJ4D_vyDLZ25IfisZX057Rl8GZdw_c8s6j1mtKcP1PHLOJ0k05oi6u4n1lVN1cEBNQQrP3fP_WUlptTOBSl4ugR7KdnsZvf2cYiBBNHTIGCt-8Cjgy1of0C6nugsYoWIx7z4YxZf-4Yu-r7UH9ziBlQwXxFrieV4dhsg80yA.lfVGfFoV4tH6j3cwM4saajEJSvyxgExK9KwYifmFn0w&dib_tag=se&keywords=scientistry+serum&nsdOptOutParam=true&qid=1735232971&s=beauty&sprefix=SCIENTISTRY%2Cbeauty%2C437&sr=1-5"
    );
  };

  return (
    <div className="flex flex-col items-center gap-5 py-5">
      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-[580px]:grid-cols-1 max-[580px]:gap-52 xl:gap-64 md:gap-10 px-10 h-screen">
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
        <div className="flex flex-col gap-5 items-start max-[580px]:mt-[10rem]">
          <span className="text-2xl font-mono font-bold">
            Revival Hair Density Serum
          </span>
          <span className="text-justify text-base font-mono">
            Are you tired of battling hair fall and searching for an effective
            solution? Look no further than Scientistry Hair Serum, enriched with
            3% Redensyl and 0.3% Hairgenyl. Scientistry Hair Serum is
            scientifically formulated to target the root causes of hair fall
            while promoting thicker, healthier hair. Redensyl is a powerful
            active ingredient that works to stimulate hair follicles, reducing
            hair fall and encouraging regrowth. Hairgenyl, another potent
            component, nourishes and revitalizes the scalp, improving overall
            hair density and vitality. But that’s not all – our serum also helps
            strengthen hair strands, improving their texture and resilience over
            time. With regular use, you’ll notice reduced hair fall, enhanced
            hair density, and visibly healthier, fuller hair. Suitable for all
            hair types, our serum seamlessly integrates into your daily haircare
            routine. Simply apply a small amount to your scalp, gently massage
            in circular motions, and leave it to work its magic. Use
            consistently in the morning and at night for optimal results. At
            SCIENTISTRY, we are committed to using only the highest quality
            ingredients in our products. Say goodbye to hair fall and hello to
            strong, voluminous hair with our Hair Serum containing 3% Redensyl
            and 0.3% Hairgenyl.
          </span>
          <div className="flex flex-col gap-2.5">
            <span className="font-mono">Buy from</span>
            <div className="flex gap-5">
              <img
                src={Flipkart}
                alt="flipkart"
                className="w-8 cursor-pointer"
                onClick={openRevivalHairDensitySerumFlipkart}
              />
              <img
                src={Amazon}
                alt="amazon"
                className="w-8 cursor-pointer"
                onClick={openRevivalHairDensitySerumAmazon}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-[580px]:grid-cols-1 max-[580px]:gap-5 xl:gap-64 md:gap-10 px-10 max-[580px]:mt-[42rem]">
        <div className="flex flex-col gap-5 items-start">
          <span className="text-2xl font-mono font-bold">You should know</span>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              Scientistry Hair Serum reduces hair fall by strengthening the hair
              from its roots. It improves scalp health, reactivates dormant hair
              follicles, and stimulates the natural growth cycle for fuller,
              healthier-looking hair.
            </li>
          </ul>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              Regular use visibly increases hair density and enhances its
              strength and resilience. Hair appears smoother, shinier, and more
              manageable with continued application. acne.
            </li>
          </ul>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              This serum is free from parabens, synthetic colors, fragrances,
              ethanol, silicones, mineral oils, and is cruelty-free. Scientistry
              Hair Serum is formulated to be safe and effective for all hair
              types.
            </li>
          </ul>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              Scientistry Hair Serum is non-greasy and easy to incorporate into
              your daily routine. Apply a few drops directly to the scalp,
              massage gently, and let it absorb. No rinsing is required.
            </li>
          </ul>
        </div>
        <img src={HairSeven}></img>
      </div>

      <div className="flex flex-col w-full gap-6 px-10">
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-mono font-bold">Benifits</span>
          <span className="text-base font-mono">Reduces Hairfall</span>
          <span className="text-base font-mono">Stimulates Hair Groth</span>
          <span className="text-base font-mono">For all Hair Types</span>
          <span className="text-base font-mono">Boosts Hair Density</span>
          <span className="text-base font-mono">Prevents Hair Thinning</span>
          <span className="text-base font-mono">Gender Neutral</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-2xl font-mono font-bold">Suitable for</span>
          <span className="text-base font-mono">All Hair types</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-2xl font-mono font-bold">Highlights</span>
          <span className="text-base font-mono">
            Fragrance free · Ethanol free . Silicone free. Paraben free.
          </span>
          <span className="text-base font-mono">
            Mineral oil free. Cruelty free
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-2xl font-mono font-bold">pH</span>
          <span className="text-base font-mono">5.0 - 6.0</span>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-[580px]:grid-cols-1 max-[580px]:gap-5 xl:gap-64 md:gap-10 px-10">
        <img src={HairFive}></img>
        <div className="flex flex-col gap-5 items-start">
          <span className="text-2xl font-mono font-bold">How To Use</span>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              <div className="flex flex-col">
                <span>Apply the Serum:</span>
                <span>
                  Apply serum on a clean scalp directly with dropper with
                  focusing on areas.
                </span>
              </div>
            </li>
          </ul>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              <div className="flex flex-col">
                <span>Massage Gently:</span>
                <span>
                  Using your fingertips, gently massage the serum into your
                  scalp in circular motions. Ensure the serum is evenly
                  distributed, focusing on areas with thinning or weak hair.
                </span>
              </div>
            </li>
          </ul>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              <div className="flex flex-col">
                <span>Do Not Rinse:</span>
                <span>
                  Allow the serum to absorb into your scalp without rinsing. It
                  is a leave-in treatment designed to work continuously.
                </span>
              </div>
            </li>
          </ul>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              <div className="flex flex-col">
                <span>Use Regularly:</span>
                <span>
                  Apply the serum daily, preferably in the morning and at night,
                  for best results. Consistent use will maximize the serum's
                  benefits for reducing hair fall, improving density, and
                  promoting hair growth.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-[580px]:grid-cols-1 max-[580px]:gap-5 xl:gap-64 md:gap-10 px-10">
        <div className="flex flex-col gap-5 items-start">
          <span className="text-2xl font-mono font-bold">Ingredients</span>
          <span className="text-justify text-base font-mono list-disc">
            3% REDENSYL
          </span>
          <span className="text-justify text-base font-mono list-disc">
            Redensyl is a breakthrough hair care active that targets the hair
            follicle's stem cells, stimulating their regeneration and
            encouraging new hair growth. It works by reactivating dormant
            follicles and reducing hair fall, resulting in denser, healthier
            hair over time.
          </span>
          <span className="text-justify text-base font-mono list-disc">
            0.3% HAIRGENYL
          </span>
          <span className="text-justify text-base font-mono list-disc">
            Hairgenyl enhances the hair structure by nourishing and
            strengthening hair at the root. It revitalizes the scalp and
            restores balance, promoting visible improvements in hair density and
            thickness while minimizing breakage.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AntiAnceFaceSerum;
