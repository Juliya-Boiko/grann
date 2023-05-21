import { GroupLinksContainer, GroupLinksItem } from "./GroupLinks.styled";

export const GroupLinks = () => {

  return (
    <GroupLinksContainer>
      <GroupLinksItem to='/' >На головну</GroupLinksItem>
      <GroupLinksItem to='/catalog/all' primary>продовжити покупки</GroupLinksItem>
    </GroupLinksContainer>
  );
};