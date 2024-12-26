import React, { useEffect, useState } from "react";
import MoistureLockOne from "../assets/images/Moisture lock 1.jpg";
import MoistureLockTwo from "../assets/images/Moisture lock 2.jpg";
import MoistureLockThree from "../assets/images/Moisture lock 3.jpg";
import MoistureLockFour from "../assets/images/Moisture lock 4.jpg";
import MoistureLockFive from "../assets/images/Moisture lock 5.jpg";
import MoistureLockSix from "../assets/images/Moisture lock 7.jpg";
import Flipkart from "../assets/images/Flipkart.svg";
import Amazon from "../assets/images/Amazon.svg";

const images = [
  MoistureLockOne,
  MoistureLockTwo,
  MoistureLockThree,
  MoistureLockFour,
];

const MoistureLockHydrating = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const openMoistureHydratingFlipkart = () => {
    window.open(
      "https://www.flipkart.com/scientistry-moisture-lock-hydrating-serum-2-hyaluronic-acid-deep-skin-hydration/p/itm457e34b1b7a4b?pid=BSTGKKCQ6JZMZFAC&lid=LSTBSTGKKCQ6JZMZFACPWTWBT&marketplace=FLIPKART&fm=productRecommendation%2FcrossSelling&iid=R%3Ac%3Bp%3AFRNGKKCKWCURA4G3%3Bpt%3App%3Buid%3Abd88a9e9-936a-11ed-8e57-735bb401c6fb%3B.BSTGKKCQ6JZMZFAC&ppt=pp&ppn=pp&ssid=nnyqda3i400000001673631849334&otracker=pp_reco_Bought%2BTogether_10_34.productCard.PMU_TAB_Scientistry%2BMoisture%2BLock%2BHydrating%2BSerum%252C%2B2%2525%2BHyaluronic%2Bacid%2Bfor%2Bdeep%2Bskin%2Bhydration_BSTGKKCQ6JZMZFAC_productRecommendation%2FcrossSelling_0&otracker1=pp_reco_PINNED_productRecommendation%2FcrossSelling_Bought%2BTogether_GRID_productCard_cc_10_NA_view-all&cid=BSTGKKCQ6JZMZFAC"
    );
  };
  const openMoistureHydratingAmazon = () => {
    window.open(
      "https://www.amazon.in/gp/product/B0BYVPXT57/ref=ewc_pr_img_1?smid=A2I1MYXF0K4KHQ&psc=1"
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
            Moisture Lock Hydrating Face Serum
          </span>
          <span className="text-justify text-base font-mono">
            SCIENTISTRY introduce revolutionary hydrating serum that combines
            the power of Hyaluronic acid and pentavitin. Dry, dehydrated skin
            can leave your complexion looking dull, lifeless, and aged. Our
            hydrating serum works to combat these effects by providing an
            intense burst of moisture to the skin, leaving it looking plump,
            radiant, and youthful.
          </span>
          <span className="text-justify text-base font-mono">
            Hyaluronic acid is a naturally occurring substance that is renowned
            for its hydrating properties. It works by attracting and retaining
            moisture, leaving the skin feeling soft, supple, and hydrated.
          </span>
          <span className="text-justify text-base font-mono">
            Our serum contains a 2% of Hyaluronic acid, making it an extremely
            effective hydrating solution. Pentavitin is a plant-derived
            ingredient that is clinically proven to provide deep, long-lasting
            hydration. It works by binding to the skin's natural keratin,
            creating a protective barrier that helps to prevent moisture loss.
            This ensures that your skin stays hydrated throughout the day, even
            in dry environments.
          </span>
          <span className="text-justify text-base font-mono">
            Our hydrating serum is suitable for all skin types and can be used
            as part of your daily skincare routine. Simply apply a small amount
            of serum to clean, dry skin and gently massage until absorbed. Use
            morning and night for best results.
          </span>
          <div className="flex flex-col gap-2.5">
            <span className="font-mono">Buy from</span>
            <div className="flex gap-5">
              <img
                src={Flipkart}
                alt="flipkart"
                className="w-8 cursor-pointer"
                onClick={openMoistureHydratingFlipkart}
              />
              <img
                src={Amazon}
                alt="amazon"
                className="w-8 cursor-pointer"
                onClick={openMoistureHydratingAmazon}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-[580px]:grid-cols-1 max-[580px]:gap-5 xl:gap-64 md:gap-10 px-10 max-[580px]:mt-[48rem]">
        <div className="flex flex-col gap-5 items-start">
          <span className="text-2xl font-mono font-bold">You should know</span>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              MULTI MOLECULAR WEIGHT HYALURONIC ACID. Hyaluronic acid is natural
              moisturizer and its effect depends on its molecular weight. Higher
              molecular weight hyaluronic acid sits on skin surface and absorb
              envronmental moisture thus forms moisture shield. Low molecular
              weight hyaluronic acid penetrate deep into skin and moisturize.
              Scientistry Moisture Lock Hydrating Face Serum contain blend of
              high (100 kDa) and low(5 kDa) molecular weight Hyaluronic acid.
            </li>
          </ul>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              PENTAVITIN- NATURAL SACCHARIDE. Pentavitin known as Saccharide
              Isomerate, is derived from plants and is designed to provide deep
              hydration and moisture to the skin.Pentavitin is able to bind to
              the skin like a magnet and create a moisture reservoir and provide
              long lasting skin hydration. It can help to improve the skin's
              barrier function, reduce the appearance of dryness and flakiness,
              and leave the skin feeling soft and supple.
            </li>
          </ul>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              HYDRATING DUO. Hydrated skin is the essential requirement to
              acheive healthy looking skin.Combination of Hyaluronic acid and
              Pentavitin provide long lasting skin hydration by targeting
              different pathway of skin hydration. It reduce the total epidermal
              water loss and lock the moisture inside the skin.
            </li>
          </ul>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              CLEAN BEAUTY PROMISE TO KEEP YOUR SKIN SAFE. Free from Paraben,
              Synthetic colour, Fragrance, Ethanol, Silicone, Mineral oils and
              Cruelty free. Formulated at pH 5.0 to 6.0 .
            </li>
          </ul>
          <ul className="text-justify text-base font-mono list-disc">
            <li>
              FOR ALL SKIN TYPES. It is suitable for Dry, Normal, Oily and
              Combination Skin. Formulated for men and women looking for deep
              skin hydrating formulation
            </li>
          </ul>
        </div>
        <img src={MoistureLockSix}></img>
      </div>

      <div className="flex flex-col w-full gap-6 px-10">
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-mono font-bold">
            Skin concerns it targets
          </span>
          <span className="text-base font-mono">Instant Hydration</span>
          <span className="text-base font-mono">Oil-Free Moisturization</span>
          <span className="text-base font-mono">Improve Skin Elasticity</span>
          <span className="text-base font-mono">Prevent Moisture Loss</span>
          <span className="text-base font-mono">
            Improve Skin Barrier Function
          </span>
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
          <span className="text-base font-mono">5.0 to 6.0</span>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-[580px]:grid-cols-1 max-[580px]:gap-5 xl:gap-64 md:gap-10 px-10">
        <img src={MoistureLockFive}></img>
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
            <li className="font-bold text-lg"> 2% Hyaluronic acid</li>
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
            appearance of sagging or drooping skin.
          </span>
          <ul className="text-justify text-base font-mono list-disc">
            <li className="font-bold text-lg"> 1.5% Pentavitin</li>
          </ul>
          <span className="text-justify text-base font-mono list-disc">
            One of the primary benefits of Pentavitin is its ability to provide
            long-lasting hydration to the skin. It works by binding to the
            skin's keratin and forming a protective barrier that helps to lock
            in moisture. This helps to prevent dryness and maintain the skin's
            natural moisture balance.The skin's barrier function is essential
            for maintaining healthy skin. The barrier helps to protect the skin
            from environmental stressors and prevents moisture loss. Pentavitin
            helps to strengthen the skin's barrier function by increasing
            ceramide production. This helps to improve the skin's overall health
            and resilience.
          </span>
        </div>
      </div>
    </div>
  );
};

export default MoistureLockHydrating;
