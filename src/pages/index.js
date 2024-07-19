import React from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { motion, useScroll, useSpring } from "framer-motion";
import Headroom from "react-headroom";

// Import skeleton loaders
import HeaderSkeleton from "@/components/skeleton-loaders/HeaderSkeleton";
import FooterSkeleton from "@/components/skeleton-loaders/FooterSkeleton";
import HeroSkeleton from "@/components/skeleton-loaders/HeroSkeleton";
import WhyUsSkeleton from "@/components/skeleton-loaders/WhyUsSkeleton";
import AboutSkeleton from "@/components/skeleton-loaders/AboutSkeleton";
import ServicesSkeleton from "@/components/skeleton-loaders/ServicesSkeleton";
import PacksSkeleton from "@/components/skeleton-loaders/PacksSkeleton";
import FaqSkeleton from "@/components/skeleton-loaders/FaqSkeleton";
import ContactUpperSkeleton from "@/components/skeleton-loaders/ContactUpperSkeleton";
import ContactLowerSkeleton from "@/components/skeleton-loaders/ContactLowerSkeleton";

// Dynamic imports with dynamic loading
const Header = dynamic(() => import("@/components/common/Header"), {
  loading: () => <HeaderSkeleton />,
  ssr: false,
});
const Footer = dynamic(() => import("@/components/common/Footer"), {
  loading: () => <FooterSkeleton />,
  ssr: false,
});
const Hero = dynamic(() => import("@/components/pages/home/Hero"), {
  loading: () => <HeroSkeleton />,
  ssr: false,
});
const HowItWorks = dynamic(() => import("@/components/pages/home/HowItWorks"), {
  loading: () => null,
  ssr: false,
});
const Introduction = dynamic(
  () => import("@/components/pages/home/Introduction"),
  {
    loading: () => null,
    ssr: false,
  }
);
const WhyUs = dynamic(() => import("@/components/pages/home/WhyUs"), {
  loading: () => <WhyUsSkeleton />,
  ssr: false,
});
const Team = dynamic(() => import("@/components/pages/home/Team"), {
  loading: () => null,
  ssr: false,
});
const About = dynamic(() => import("@/components/pages/home/About"), {
  loading: () => <AboutSkeleton />,
  ssr: false,
});
const Services = dynamic(
  () => import("@/components/pages/home/Services/Services"),
  {
    loading: () => <ServicesSkeleton />,
    ssr: false,
  }
);
const Packs = dynamic(() => import("@/components/pages/home/Packs"), {
  loading: () => <PacksSkeleton />,
  ssr: false,
});
const Faq = dynamic(() => import("@/components/pages/home/Faq"), {
  loading: () => <FaqSkeleton />,
  ssr: false,
});
const AfterBefore = dynamic(
  () => import("@/components/pages/home/AfterBefore"),
  {
    loading: () => null,
    ssr: false,
  }
);
const ContactUpper = dynamic(
  () => import("@/components/pages/home/ContactUpper"),
  {
    loading: () => <ContactUpperSkeleton />,
    ssr: false,
  }
);
const ContactLower = dynamic(
  () => import("@/components/pages/home/ContactLower/ContactLower"),
  {
    loading: () => <ContactLowerSkeleton />,
    ssr: false,
  }
);

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
    en: "Excellence Cleaners: Impeccable Cleaning Services for a Spotless Home",
    fr: "Excellence Cleaners: Services de nettoyage impeccables pour une maison impeccable",
    pt: "Excellence Cleaners: Serviços de limpeza impecáveis para uma casa impecável",
    es: "Excellence Cleaners: Servicios de limpieza impecables para un hogar impecable",
  };

  const descriptions = {
    en: "Experience top-notch cleaning services with Excellence Cleaners. We provide exceptional cleaning solutions, ensuring your home is spotless and gleaming.",
    fr: "Découvrez des services de nettoyage de premier ordre avec Excellence Cleaners. Nous proposons des solutions de nettoyage exceptionnelles, garantissant une maison impeccable et étincelante.",
    pt: "Experimente serviços de limpeza de primeira linha com a Excellence Cleaners. Oferecemos soluções de limpeza excepcionais, garantindo que sua casa esteja impecável e brilhando.",
    es: "Experimente servicios de limpieza de primera clase con Excellence Cleaners. Brindamos soluciones de limpieza excepcionales, asegurando que su hogar esté impecable y reluciente.",
  };

  return (
    <div>
      <NextSeo
        title={titles[initialLocale]}
        description={descriptions[initialLocale]}
        canonical="https://www.excellence-cleaners.com/"
        openGraph={{
          url: "https://www.excellence-cleaners.com/",
          title: titles[initialLocale],
          description: descriptions[initialLocale],
          images: [
            {
              url: "https://excellence-cleaners.com/assets/images/img3.webp",
              width: 800,
              height: 600,
              alt: "Excellence cleaners",
              type: "image/webp",
            },
          ],
          site_name: "Excellence cleaners",
        }}
        languageAlternates={[
          {
            hrefLang: "fr",
            href: "https://www.excellence-cleaners.com/fr/",
          },
          {
            hrefLang: "en",
            href: "https://www.excellence-cleaners.com/en/",
          },
          {
            hrefLang: "pt",
            href: "https://www.excellence-cleaners.com/pt/",
          },
          {
            hrefLang: "es",
            href: "https://www.excellence-cleaners.com/es/",
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
