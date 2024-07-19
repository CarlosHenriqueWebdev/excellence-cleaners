import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

function ServicesModal({ onClose, isModalOpen }) {
  const { t } = useTranslation();

  const handleButtonClick = (targetId) => {
    const targetElement = document.getElementById(targetId);

    onClose();

    if (targetElement) {
      setTimeout(() => {
        targetElement.tabIndex = -1;
        targetElement.focus();
      }, 100);
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex px-[12px] sm:px-[16px] lg:px-[32px] w-full"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="overflow-y-scroll bg-white bg-opacity-[0.90] md:bg-opacity-[1] w-full justify-start shadow-custom mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px]"
          >
            <div className="flex flex-col gap-[32px]">
              <div className="flex justify-end w-full px-[24px] lg:px-[80px] py-[24px]">
                <motion.button
                  onClick={onClose}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3, ease: "easeInOut" },
                  }}
                  whileTap={{
                    scale: 0.9,
                    transition: { duration: 0.2, ease: "easeInOut" },
                  }}
                >
                  <Image
                    aria-hidden={true}
                    src="/assets/images/vector23.svg"
                    alt="arrow"
                    intrinsic="true"
                    width={48}
                    height={48}
                    quality={100}
                    className="rounded-[100%]"
                  />
                </motion.button>
              </div>

              <ul className="flex flex-col gap-[100px]">
                {t("services", { returnObjects: true })?.map((item, index) => (
                  <li
                    key={index}
                    className={`px-[18px] sm:px-[24px] lg:px-[80px] flex flex-col gap-[32px] md:grid ${index % 2 !== 0 ? "bg-color03 py-[100px] md:grid-cols-[1fr_1fr] bg-opacity-[0.90] md:bg-opacity-[1]" : "md:grid-cols-[1fr_1fr]"}`}
                  >
                    <Image
                      aria-hidden={true}
                      src={`/assets/images/${item.image}`}
                      className={`block object-cover rounded-[16px] shadow-custom w-[450px] md:w-full md:h-full ${index % 2 !== 0 ? "md:order-[1]" : ""}`}
                      intrinsic="true"
                      alt="french city houses"
                      width={450}
                      height={300}
                      quality={100}
                    />

                    <div className="flex flex-col gap-[24px] md:pt-[16px]">
                      <div className="flex flex-col gap-[32px]">
                        <div className="flex flex-col gap-[16px]">
                          <h2
                            id={item.shortTitle}
                            className={`item uppercase text-[1.5rem] font-bold`}
                          >
                            {index + 1}. {item.title}
                          </h2>

                          <p>{item.description}</p>
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
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={onClose}
              className="btn-secondary px-[32px] py-[32px] uppercase font-bold text-[18px] w-full cursor-pointer shadow-custom text-white"
            >
              {t("closeModalButton")}
            </button>{" "}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ServicesModal;
