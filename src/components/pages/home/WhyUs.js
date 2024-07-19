import { useState } from "react";
import DetailText from "@/components/shared/DetailText";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import useScrollAnimation from "@/components/hooks/useScrollAnimation";
import {
  motion,
} from "framer-motion";

export default function WhyUs() {
  const { t } = useTranslation();

  const {
    ref,
    controls,
    itemVariants,
  } = useScrollAnimation();

  const reasons = t("whyUsReasons", { returnObjects: true });
  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleFaq = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] md:grid md:grid-cols-[3fr_1fr]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={itemVariants}
        className={`md:order-[1] hidden md:flex flex-col h-[400px] md:sticky md:top-[16px] rounded-[16px] overflow-hidden shadow-custom`}
      >
        <div
          className={`w-full h-full bg-[url('/assets/images/img3.webp')] bg-center`}
        ></div>

        <div
          className={`w-full h-full bg-[url('/assets/images/img4.webp')] bg-center`}
        ></div>
        <div
          className={`w-full h-full bg-[url('/assets/images/img5.webp')] bg-center`}
        ></div>
      </motion.div>

      <div className={`md:order-[1] flex md:hidden flex-col gap-[32px]`}>
        <Image
          aria-hidden={true}
          src="/assets/images/img3.webp"
          className="block object-cover rounded-[16px] shadow-custom w-[450px] md:w-full"
          intrinsic="true"
          alt="french city houses"
          width={450}
          height={300}
          quality={100}
        />
      </div>

      <div className="flex flex-col gap-[24px] md:pt-[16px]">
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[16px]">
            <div className="item">
              <DetailText text={t("whyUsSubtitle")} />
            </div>
            <h2 id="whyUs" className="item uppercase text-[1.5rem] font-bold">
              {t("whyUsTitle")}
            </h2>
          </div>

          <div className="item flex flex-col gap-[16px]">
            <p>{t("whyUsDescription")}</p>
          </div>
        </div>

        <ul
          className={`flex flex-col shadow-custom overflow-hidden rounded-[16px] border-solid border-[1px] border-color03 bg-color05`}
        >
          {reasons?.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndexes.includes(index)}
                className={`${index === reasons.length - 1 ? "border-b-[0px]" : ""} group cursor-pointer font-semibold p-[24px] flex flex-col border-solid border-b-[1px] border-color03`}
              >
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="group-hover:text-color02 text-start">
                    {item.title}
                  </h3>
                  <Image
                    aria-hidden={true}
                    src="/assets/images/vector4.svg"
                    alt="arrow"
                    intrinsic="true"
                    width={16}
                    height={16}
                    quality={100}
                    className={`transition-transform ${openIndexes.includes(index) ? "rotate-180" : ""}`}
                  />
                </div>

                <div
                  className={`overflow-hidden ${openIndexes.includes(index) ? "transition-max-height max-h-[500px]" : "transition-max-height-closed max-h-[0px]"}`}
                >
                  <p
                    aria-hidden={!openIndexes.includes(index)}
                    className="text-start pt-[16px] font-normal"
                  >
                    {item.description}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
