import React, { useEffect, useState } from "react";
import AntiAcneOne from "../assets/images/AntiAcne 1.jpg";
import AntiAcneTwo from "../assets/images/AntiAcne 2.jpg";
import AntiAcneThree from "../assets/images/AntiAcne 3.jpg";
import AntiAcneFour from "../assets/images/AntiAcne 4.jpg";
import AntiAcneFive from "../assets/images/AntiAcne 5.jpg";
import AntiAcneSeven from "../assets/images/AntiAcne 7.jpg";
import Flipkart from "../assets/images/Flipkart.svg";
import Amazon from "../assets/images/Amazon.svg";
import "./style.css";

const images = [
  AntiAcneOne,
  AntiAcneTwo,
  AntiAcneThree,
  AntiAcneFour,
  AntiAcneFive,
  AntiAcneSeven,
];

const AntiAnceFaceSerum = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const openAntiAnceFaceSerumFlipkart = () => {
    window.open(
      "https://www.flipkart.com/scientistry-anti-acne-serum-encapsulated-niacinamide-minimizes-pore-clear/p/itm57eb107494295?pid=FRNGYZZEZ8CBMRJR&lid=LSTFRNGYZZEZ8CBMRJRK4U8XU&marketplace=FLIPKART&q=scientistry+serum&store=g9b%2Fema%2F5la&srno=s_1_7&otracker=AS_Query_HistoryAutoSuggest_1_11_na_na_na&otracker1=AS_Query_HistoryAutoSuggest_1_11_na_na_na&fm=search-autosuggest&iid=247163d9-d3d6-4905-a5df-f4eb991a507e.FRNGYZZEZ8CBMRJR.SEARCH&ppt=sp&ppn=sp&ssid=bh227dabi80000001735232448687&qH=d0e196c08aa9eb4a"
    );
  };
  const openAntiAnceFaceSerumAmazon = () => {
    window.open(
      "https://www.amazon.in/Scientistry-Face-Serum-Women-Anti-Acne/dp/B0BRCPHX8W?crid=2PDPOCJU4HCXT&dib=eyJ2IjoiMSJ9.vfTLSQGnWFYV6eYZWWDtTxvKnNyEkc-gnyL2cEEo3EMpXqKIbSaLKcwR4v2wP_Sas0zM_Ldu1wpKMJZTxw95vUJmXXem8iqNWiNUxZja8CoczqscUuBw9Bsbto3GcIz0Mg3HJ4D_vyDLZ25IfisZX057Rl8GZdw_c8s6j1mtKcP1PHLOJ0k05oi6u4n1lVN1cEBNQQrP3fP_WUlptTOBSl4ugR7KdnsZvf2cYiBBNHTIGCt-8Cjgy1of0C6nugsYoWIx7z4YxZf-4Yu-r7UH9ziBlQwXxFrieV4dhsg80yA.ZGwg1qy4xW_p8KtWpd9BnM0gXiuoCoAME_Afif_tfhE&dib_tag=se&keywords=scientistry+serum&nsdOptOutParam=true&qid=1735232585&sprefix=scientistry+%2Caps%2C275&sr=8-12"
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
            Anti Ance Face Serum
          </span>
          <span className="text-justify text-base font-mono">
            Are you tired of battling acne breakouts and looking for an
            effective solution? Look no further than Scientistry anti-acne serum
            containing bicomide sebum control.Scientistry anti acne serum is
            specially formulated to target the root cause of acne breakouts –
            excess sebum production. Bicomide sebum control is a powerful active
            ingredient that helps regulate sebum production, preventing clogged
            pores and reducing the occurrence of acne. But that's not all – our
            serum is also reduce acne causing bacteria, unclog pores, and
            improve skin texture. With regular use, you'll notice a visible
            reduction in acne breakouts, as well as an overall improvement in
            the appearance and health of your skin. Our anti-acne serum is
            suitable for all skin types and can be used as part of your daily
            skincare routine. Simply apply a small amount of serum to clean, dry
            skin and gently massage until absorbed. Use morning and night for
            best results. At SCIENTISTRY, we are committed to using only the
            highest quality ingredients in our skincare products. Say goodbye to
            acne breakouts and hello to clear, radiant skin with our anti-acne
            serum containing bicomide sebum control.
          </span>
          <div className="flex flex-col gap-2.5">
            <span className="font-mono">Buy from</span>
            <div className="flex gap-5">
              <img
                src={Flipkart}
                alt="flipkart"
                className="w-8 cursor-pointer"
                onClick={openAntiAnceFaceSerumFlipkart}
              />
              <img
                src={Amazon}
                alt="amazon"
                className="w-8 cursor-pointer"
                onClick={openAntiAnceFaceSerumAmazon}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-[580px]:grid-cols-1 max-[580px]:gap-5 xl:gap-64 md:gap-10 px-10 max-[580px]:mt-[36rem]">
        <div className="flex flex-col gap-5 items-start">
          <span className="text-2xl font-mono font-bold">You should know</span>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              BICOMIDE - NIACINAMIDE DELIVERY SYSTEM. Bicomide is a part of
              Bicosome technology, which provide double encapsulation to protect
              actives, designed to deliver active ingredients to specific skin
              layers and targeted delivery without damaging the skin. Bicomide
              is specially developed for oily acne prone skin. Bicomide
              regulates the sebum production at source, reducing large pores and
              the shiny effect. It also equilibrating the microbiome and
              promoting a cleaning up effect on acne prone skin..
            </li>
          </ul>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              BALANCE SEBUM AND REDUCE OPEN PORES. It gives matt look throughout
              day by reducing sebum production. Daily usage results into
              improved skin texture with reduction in visible pores and active
              acne.
            </li>
          </ul>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              BLUE LIGHT PROTECTION. Most electronic gadgets like mobile and
              laptop screen emits high energy visible light which is known as
              "blue light". Blue light may weaken the epidermal barrier
              function. Bicomide protect your skin from negative effect of Blue
              light.
            </li>
          </ul>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              Free from Paraben, Synthetic colour, Fragrance, Ethanol, Silicone,
              Mineral oils and Cruelty free. Formulated at pH 5.0 to 6.0 with
              Bicomide by Bicosome, Spain.
            </li>
          </ul>
        </div>
        <img src={AntiAcneSeven}></img>
      </div>

      <div className="flex flex-col w-full gap-6 px-10">
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-mono font-bold">Benifits</span>
          <span className="text-base font-mono">Acne Control</span>
          <span className="text-base font-mono">Reduce sebum</span>
          <span className="text-base font-mono">Pore Reduction</span>
          <span className="text-base font-mono">Blue Light PROTECTION</span>
          <span className="text-base font-mono">Deep Skin Penitration</span>
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
          <span className="text-base font-mono">5.0 - 6.0</span>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-[580px]:grid-cols-1 max-[580px]:gap-5 xl:gap-64 md:gap-10 px-10">
        <img src={AntiAcneFive}></img>
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
          <span className="text-justify text-base font-mono list-disc">
            3% BICOMIDE SEBUM CONTROL (Niacinamide Delivery System)
          </span>
          <span className="text-justify text-base font-mono list-disc">
            Bicosome technology is a breakthrough skincare technology that
            utilizes biocompatible liposomes to deliver active ingredients deep
            into the skin. Liposomes are microscopic vesicles that are composed
            of phospholipids, which are natural substances found in our skin.
            Bicosome technology harnesses the power of liposomes to enhance the
            delivery of active ingredients, allowing them to penetrate the skin
            more deeply and effectively.
          </span>
          <span className="text-justify text-base font-mono list-disc">
            Bicomide sebum control is specifically designed to regulate sebum
            production in the skin. Bicomide sebum control helps to prevent
            excess sebum from being produced, reducing the occurrence of clogged
            pores and acne breakouts. In addition to regulating sebum
            production, bicomide sebum control also helps to soothe inflammation
            and improve skin texture.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AntiAnceFaceSerum;
