import { GroupLinksContainer, GroupLinksItem } from "./GroupLinks.styled";

export const GroupLinks = () => {

  return (
    <GroupLinksContainer>
      <GroupLinksItem
        to='/'
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        На головну
      </GroupLinksItem>
      <GroupLinksItem
        to='/catalog/all'
        primary="true"
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        продовжити покупки
      </GroupLinksItem>
    </GroupLinksContainer>
  );
};