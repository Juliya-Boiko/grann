import { Link } from "react-router-dom";
import { ScrumbsSection } from "./Scrumbs.styled";

export const Scrumbs = () => {
  return (
    <ScrumbsSection>
      <Link to='/'>Головна</Link> / Каталог
    </ScrumbsSection>
  );
};