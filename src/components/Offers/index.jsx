import { offers } from "../../data/offers";
import { OffersSection, OffersList, OffersItem, OffersLink } from "./Offers.styled";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Offers = () => {
  return (
    <OffersSection>
      <OffersList>
        {offers.map(({ id, title, imgUrl }, idx) => {
          return <OffersItem
            key={id} initial="hidden" whileInView="visible"
            transition={{ delay: idx / 10, duration: 1 }}
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 }}}
          >
            <LazyLoadImage src={require(`../../assets/images/offers/${imgUrl}.png`)}
              srcSet={`${require(`../../assets/images/offers/${imgUrl}@2x.png`)} 2x`}
              width="100%" height="auto"
              alt={title} effect="blur"
            />
            <OffersLink to={`/catalog/${id}`}>{title}</OffersLink>
          </OffersItem>
        })}
      </OffersList>
    </OffersSection>
  );
};