import React, { useEffect, useState } from "react";
import SalicylicLockOne from "../assets/images/Salicylic 1.jpg";
import SalicylicLockTwo from "../assets/images/Salicylic 2.jpg";
import SalicylicLockOThree from "../assets/images/Salicylic 3.jpg";
import SalicylicLockFour from "../assets/images/Salicylic 4.jpg";
import SalicylicLockFive from "../assets/images/Salicylic 5.jpg";
import SalicylicLockSix from "../assets/images/Salicylic 7.jpg";
import Flipkart from "../assets/images/Flipkart.svg";
import Amazon from "../assets/images/Amazon.svg";

const images = [
  SalicylicLockOne,
  SalicylicLockTwo,
  SalicylicLockOThree,
  SalicylicLockFour,
];

const SalicylicAcidSerum = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const openSalicylicAcidSerumFlipkart = () => {
    window.open(
      "https://www.flipkart.com/scientistry-2-salicylic-serum-powered-5-apibreeze-oily-acne-prone-skin/p/itm1a7383adab59b?pid=BSTGWCURYZRXQGSS&lid=LSTBSTGWCURYZRXQGSSUBPINY&marketplace=FLIPKART&q=scientistry+serum&store=g9b%2Fema%2F5la&srno=s_1_4&otracker=AS_Query_HistoryAutoSuggest_1_11_na_na_na&otracker1=AS_Query_HistoryAutoSuggest_1_11_na_na_na&fm=productRecommendation%2FcrossSelling&iid=89dcddce-a3bb-47e6-8b1a-3f8492b0a140.BSTGWCURYZRXQGSS.SEARCH&ppt=pp&ppn=pp&ssid=qthfi4ci1c0000001735233016719&qH=d0e196c08aa9eb4a"
    );
  };
  const openSalicylicAcidSerumAmazon = () => {
    window.open(
      "https://www.amazon.in/Scientistry-Salicylic-Serum-Apibreeze-Pimple/dp/B0D2WCW1RJ?crid=2ONF9G4ZJBM2R&dib=eyJ2IjoiMSJ9.vfTLSQGnWFYV6eYZWWDtT4ws8MpKJ_O-Ruc7w7U0c0xNyVFIXpH2_P7KXDCfqU5Es0zM_Ldu1wpKMJZTxw95vUJmXXem8iqNWiNUxZja8CoczqscUuBw9Bsbto3GcIz0Mg3HJ4D_vyDLZ25IfisZX057Rl8GZdw_c8s6j1mtKcP1PHLOJ0k05oi6u4n1lVN1cEBNQQrP3fP_WUlptTOBSl4ugR7KdnsZvf2cYiBBNHTIGCt-8Cjgy1of0C6nugsYoWIx7z4YxZf-4Yu-r7UH9ziBlQwXxFrieV4dhsg80yA.lfVGfFoV4tH6j3cwM4saajEJSvyxgExK9KwYifmFn0w&dib_tag=se&keywords=scientistry+serum&nsdOptOutParam=true&qid=1735232971&s=beauty&sprefix=SCIENTISTRY%2Cbeauty%2C437&sr=1-7"
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
            Salicylic Acid Face Serum
          </span>
          <span className="text-justify text-base font-mono">
            Introducing our Salicylic Acid Face Serum with Apibreeze - the
            ultimate solution for acne-prone, oily skin. This potent formulation
            combines Salicylic Acid, a renowned beta hydroxy acid (BHA), with
            Apibreeze, an innovative active which contains PHA and honey known
            for exfoliating and soothing properties.
          </span>
          <span className="text-justify text-base font-mono">
            Our serum harnesses the power of Salicylic Acid to deeply penetrate
            pores, effectively exfoliating and unclogging them to prevent
            breakouts and reduce excess oil. Apibreeze works synergistically to
            calm and soothe the skin, reducing inflammation and irritation
            associated with acne.
          </span>
          <span className="text-justify text-base font-mono">
            Together, these ingredients target blemishes, blackheads, and
            enlarged pores, promoting a clearer, smoother complexion. This
            lightweight, fast-absorbing serum is suitable for daily use and
            seamlessly integrates into your skincare routine. With consistent
            application, you can expect a reduction in acne and oiliness,
            leading to healthier, more balanced skin.
          </span>
          <div className="flex flex-col gap-2.5">
            <span className="font-mono">Buy from</span>
            <div className="flex gap-5">
              <img
                src={Flipkart}
                alt="flipkart"
                className="w-8 cursor-pointer"
                onClick={openSalicylicAcidSerumFlipkart}
              />
              <img
                src={Amazon}
                alt="amazon"
                className="w-8 cursor-pointer"
                onClick={openSalicylicAcidSerumAmazon}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-[580px]:grid-cols-1 max-[580px]:gap-5 xl:gap-64 md:gap-10 px-10 max-[580px]:mt-[32rem]">
        <div className="flex flex-col gap-5 items-start">
          <span className="text-2xl font-mono font-bold">You should know</span>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              Scientistry Salicylic Acid Face Serum is the ultimate solution for
              your acne-prone, oily skin. The synergistic combination of
              Salicylic Acid and Apibreeze effectively targets acne and excess
              oil, ensuring a clearer and more balanced complexion.Salicylic
              Acid penetrates deeply to exfoliate and unclog pores, while
              Apibreeze soothes and calms the skin, reducing inflammation and
              irritation. Apply during the day and night twice daily for maximum
              results. Embrace healthier, smoother skin with Scientistry
              Salicylic Acid Face Serum.
            </li>
          </ul>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              Free from Paraben, Synthetic colour, Fragrance, Ethanol, Silicone,
              Mineral oils and Cruelty free. Formulated at pH 3.5 to 4.0 with
              Salicylic acid and Apibreeze.
            </li>
          </ul>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              It is suitable for Oily acne prone Skin. Formulated for men and
              women looking for the solution of acne and oily skin.
            </li>
          </ul>
        </div>
        <img src={SalicylicLockSix}></img>
      </div>

      <div className="flex flex-col w-full gap-6 px-10">
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-mono font-bold">Benifits</span>
          <span className="text-base font-mono">Prevents acne breakouts</span>
          <span className="text-base font-mono">Promotes clearer skin</span>
          <span className="text-base font-mono">Treats clogged pores</span>
          <span className="text-base font-mono">Removes black heads</span>
          <span className="text-base font-mono">Removes whiteheads</span>
          <span className="text-base font-mono">Controls excess Oil</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-2xl font-mono font-bold">Suitable for</span>
          <span className="text-base font-mono">Oliy acne prone skin.</span>
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
          <span className="text-base font-mono">3.5 - 4.0</span>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-[580px]:grid-cols-1 max-[580px]:gap-5 xl:gap-64 md:gap-10 px-10">
        <img src={SalicylicLockFive}></img>
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
            <li className="font-bold text-lg">SALICYLIC ACID</li>
          </ul>
          <span className="text-justify text-base font-mono list-disc">
            2% SALICYLIC ACID- SALICYLIC SUPERIORITY Salicylic acid’s proven
            ability to as BHA exfoliate, unclog pores, and reduce inflammation
            makes it a standout solution for tackling acne-related concerns
            effectively. Thus is works great for maintaining blemish-free skin,
            removing acne and preventing blackheads and white heads.
          </span>
          <ul className="text-justify text-base font-mono list-disc">
            <li className="font-bold text-lg">5% APIBREEZE</li>
          </ul>
          <span className="text-justify text-base font-mono list-disc">
            APIBREEZE HARMONY Apibreeze, a proprietary blend enriched with PHA
            (Polyhydroxy Acid) and honey, complements the acne-fighting prowess
            of Salicylic Acid. Apibreeze with goodness of PHA and honey, soothe,
            hydrate, and exfoliate your skin. Gently exfoliation by Apibreeze,
            making it perfect for sensitive skin. Unlike strong exfoliators like
            glycolic acid, which can be too intense for sensitive acne prone
            skin. Infused with honey, it adds a touch of natural nourishment and
            hydration.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SalicylicAcidSerum;
