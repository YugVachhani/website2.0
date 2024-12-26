import React, { useEffect, useState } from "react";
import VitaminCOne from "../assets/images/Vitamin c 1.jpg";
import VitaminCTwo from "../assets/images/Vitamin c 2.jpg";
import VitaminCThree from "../assets/images/Vitamin c 3.jpg";
import VitaminCFour from "../assets/images/Vitamin c 4.jpg";
import VitaminCFive from "../assets/images/Vitamin c 5.jpg";
import VitaminCSix from "../assets/images/Vitamin c 7.jpg";
import Flipkart from "../assets/images/Flipkart.svg";
import Amazon from "../assets/images/Amazon.svg";

const images = [VitaminCOne, VitaminCTwo, VitaminCThree, VitaminCFour];

const VitaminCFaceSerum = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const openVitaminCFaceSerumFlipkart = () => {
    window.open(
      "https://www.flipkart.com/scientistry-vitamin-c-face-serum-10-ethyl-ascorbic-acid-young-looking-skin/p/itma3b30ef150340?pid=FRNGHJCUSHNMWGMW&lid=LSTFRNGHJCUSHNMWGMWDCCMPQ&marketplace=FLIPKART&q=scientistry+serum&store=g9b%2Fema%2F5la&srno=s_1_9&otracker=AS_Query_HistoryAutoSuggest_1_11_na_na_na&otracker1=AS_Query_HistoryAutoSuggest_1_11_na_na_na&fm=productRecommendation%2FcrossSelling&iid=89dcddce-a3bb-47e6-8b1a-3f8492b0a140.FRNGHJCUSHNMWGMW.SEARCH&ppt=pp&ppn=pp&ssid=qthfi4ci1c0000001735233016719&qH=d0e196c08aa9eb4a"
    );
  };
  const openVitaminCFaceSerumAmazon = () => {
    window.open(
      "https://www.amazon.in/Scientistry-Face-Serum-Women-Vitamin/dp/B0BRCTD34W?crid=2ONF9G4ZJBM2R&dib=eyJ2IjoiMSJ9.vfTLSQGnWFYV6eYZWWDtT4ws8MpKJ_O-Ruc7w7U0c0xNyVFIXpH2_P7KXDCfqU5Es0zM_Ldu1wpKMJZTxw95vUJmXXem8iqNWiNUxZja8CoczqscUuBw9Bsbto3GcIz0Mg3HJ4D_vyDLZ25IfisZX057Rl8GZdw_c8s6j1mtKcP1PHLOJ0k05oi6u4n1lVN1cEBNQQrP3fP_WUlptTOBSl4ugR7KdnsZvf2cYiBBNHTIGCt-8Cjgy1of0C6nugsYoWIx7z4YxZf-4Yu-r7UH9ziBlQwXxFrieV4dhsg80yA.lfVGfFoV4tH6j3cwM4saajEJSvyxgExK9KwYifmFn0w&dib_tag=se&keywords=scientistry+serum&nsdOptOutParam=true&qid=1735232971&s=beauty&sprefix=SCIENTISTRY%2Cbeauty%2C437&sr=1-11"
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
        <div className="flex flex-col gap-5 items-start max-[580px]:mt-[25rem]">
          <span className="text-2xl font-mono font-bold">
            Vitamin C Face Serum
          </span>
          <span className="text-justify text-base font-mono">
            Scientistry high-quality vitamin C face serums helps you to achieve
            healthy, glowing skin. Our serums are formulated with stable and
            effective forms of vitamin C (Ethyl Ascorbic Acid), which can help
            to brighten and even out skin tone, reduce the appearance of fine
            lines and wrinkles, and protect the skin from environmental damage.
            With regular use, our vitamin C serums can help you achieve a more
            youthful and radiant complexion. We offer serums suitable for all
            skin types, and our products are carefully formulated to ensure
            maximum effectiveness.
          </span>
          <div className="flex flex-col gap-2.5">
            <span className="font-mono">Buy from</span>
            <div className="flex gap-5">
              <img
                src={Flipkart}
                alt="flipkart"
                className="w-8 cursor-pointer"
                onClick={openVitaminCFaceSerumFlipkart}
              />
              <img
                src={Amazon}
                alt="amazon"
                className="w-8 cursor-pointer"
                onClick={openVitaminCFaceSerumAmazon}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-[580px]:grid-cols-1 max-[580px]:gap-5 xl:gap-64 md:gap-10 px-10 max-[580px]:mt-[8rem]">
        <div className="flex flex-col gap-5 items-start">
          <span className="text-2xl font-mono font-bold">You should know</span>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              Made with stabilized Vitamin C derivative "Ethyl Ascorbic Acid"
              which gives brighten and even out skin tone, reduce the appearance
              of dark spots, and protect the skin from environmental damage.
            </li>
          </ul>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              Free from Paraben, Synthetic colour, Fragrance, Ethanol, Silicone,
              Mineral oils and Cruelty free. Formulated at pH 3.5 to 4.5 with
              ET-VC by Corum, Taiwan
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
        <img src={VitaminCSix}></img>
      </div>

      <div className="flex flex-col w-full gap-6 px-10">
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-mono font-bold">
            Skin concerns it targets
          </span>
          <span className="text-base font-mono">
            Dull skin · Dark spots · Uneven tone
          </span>
          <span className="text-base font-mono">Promotes clearer skin</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-2xl font-mono font-bold">Suitable for</span>
          <span className="text-base font-mono">All skin types</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-2xl font-mono font-bold">Highlights</span>
          <span className="text-base font-mono">
            Fragrance free · Mineral Oil Free · Cruelty free
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-2xl font-mono font-bold">pH</span>
          <span className="text-base font-mono">3.5 - 4.5</span>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-[580px]:grid-cols-1 max-[580px]:gap-5 xl:gap-64 md:gap-10 px-10">
        <img src={VitaminCFive}></img>
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
              10% Ethyl Ascorbic Acid (Vitamin C)
            </li>
          </ul>
          <span className="text-justify text-base font-mono list-disc">
            Ethyl ascorbic acid is a stable, derivative of vitamin C. It is an
            effective antioxidant that can help to brighten the skin, reduce the
            appearance of dark spots, and improve overall skin tone. One of the
            benefits of using ethyl ascorbic acid in face serums is that it is
            more stable than traditional forms of vitamin C, such as L-ascorbic
            acid, which can degrade quickly and lose their effectiveness over
            time. This means that products containing ethyl ascorbic acid may
            have a longer shelf life and be more effective at delivering vitamin
            C to the skin.
          </span>
        </div>
      </div>
    </div>
  );
};

export default VitaminCFaceSerum;
