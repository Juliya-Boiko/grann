import { offers } from "./offers";
import { OffersSection, OffersList, OffersItem, OffersLink } from "./Offers.styled";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Offers = () => {
  return (
    <OffersSection>
      <OffersList>
        {offers.map(({ id, title, imgUrl }) => {
          return <OffersItem key={id}>
            <LazyLoadImage src={require(`../../assets/images/offers/${imgUrl}.png`)}
              srcSet={`${require(`../../assets/images/offers/${imgUrl}@2x.png`)} 2x`}
              width="100%" height="auto"
              alt={title} effect="blur"
            />
            <OffersLink>
              {title}
            </OffersLink>
          </OffersItem>
        })}
      </OffersList>
    </OffersSection>
  );
};