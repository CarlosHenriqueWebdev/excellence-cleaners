import DetailText from "@/components/shared/DetailText";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function ContactUpper() {
  const { t } = useTranslation();

  const introRef = useRef(null);
  const listRef = useRef(null);
  const isIntroInView = useInView(introRef, { once: true });
  const isListInView = useInView(listRef, { once: true });

  return (
    <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[24px] w-full">
      <div className={`flex flex-col gap-[20px]`}>
        <div className="flex flex-col gap-[16px]">
          <DetailText text={t("contactSubtitle")} />
          <h2 id="contact" className="item uppercase text-[1.5rem] font-bold">
            {t("contactTitle")}
          </h2>
        </div>

        <div className="flex flex-col gap-[16px]">
          <p className="item md:max-w-[800px]">{t("contactDescription")}</p>
        </div>
      </div>

      <ul className={`flex flex-wrap gap-[16px]`}>
        {t("contactInfo", { returnObjects: true })?.map((item, index) => (
          <li key={index} className="item flex gap-[8px]">
            <Image
              aria-hidden={true}
              src={`/assets/images/${item.icon}`}
              width={20}
              height={20}
              intrinsic="true"
              className="w-[20px] h-[20px]"
              alt={`icon ${item.text}`}
            />
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold hover:text-color02"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
