import DetailText from "@/components/shared/DetailText";
import { useTranslation } from "next-i18next";
import Sparkle from "react-sparkle";
import Image from "next/image";
import { useRef } from "react";
import useScrollAnimation from "@/components/hooks/useScrollAnimation";
import {
  motion,
  useAnimation,
  useInView,
  useViewportScroll,
  useTransform,
} from "framer-motion";

export default function AfterBefore() {
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
    <div
      className={`curve relative overflow-hidden before:w-[1280px] before:h-[71px] before:bg-no-repeat before:bg-[url('/assets/images/detail2.webp')] before:top-[0] before:content-[''] before:absolute before:left-[50%] before:bg-[length:100%_100%] lg:before:w-full after:w-[1280px] after:h-[71px] after:bg-no-repeat after:bg-[url('/assets/images/detail1.webp')] after:bottom-[0] after:content-[''] after:absolute  after:bg-[length:100%_100%] lg:after:w-full`}
    >
      <div className="bg-color03 py-[100px]">
        <div
          className={`px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[24px]`}
        >
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[16px] md:text-center md:justify-center md:items-center">
              <DetailText text={t("afterBeforeSubtitle")} />
              <h2 id="message" className="uppercase text-[1.5rem] font-bold">
                {t("afterBeforeTitle")}
              </h2>
            </div>

            <motion.ul
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={containerVariants}
              className="flex flex-col md:grid md:grid-cols-[1fr_1fr] gap-[24px]"
            >
              {t("afterBefore", { returnObjects: true })?.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="grid grid-cols-[1fr_1fr] gap-[2px] shadow-custom rounded-[16px] overflow-hidden"
                >
                  <div className="relative">
                    <Image
                      aria-hidden={true}
                      src={`/assets/images/${item.imageBefore}`}
                      className="block object-cover md:w-full"
                      intrinsic="true"
                      alt="french city houses"
                      width={450}
                      height={300}
                      quality={100}
                    />

                    <div className="p-[16px] absolute left-0 bottom-0">
                      <p className="py-[4px] px-[12px] sm:py-[8px] sm:px-[32px] border-[1px] border-solid border-color03 uppercase font-bold text-black text-[12px] bg-white bg-opacity-[0.90] rounded-[6px] shadow-custom">
                        {t("afterBeforeBefore")}
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <Image
                      aria-hidden={true}
                      src={`/assets/images/${item.imageAfter}`}
                      className="block object-cover md:w-full"
                      intrinsic="true"
                      alt="french city houses"
                      width={450}
                      height={300}
                      quality={100}
                    />

                    <div className="p-[16px] absolute right-0 bottom-0">
                      <p className="py-[4px] px-[12px] sm:py-[8px] sm:px-[32px] border-[1px] border-solid border-color03 uppercase font-bold text-black text-[12px] bg-white bg-opacity-[0.90] rounded-[6px] shadow-custom">
                        {t("afterBeforeAfter")}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
}
