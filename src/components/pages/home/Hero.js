import { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import DetailText from "@/components/shared/DetailText";
import useScrollTriggerAnimation from "@/components/hooks/useScrollTriggerAnimation";
import { useInView } from "framer-motion";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import ServicesModal from "@/components/pages/home/Services/ServicesModal";

export default function Hero() {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);

    setTimeout(() => {
      const targetElement = document.getElementById("ServicesModalHeading");
      if (targetElement) {
        targetElement.tabIndex = -1;
        targetElement.focus();
      }
    }, 500);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="curve relative overflow-hidden before:w-[1280px] before:h-[71px] before:bg-no-repeat before:bg-[url('/assets/images/detail1.png')] before:bottom-[0] before:content-[''] before:absolute before:left-[50%] before:bg-[length:100%_100%] lg:before:w-full bg-color03">
        <div className="flex flex-col md:grid md:grid-cols-[1fr_1fr]  gap-[24px] lg:gap-[80px]">
          <div className="flex flex-col gap-[32px] py-[100px] px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] xl:mx-[0] xl:place-self-end xl:max-w-[520px] xl:px-[0]">
            <div className="flex flex-col gap-[24px]">
              <div className={`font-bold uppercase flex flex-col gap-[16px]`}>
                <DetailText text={t("heroSubtitle")} />
                <h1 id="main-content" className="text-[1.75rem]">
                  {t("heroTitle")}
                </h1>
              </div>

              <div className="flex flex-col gap-[16px]">
                <p>{t("heroFirstParagraph")}</p>
                <p>{t("heroSecondParagraph")}</p>
              </div>
            </div>

            <button
              className="btn px-[32px] py-[12px] rounded-[6px] uppercase font-bold text-[14px] text-white w-fit cursor-pointer"
              onClick={() => handleModalOpen()}
            >
              {t("heroButton")}{" "}
            </button>
          </div>

          <div className="w-full h-full bg-[url('/assets/images/img1.jpg')] bg-center"></div>
        </div>
      </div>

      {isModalOpen && <ServicesModal onClose={handleCloseModal} />}
    </div>
  );
}
