import React from "react";
import Image from "next/image";

export default function DetailText({ text }) {
  return (
    <div
      aria-hidden={true}
      className="w-fit flex gap-[8px] items-center text-[12px]"
    >
      <Image
        aria-hidden={true}
        src="/assets/images/star-cleaners.webp"
        alt="blue clean star detail"
        intrinsic="true"
        width={19}
        height={19}
        quality={100}
      />
      <span className="font-bold uppercase">{text}</span>
    </div>
  );
}
