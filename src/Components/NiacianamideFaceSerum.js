import React, { useEffect, useState } from "react";
import NiacinamideLockOne from "../assets/images/Niacinamide 1.jpg";
import NiacinamideLockTwo from "../assets/images/Niacinamide 2.jpg";
import NiacinamideLockThree from "../assets/images/Niacinamide 3.jpg";
import NiacinamideLockFour from "../assets/images/Niacinamide 4.jpg";
import NiacinamideLockFive from "../assets/images/Niacinamide 5.jpg";
import NiacinamideLockSix from "../assets/images/product peach 6.jpg";
import Flipkart from "../assets/images/Flipkart.svg";
import Amazon from "../assets/images/Amazon.svg";

const images = [
  NiacinamideLockOne,
  NiacinamideLockTwo,
  NiacinamideLockThree,
  NiacinamideLockFour,
];

const NiacianamideFaceSerum = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const openNiacianamideFaceSerumFlipkart = () => {
    window.open(
      "https://www.flipkart.com/scientistry-niacinamide-face-serum-10-1-hyaluronic-acid-reduce-blemish/p/itm45b46f2e0408c?pid=FRNGWCTZFDVYTGPY&lid=LSTFRNGWCTZFDVYTGPYBZGLRW&marketplace=FLIPKART&q=scientistry+serum&store=g9b%2Fema%2F5la&srno=s_1_7&otracker=AS_Query_HistoryAutoSuggest_1_11_na_na_na&otracker1=AS_Query_HistoryAutoSuggest_1_11_na_na_na&fm=productRecommendation%2FcrossSelling&iid=89dcddce-a3bb-47e6-8b1a-3f8492b0a140.FRNGWCTZFDVYTGPY.SEARCH&ppt=pp&ppn=pp&ssid=qthfi4ci1c0000001735233016719&qH=d0e196c08aa9eb4a"
    );
  };
  const openNiacianamideFaceSerumAmazon = () => {
    window.open(
      "https://www.amazon.in/Scientistry-Niacinamide-Hyaluronic-Hyperpigmentation-Hydration/dp/B0D2WGFJ8Z?crid=2ONF9G4ZJBM2R&dib=eyJ2IjoiMSJ9.vfTLSQGnWFYV6eYZWWDtT4ws8MpKJ_O-Ruc7w7U0c0xNyVFIXpH2_P7KXDCfqU5Es0zM_Ldu1wpKMJZTxw95vUJmXXem8iqNWiNUxZja8CoczqscUuBw9Bsbto3GcIz0Mg3HJ4D_vyDLZ25IfisZX057Rl8GZdw_c8s6j1mtKcP1PHLOJ0k05oi6u4n1lVN1cEBNQQrP3fP_WUlptTOBSl4ugR7KdnsZvf2cYiBBNHTIGCt-8Cjgy1of0C6nugsYoWIx7z4YxZf-4Yu-r7UH9ziBlQwXxFrieV4dhsg80yA.lfVGfFoV4tH6j3cwM4saajEJSvyxgExK9KwYifmFn0w&dib_tag=se&keywords=scientistry+serum&nsdOptOutParam=true&qid=1735232971&s=beauty&sprefix=SCIENTISTRY%2Cbeauty%2C437&sr=1-6"
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
            Niacinamide Face Serum
          </span>
          <span className="text-justify text-base font-mono">
            Introducing our Niacinamide Face Serum with 10% Niacinamide and 1%
            Hyaluronic Acid - a powerful combination designed to enhance your
            skin's texture and hydration for a smoother, more radiant
            complexion. Our serum contains 10% Niacinamide, known for its
            ability to improve skin tone and reduce the appearance of pores, and
            1% Hyaluronic Acid, which provides deep, lasting hydration.
          </span>
          <span className="text-justify text-base font-mono">
            Together, these ingredients work to minimize the appearance of fine
            lines, even out skin tone, and boost overall skin health. This
            lightweight, fast-absorbing serum is suitable for all skin types and
            can be used daily as part of your skincare routine. With regular
            use, you can expect to see improved skin texture, increased
            hydration, and a more youthful, glowing complexion.
          </span>
          <div className="flex flex-col gap-2.5">
            <span className="font-mono">Buy from</span>
            <div className="flex gap-5">
              <img
                src={Flipkart}
                alt="flipkart"
                className="w-8 cursor-pointer"
                onClick={openNiacianamideFaceSerumFlipkart}
              />
              <img
                src={Amazon}
                alt="amazon"
                className="w-8 cursor-pointer"
                onClick={openNiacianamideFaceSerumAmazon}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-[580px]:grid-cols-1 max-[580px]:gap-5 xl:gap-64 md:gap-10 px-10 max-[580px]:mt-[18rem]">
        <div className="flex flex-col gap-5 items-start">
          <span className="text-2xl font-mono font-bold">You should know</span>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              Scientistry Niacinamide Serum is your one-stop solution for
              improving skin texture and hydration. The synergistic combination
              of 10% Niacinamide and 1% Hyaluronic Acid works to enhance your
              skin's appearance by targeting multiple aspects of skin
              health.Niacinamide helps to even out skin tone and reduce the
              appearance of pores, while Hyaluronic Acid provides deep and
              lasting hydration. Apply during the day and night twice daily for
              maximum results. With regular use, you can expect a smoother, more
              radiant complexion.
            </li>
          </ul>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              Free from Paraben, Synthetic colour, Fragrance, Ethanol, Silicone,
              Mineral oils and Cruelty free. Formulated at pH 5.0 to 6.0 with
              Niacinamide and Hyaluronic acid.
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
        <img src={NiacinamideLockSix}></img>
      </div>

      <div className="flex flex-col w-full gap-6 px-10">
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-mono font-bold">Benifits</span>
          <span className="text-base font-mono">Lightens dark spots</span>
          <span className="text-base font-mono">Improves skin texture</span>
          <span className="text-base font-mono">Hydrates skin</span>
          <span className="text-base font-mono">For all skin types.</span>
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
          <span className="text-base font-mono">5.0 to 6.0</span>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-[580px]:grid-cols-1 max-[580px]:gap-5 xl:gap-64 md:gap-10 px-10">
        <img src={NiacinamideLockFive}></img>
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
            <li className="font-bold text-lg">10% NIACINAMIDE</li>
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
          <ul className="text-justify text-base font-mono list-disc">
            <li className="font-bold text-lg">1% Hyaluronic acid</li>
          </ul>
          <span className="text-justify text-base font-mono list-disc">
            Hyaluronic acid has the ability to hold up to 1,000 times its weight
            in water, making it an excellent hydrating ingredient. When applied
            to the skin, it helps to lock in moisture and prevent dehydration,
            which can lead to dryness, flakiness, and dullness. As we age, our
            skin loses its natural moisture retention capacity, which can
            contribute to the formation of wrinkles and fine lines. By
            replenishing the skin's moisture level, hyaluronic acid can help to
            reduce the appearance of these signs of aging. Hyaluronic acid is
            also believed to boost the skin's elasticity by increasing collagen
            production. This can help to improve skin firmness and reduce the
            appearance of sagging or drooping skin.his helps to improve the
            skin's overall health and resilience.
          </span>
        </div>
      </div>
    </div>
  );
};

export default NiacianamideFaceSerum;
