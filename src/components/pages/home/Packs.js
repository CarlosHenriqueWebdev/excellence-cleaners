import DetailText from "@/components/shared/DetailText";
import { useTranslation } from "next-i18next";
import Sparkle from "react-sparkle";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Packs() {
  return (
    <div
      className={`bg-[url('/assets/images/img13.webp')] bg-cover bg-fixed curve relative overflow-hidden before:w-[1280px] before:h-[71px] before:bg-no-repeat before:bg-[url('/assets/images/detail3.webp')] before:bottom-[0] before:content-[''] before:absolute before:left-[50%] before:bg-[length:100%_100%] lg:before:w-full border-t-[5px] border-solid border-color01`}
    >
      <div className="bg-white-90 py-[200px]"></div>
    </div>
  );
}
