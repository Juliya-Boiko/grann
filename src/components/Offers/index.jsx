import { offers } from "./offers";
import { OffersSection, OffersList, OffersItem, OffersImg, OffersLink } from "./Offers.styled";
import { LazyLoadImage } from 'react-lazy-load-image-component';
//mport ImgUrl from '../../assets/images/offers/mobile/cake.png';

export const Offers = () => {
  return (
    <OffersSection>
      <OffersList>
        {offers.map(({ id, title, imgUrl }) => {
          return <OffersItem key={id}>
            <LazyLoadImage src={require(`../../assets/images/offers/${imgUrl}.png`)}
              srcSet={`${require(`../../assets/images/offers/${imgUrl}@2x.png`)} 2x`}
              width="100%" height="auto"
              alt={title}
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