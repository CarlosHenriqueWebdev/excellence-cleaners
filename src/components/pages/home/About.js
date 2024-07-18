import DetailText from "@/components/shared/DetailText";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function About() {
  const { t } = useTranslation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleButtonClick = () => {
    const targetElement = document.getElementById("contact");

    if (targetElement) {
      setTimeout(() => {
        targetElement.tabIndex = -1;
        targetElement.focus();
      }, 100);
    }
  };

  return (
    <div className="md:h-[full] px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] md:grid md:grid-cols-[1fr_1fr]">
      <Image
        aria-hidden={true}
        src="/assets/images/img14.jpg"
        className="md:order-[1] block object-cover rounded-[16px] shadow-custom w-[450px] md:w-full md:h-full"
        intrinsic="true"
        alt="french city houses"
        width={450}
        height={300}
        quality={100}
      />

      <div className="flex flex-col gap-[24px] md:py-[48px]">
        <div className="flex flex-col gap-[32px] md:text-center md:justify-center md:items-center">
          <div className="flex flex-col gap-[16px] md:text-center md:justify-center md:items-center">
            <DetailText text={t("aboutSubtitle")} />

            <h2 id="about" className={`item uppercase text-[1.5rem] font-bold`}>
              {t("aboutTitle")}
            </h2>

            <p>{t("aboutDescription")}</p>
          </div>

          <ScrollLink
            className="btn px-[32px] py-[12px] rounded-[6px] uppercase font-bold text-[14px] text-white w-fit cursor-pointer"
            to="contact"
            tabIndex="0"
            onClick={() => handleButtonClick("contact")}
            offset={-200}
            smooth={true}
          >
            {t("aboutButton")}{" "}
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
