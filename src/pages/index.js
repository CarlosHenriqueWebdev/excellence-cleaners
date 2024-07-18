import React from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { motion, useScroll, useSpring } from "framer-motion";
import Headroom from "react-headroom";

import Header from "@/components/common/Header";
import Footer from "@/components/common//Footer";
import Hero from "@/components/pages/home/Hero";
import HowItWorks from "@/components/pages/home/HowItWorks";
import Introduction from "@/components/pages/home/Introduction";
import WhyUs from "@/components/pages/home/WhyUs";
import Team from "@/components/pages/home/Team";
import About from "@/components/pages/home/About";
import Services from "@/components/pages/home/Services/Services";
import Packs from "@/components/pages/home/Packs";
import Faq from "@/components/pages/home/Faq";
import AfterBefore from "@/components/pages/home/AfterBefore";
import ContactUpper from "@/components/pages/home/ContactUpper";
import ContactLower from "@/components/pages/home/ContactLower/ContactLower";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default function Home(props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const initialLocale = props._nextI18Next.initialLocale;

  const titles = {
    en: "Excellence Conciergerie: Unforgettable Luxury on the French Riviera",
    fr: "Excellence Conciergerie: Découvrez le summum du luxe sur la Côte d'Azur",
    pt: "Excellence Conciergerie: Experimente o ápice do luxo na Riviera Francesa",
    es: "Excellence Conciergerie: Experimente el pináculo del lujo en la Riviera francesa",
  };

  const descriptions = {
    en: "Experience the epitome of luxury on the French Riviera with Excellence Conciergerie. We provide unforgettable experiences, exceptional property management, and discreet, 5-star service for both property owners and travelers.",
    fr: "Découvrez le summum du luxe sur la Côte d'Azur avec Excellence Conciergerie. Nous proposons des expériences inoubliables, une gestion immobilière exceptionnelle et un service discret 5 étoiles aux propriétaires et aux voyageurs.",
    pt: "Experimente o ápice do luxo na Riviera Francesa com a Excellence Conciergerie. Oferecemos experiências inesquecíveis, gestão de propriedades excepcional e serviço discreto 5 estrelas para proprietários e viajantes.",
    es: "Experimente el pináculo del lujo en la Riviera francesa con Excellence Conciergerie. Brindamos experiencias inolvidables, administración de propiedades excepcionales y un servicio discreto de 5 estrellas para propietarios e invitados.",
  };

  return (
    <div>
      <NextSeo
        title={titles[initialLocale]}
        description={descriptions[initialLocale]}
        canonical="https://www.excellence-conciergerie.com/"
        openGraph={{
          url: "https://www.excellence-conciergerie.com/",
          title: titles[initialLocale],
          description: descriptions[initialLocale],
          images: [
            {
              url: "https://excellence-conciergerie.com/assets/images/img1.webp",
              width: 800,
              height: 600,
              alt: "Excellence Conciergerie",
              type: "image/webp",
            },
          ],
          site_name: "Excellence Conciergerie",
        }}
        languageAlternates={[
          {
            hrefLang: "fr",
            href: "https://www.excellence-conciergerie.com/fr/",
          },
          {
            hrefLang: "en",
            href: "https://www.excellence-conciergerie.com/en/",
          },
          {
            hrefLang: "pt",
            href: "https://www.excellence-conciergerie.com/pt/",
          },
          {
            hrefLang: "es",
            href: "https://www.excellence-conciergerie.com/es/",
          },
        ]}
      />

      <div>
        <Headroom>
          <div className="relative z-[10]">
            <Header />

            <motion.div
              className="progress-bar absolute w-full bg-color01 h-[4px] z-[-1]"
              style={{ scaleX }}
            />
          </div>
        </Headroom>

        <div className="flex flex-col gap-[100px]">
          <Hero />
          <HowItWorks />
          <Introduction />
          <WhyUs />
          <Team />
          <About />
          <Services />
          <Packs />
          <Faq />
          <AfterBefore />
          <div className="flex flex-col gap-[32px]">
            <ContactUpper />
            <ContactLower />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
