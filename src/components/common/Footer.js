import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import LegalModal from "@/components/shared/LegalModal";
import { Link as ScrollLink } from "react-scroll";

function Footer() {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const currentYear = new Date().getFullYear();

  const contactInfo = t("contactInfo", { returnObjects: true });
  const socials = t("socials", { returnObjects: true });
  const mergedArray = contactInfo.concat(socials);

  const legalLinks = t("legalLinks", { returnObjects: true });
  const attributionsArray = t("attributions", { returnObjects: true });
  const newLegalItem = {
    text: t("attributionsTitle"),
    DO_NOT_CHANGE: "attributions",
    array: attributionsArray,
  };

  const updatedLegalLinks = [...legalLinks, newLegalItem];

  const handleModalOpen = (item, targetId) => {
    setModalItem(item);
    setIsModalOpen(true);

    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.tabIndex = -1;
        targetElement.focus();
      }
    }, 500);
  };

  return (
    <footer className="flex flex-col bg-white mt-[100px]">
      <div className="border-solid border-t-[2px] border-color03">
        <ul className="mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] px-[24px] lg:px-[80px] py-[48px] flex flex-col gap-[48px] md:grid md:grid-cols-[1.5fr_1fr_1fr]">
          <li className="flex flex-col gap-[24px]">
            <Image
              aria-hidden={true}
              src="/assets/images/logo.svg"
              alt="excellence logo"
              intrinsic="true"
              className="w-[166px] h-[32px]"
              width={166}
              height={32}
              quality={100}
            />

            <p className="md:max-w-[360px]">{t("footerDescription")}</p>
          </li>
          <li className="flex flex-col gap-[24px]">
            <h2 className="text-[1.125rem] uppercase font-bold">
              {t("footerContactTitle")}
            </h2>
            <ul className="flex flex-col gap-[16px] font-medium">
              {mergedArray?.map((item, index) => (
                <li key={index} className="flex gap-[8px]">
                  <Image
                    aria-hidden={true}
                    src={`/assets/images/${item.icon}`}
                    width={22}
                    height={22}
                    intrinsic="true"
                    className="w-[22px] h-[22px]"
                    alt={`${item.text} icon`}
                  />
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-color01"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="flex flex-col gap-[24px]">
            <h2 className="text-[1.125rem] uppercase font-bold">
              {t("footerSiteLinksTitle")}
            </h2>
            <ul className="flex flex-col gap-[16px] font-bold">
              {t("navLinks", { returnObjects: true })?.map((item, index) => (
                <li key={index}>
                  <ScrollLink
                    className="cursor-pointer hover:underline hover:text-color01 "
                    to={item.DO_NOT_CHANGE}
                    offset={-200}
                    smooth={true}
                  >
                    {item.text}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <div className="border-solid border-y-[2px] border-color03">
        <ul className="mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] px-[24px] lg:px-[80px] py-[32px] flex gap-[4px] flex-wrap">
          {updatedLegalLinks?.map((item, index) => (
            <li
              key={index}
              className="text-black text-opacity-[0.65] flex gap-[6px]"
            >
              <button
                onClick={() => handleModalOpen(item, "legal-title")}
                className="cursor-pointer hover:underline"
              >
                {item.text}
              </button>
              {index !== updatedLegalLinks.length - 1 && (
                <span aria-hidden={true}>|</span>
              )}
            </li>
          ))}
        </ul>

        {isModalOpen && modalItem && (
          <LegalModal item={modalItem} onClose={() => setIsModalOpen(false)} />
        )}
      </div>
      <div className="mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] px-[24px] lg:px-[80px] py-[48px] text-center  text-[1rem]">
        <p>&copy; {currentYear} Excellence Conciergerie</p>
      </div>
    </footer>
  );
}

export default Footer;
