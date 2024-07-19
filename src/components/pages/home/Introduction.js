import DetailText from "@/components/shared/DetailText";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRef, useState } from "react";
import useScrollAnimation from "@/components/hooks/useScrollAnimation";
import {
  motion,
  useAnimation,
  useInView,
  useViewportScroll,
  useTransform,
} from "framer-motion";

export default function Introduction() {
  const { t } = useTranslation();

  const {
    ref,
    controls,
    containerVariants,
    itemVariants,
    yPos,
    cardVariants,
    imageVariants,
  } = useScrollAnimation();

  return (
    <div className="md:h-[full] px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] md:grid md:grid-cols-[450fr_638fr] w-full">
      <Image
        aria-hidden={true}
        src="/assets/images/img2.webp"
        className="block lg:hidden object-cover rounded-[16px] shadow-custom w-[200px] md:w-full"
        intrinsic="true"
        alt="french city houses"
        width={450}
        height={300}
        quality={100}
      />

      <div className="overflow-hidden w-full h-full rounded-[16px] hidden lg:block">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className={`w-full h-full bg-[url('/assets/images/img2.webp')] shadow-custom bg-center`}
        ></motion.div>
      </div>

      <div className="flex flex-col gap-[24px] md:py-[48px]">
        <div className="flex flex-col gap-[16px]">
          <div className="item">
            <DetailText text={t("introductionSubtitle")} />
          </div>

          <h2
            id="introduction"
            className={`item uppercase text-[1.5rem] font-bold`}
          >
            {t("introductionTitle")}
          </h2>

          <p>{t("introductionDescription")}</p>
        </div>

        <ul className="item flex flex-col gap-[16px]">
          {t("introductionAdvantages", { returnObjects: true })?.map(
            (item, index) => (
              <li key={index} className="flex items-center gap-[8px]">
                <Image
                  aria-hidden={true}
                  src={`/assets/images/vector16.svg`}
                  alt="blue checkmark"
                  intrinsic="true"
                  width={20}
                  height={20}
                  quality={100}
                  className="w-[20px] h-[20px]"
                />
                <p className="">{item.text}</p>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
