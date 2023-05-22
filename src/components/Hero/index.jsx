import { motion } from "framer-motion";
import { ReactComponent as InstaIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as TelegIcon } from '../../assets/icons/telegram.svg';
import { ReactComponent as FaceIcon } from '../../assets/icons/facebook.svg';
import { HeroSection, HeroTitleWrapper, HeroTitle, HeroContentImg, HeroSocList, HeroSocItem, HeroLink } from "./Hero.styled";

export const Hero = () => {
  return (
    <HeroSection>
      <HeroTitleWrapper>
        <HeroTitle
          initial="hidden" whileInView="visible"
          transition={{ delay: 0.2, duration: 1 }}
          variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 }}}
        >
          grann
        </HeroTitle>
        <motion.p
          initial="hidden" whileInView="visible"
          transition={{ delay: 0.4, duration: 1 }}
          variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 }}}
        >
          авторські десерти
        </motion.p>
      </HeroTitleWrapper>
      <HeroContentImg
        initial="hidden" whileInView="visible"
       // viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.6, duration: 1 }}
        variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 }}}
      />
      <HeroSocList
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <HeroSocItem whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><TelegIcon /></HeroSocItem>
        <HeroSocItem whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><FaceIcon /></HeroSocItem>
        <HeroSocItem whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><InstaIcon /></HeroSocItem>
      </HeroSocList>
      <HeroLink to='/catalog/all'>До каталогу</HeroLink>
    </HeroSection>
  );
};