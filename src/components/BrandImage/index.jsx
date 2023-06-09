import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BrandImageContainer, BrandImageWrapper } from './BrandImage.styled';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const BrandImage = ({ width, light }) => {
  return (
    <BrandImageContainer
      initial="hidden" whileInView="visible"
      transition={{ delay: 0.4, duration: 1 }}
      variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 }}}
      width={width}
    >
      <BrandImageWrapper>
        {light
          ? <LazyLoadImage src={require(`../../assets/images/brand/title-light.png`)}
              srcSet={`${require(`../../assets/images/brand/title-light@2x.png`)} 2x`}
              width='100%' height='auto'
              alt='From Grann with love' effect="blur"
            />
          : <LazyLoadImage src={require(`../../assets/images/brand/title.png`)}
              srcSet={`${require(`../../assets/images/brand/title@2x.png`)} 2x`}
              width='100%' height='auto'
              alt='From Grann with love' effect="blur"
            />
        }
      </BrandImageWrapper>
      <LazyLoadImage src={require(`../../assets/images/brand/cake.png`)}
        srcSet={`${require(`../../assets/images/brand/cake@2x.png`)} 2x`}
        width='100%' height='auto'
        alt='Napoleon' effect="blur"
      />
    </BrandImageContainer>
  );
}