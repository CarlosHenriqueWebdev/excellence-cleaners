import DetailText from "@/components/shared/DetailText";
import { useTranslation } from "next-i18next";

export default function Team() {
  const { t } = useTranslation();

  return (
    <div
      className={`bg-[url('/assets/images/img10.webp')] bg-cover bg-fixed curve relative overflow-hidden before:w-[1280px] before:h-[71px] before:bg-no-repeat before:bg-[url('/assets/images/detail2.webp')] before:top-[0] before:content-[''] before:absolute before:left-[50%] before:bg-[length:100%_100%] lg:before:w-full border-b-[5px] border-solid border-color01 py-[100px]`}
    >
      <div className="bg-white bg-opacity-[0.85] py-[60px] border-color03 border-solid border-y-[2px] shadow-custom">
        <div
          className={`px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[24px]`}
        >
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[16px]">
                <DetailText text={t("teamSubtitle")} />
                <h2 id="message" className="uppercase text-[1.5rem] font-bold">
                  {t("teamTitle")}
                </h2>
              </div>

              <p className="">{t("teamDescription")}</p>
            </div>

            <div className="flex flex-col gap-[20px]">
              <h3 className="uppercase text-[20px] font-bold">
                {t("teamSecondTitle")}
              </h3>

              <div className="flex flex-col gap-[24px] md:flex-row md:justify-between">
                <div className="flex flex-col gap-[12px]">
                  <h4 className="uppercase text-[16px] font-bold">
                    {t("teamMinorTitleFirst")}
                  </h4>

                  <p>{t("teamMinorDescriptionFirst")}</p>
                </div>{" "}
                <div className="flex flex-col gap-[12px]">
                  <h4 className="uppercase text-[16px] font-bold">
                    {t("teamMinorTitleSecond")}
                  </h4>

                  <p className="">{t("teamMinorDescriptionSecond")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
