import React, { useEffect, useState } from "react";
import SkinBrighteningOne from "../assets/images/Skin Brightening 1.png";
import SkinBrighteningTwo from "../assets/images/Skin Brightening 2.png";
import SkinBrighteningThree from "../assets/images/Skin Brightening 3.png";
import SkinBrighteningFour from "../assets/images/Skin Brightening 4.png";
import SkinBrighteningFive from "../assets/images/Skin Brightening 5.png";
import SkinBrighteningSix from "../assets/images/Skin Brightening 7.jpg";
import Flipkart from "../assets/images/Flipkart.svg";
import Amazon from "../assets/images/Amazon.svg";

const images = [
  SkinBrighteningOne,
  SkinBrighteningTwo,
  SkinBrighteningThree,
  SkinBrighteningFour,
];

const SkinBrighteningFaceSerum = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const openSkinBrighteningFaceSerumFlipkart = () => {
    window.open(
      "https://www.flipkart.com/scientistry-brightening-face-serum-2-sepiwhite-5-niacinamide-glowing-skin/p/itmf6bf186df930e?pid=FRNGKKCKWCURA4G3&lid=LSTFRNGKKCKWCURA4G3ROQB2G&marketplace=FLIPKART&q=scientistry+serum&store=g9b%2Fema%2F5la&srno=s_1_3&otracker=AS_Query_HistoryAutoSuggest_1_11_na_na_na&otracker1=AS_Query_HistoryAutoSuggest_1_11_na_na_na&fm=productRecommendation%2FcrossSelling&iid=89dcddce-a3bb-47e6-8b1a-3f8492b0a140.FRNGKKCKWCURA4G3.SEARCH&ppt=pp&ppn=pp&ssid=qthfi4ci1c0000001735233016719&qH=d0e196c08aa9eb4a"
    );
  };
  const openSkinBrighteningFaceSerumAmazon = () => {
    window.open(
      "https://www.amazon.in/Scientistry-Brightening-Exfoliates-Brightens-Pigmentation/dp/B0BRCR684H?crid=2ONF9G4ZJBM2R&dib=eyJ2IjoiMSJ9.vfTLSQGnWFYV6eYZWWDtT4ws8MpKJ_O-Ruc7w7U0c0xNyVFIXpH2_P7KXDCfqU5Es0zM_Ldu1wpKMJZTxw95vUJmXXem8iqNWiNUxZja8CoczqscUuBw9Bsbto3GcIz0Mg3HJ4D_vyDLZ25IfisZX057Rl8GZdw_c8s6j1mtKcP1PHLOJ0k05oi6u4n1lVN1cEBNQQrP3fP_WUlptTOBSl4ugR7KdnsZvf2cYiBBNHTIGCt-8Cjgy1of0C6nugsYoWIx7z4YxZf-4Yu-r7UH9ziBlQwXxFrieV4dhsg80yA.lfVGfFoV4tH6j3cwM4saajEJSvyxgExK9KwYifmFn0w&dib_tag=se&keywords=scientistry+serum&nsdOptOutParam=true&qid=1735232971&s=beauty&sprefix=SCIENTISTRY%2Cbeauty%2C437&sr=1-10"
    );
  };

  return (
    <div className="flex flex-col items-center gap-5 py-5">
      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-[580px]:grid-cols-1 max-[580px]:gap-5 xl:gap-64 md:gap-10 px-10 h-screen">
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
        <div className="flex flex-col gap-5 items-start  max-[580px]:mt-[25rem]">
          <span className="text-2xl font-mono font-bold">
            Skin Brightening Face Serum
          </span>
          <span className="text-justify text-base font-mono">
            Introducing our skin brightening face serum with Sepiwhite and
            Niacinamide - a powerful combination that targets dark spots and
            uneven skin tone for a brighter, more radiant complexion.Our serum
            contains Sepiwhite, a patented skin brightening agent that helps to
            reduce melanin production, and Niacinamide, that helps to improve
            skin texture and tone.
          </span>
          <span className="text-justify text-base font-mono">
            Together, these ingredients work to reduce the appearance of
            hyperpigmentation and improve overall skin health.This lightweight,
            fast-absorbing serum is suitable for all skin types and can be used
            daily as part of your skincare routine. With regular use, you can
            expect to see a reduction in the appearance of dark spots and a more
            even skin tone.
          </span>
          <div className="flex flex-col gap-2.5">
            <span className="font-mono">Buy from</span>
            <div className="flex gap-5">
              <img
                src={Flipkart}
                alt="flipkart"
                className="w-8 cursor-pointer"
                onClick={openSkinBrighteningFaceSerumFlipkart}
              />
              <img
                src={Amazon}
                alt="amazon"
                className="w-8 cursor-pointer"
                onClick={openSkinBrighteningFaceSerumAmazon}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-[580px]:grid-cols-1 max-[580px]:gap-5 xl:gap-64 md:gap-10 px-10 max-[580px]:mt-[20rem]">
        <div className="flex flex-col gap-5 items-start">
          <span className="text-2xl font-mono font-bold">You should know</span>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              Scientistry Skin Brightening serum is one stop solution for your
              blemished and uneven skin. Synergistic combination of sepiwhite
              and Niacinamide gives brighter skin tone by targeting at multiple
              sight of melanin synthesis pathway. Apply during the day and night
              twice daily for maximum result.
            </li>
          </ul>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              Free from Paraben, Synthetic colour, Fragrance, Ethanol, Silicone,
              Mineral oils and Cruelty free. Formulated at pH 6.0 to 7.0 with
              Sepiwhite by Seppic, France.
            </li>
          </ul>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              It is suitable for Dry, Normal, Oily and Combination Skin.
              Formulated for men and women looking for the solution of dark
              spot, uneven skintone and dullness.
            </li>
          </ul>
        </div>
        <img src={SkinBrighteningSix}></img>
      </div>

      <div className="flex flex-col w-full gap-6 px-10">
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-mono font-bold">Benifits</span>
          <span className="text-base font-mono">Reduce dark spots</span>
          <span className="text-base font-mono">Even out skin tone</span>
          <span className="text-base font-mono">Brightens skin</span>
          <span className="text-base font-mono">Radiates complexion</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-2xl font-mono font-bold">Suitable for</span>
          <span className="text-base font-mono">All skin types</span>
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
          <span className="text-base font-mono">6.0 - 7.0</span>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-[580px]:grid-cols-1 max-[580px]:gap-5 xl:gap-64 md:gap-10 px-10">
        <img src={SkinBrighteningFive}></img>
        <div className="flex flex-col gap-5 items-start">
          <span className="text-2xl font-mono font-bold">How To Use</span>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              Cleanse your skin: Start by cleansing your face with a gentle
              cleanser to remove any dirt, oil, or makeup from your skin. This
              will help to prepare your skin for the serum and ensure that it
              can penetrate deeply into the skin.
            </li>
          </ul>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              Apply the serum: Take a small amount of serum in your palm or on
              your fingertips and apply it to your face and neck, avoiding the
              eye area. Gently massage the serum into your skin in circular
              motions until it is fully absorbed.
            </li>
          </ul>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              Wait for it to absorb: Allow the serum to fully absorb into your
              skin before applying any other products, such as moisturizer or
              sunscreen. This can take a few minutes, but you can speed up the
              process by lightly tapping your skin with your fingertips.
            </li>
          </ul>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-[580px]:grid-cols-1 max-[580px]:gap-5 xl:gap-64 md:gap-10 px-10">
        <div className="flex flex-col gap-5 items-start">
          <span className="text-2xl font-mono font-bold">Ingredients</span>
          <ul className="text-justify text-base font-mono list-disc">
            <li className="font-bold text-lg">
              SEPIWHITE(Undecylenoyl Phenylalanine)
            </li>
          </ul>
          <span className="text-justify text-base font-mono list-disc">
            2% SEPIWHITE- VICTORY FOR TONED COMPLEXION. Sepiwhite is a
            lipoaminoacid or vectorized essential amino acid developed from
            phenylalanine, an amino acid involved in melanin synthesis.
            Sepiwhite is an excellent skin lightener and brightener suitable for
            all skin types and ethnicities that promotes a more uniform and
            radiant complexion. Studies have demonstrated an increase in skin
            luminosity and decrease in the number and color of hyperpigmented
            spots. Sepiwhite is a patented ingredient developed by Seppic,
            France.
          </span>
          <ul className="text-justify text-base font-mono list-disc">
            <li className="font-bold text-lg">5% NIACINAMIDE</li>
          </ul>
          <span className="text-justify text-base font-mono list-disc">
            Niacinamide is the active form of Vitamin B3. This potent ingredient
            is known to help improve the appearance of enlarged pores, uneven
            skin tone, and dullness. Niacinamide can also help to strengthen the
            skin's barrier function, keeping it hydrated and protected from
            environmental stressors. With its many benefits, it's no wonder that
            niacinamide has become a go-to ingredient for many skincare
            enthusiasts.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkinBrighteningFaceSerum;
