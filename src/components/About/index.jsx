import { SectionTitle } from "styles/common/SectionTitle.styled";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AboutSection, AboutWrapper, AboutImage, AboutContent, AboutName, AboutPosition, AboutText } from "./About.styled";
import 'react-lazy-load-image-component/src/effects/blur.css';

export const About = () => {
  return (
    <AboutSection>
      <SectionTitle
        id="about"
        initial="hidden" whileInView="visible"
        transition={{ delay: 0.2, duration: 1 }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 }}}
      >
        Про мене
      </SectionTitle>
      <AboutWrapper>
        <AboutImage>
          <LazyLoadImage src={require(`../../assets/images/about/about.png`)}
            srcSet={`${require(`../../assets/images/about/about@2x.png`)} 2x`}
            width="100%" height='auto'
            alt='From Grann with love' effect="blur"
          />
        </AboutImage>
        <AboutContent
          initial="hidden" whileInView="visible"
          transition={{ delay: 0.4, duration: 1 }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 }}}
        >
          <AboutName>Анна Кострома</AboutName>
          <AboutPosition>Засновниця кондитерської Grann Pastry</AboutPosition>
          <AboutText>Від хобі до власної справи.</AboutText>
          <AboutText>Я закінчила DGF International Culinary School в Києві, а згодом навчалася в одній з найвідоміших шкіл готельного сервісу і кулінарії в світі «Le Cordon Bleu» (Франція).Свою справу почала після того, як здобула досвід і працювала в одному з найбільших кондитерських цехів Грузії (1500 кв.м.).</AboutText>
          <AboutText>Наразі започаткувала особистий бренд і будую власний кондитерський цех.Моя робота мене надихає. Завдяки моїм солодощам, я можу дарувати щасливі моменти для вас!</AboutText>
        </AboutContent>
      </AboutWrapper>
    </AboutSection>
  );
};