import DetailText from "@/components/shared/DetailText";
import { useTranslation } from "next-i18next";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import ServicesModal from "@/components/pages/home/Services/ServicesModal";
import useScrollAnimation from "@/components/hooks/useScrollAnimation";
import { motion } from "framer-motion";

export default function Services() {
  const { t } = useTranslation();

  const { ref, controls, containerVariants, itemVariants } =
    useScrollAnimation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = (targetSectionId) => {
    setIsModalOpen(true);

    setTimeout(() => {
      const targetSection = document.getElementById(targetSectionId);
      if (targetSection) {
        targetSection.tabIndex = -1;
        targetSection.focus();
      }
    }, 500);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
    <div>
      <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] w-full">
        <div className={`flex flex-col gap-[16px]`}>
          <DetailText text={t("servicesSubtitle")} />
          <h2 id="services" className="item uppercase text-[1.5rem] font-bold">
            {t("servicesTitle")}
          </h2>
        </div>

        <motion.ul
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className={`flex flex-col gap-[24px] md:grid md:grid-cols-[1fr_1fr] w-full`}
        >
          {t("services", { returnObjects: true })?.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              style={{
                backgroundImage: `url(/assets/images/${item.image})`,
              }}
              className="rounded-[16px] flex flex-col w-full overflow-hidden bg-center bg-cover pt-[150px] shadow-custom justify-end"
            >
              <div className="bg-color03 bg-opacity-[0.9] flex flex-col gap-[16px] font-bold uppercase p-[16px]">
                <h3 className="font-bold uppercase text-[16px]">
                  {index + 1}. {item.shortTitle}
                </h3>

                <button
                  className="btn-secondary px-[16px] py-[12px] rounded-[6px] uppercase font-bold text-[14px] w-fit cursor-pointer  shadow-custom text-white"
                  onClick={() => handleModalOpen(`service${index + 1}`)}
                  aria-haspopup="dialog"
                >
                  {t("servicesButtonOne")}{" "}
                </button>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <ServicesModal onClose={handleCloseModal} isModalOpen={isModalOpen} />
    </div>
  );
}
