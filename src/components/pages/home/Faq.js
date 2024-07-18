import { useState, useRef } from "react";
import DetailText from "@/components/shared/DetailText";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useInView } from "framer-motion";

export default function Faq() {
  const { t } = useTranslation();

  const containerRef = useRef(null);
  const listRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const isListInView = useInView(listRef, { once: true });

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
    <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] md:grid md:grid-cols-[430fr_658fr]">
      <div className="flex flex-col gap-[16px] md:py-[16px] md:sticky md:top-0 h-fit">
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
  );
}
