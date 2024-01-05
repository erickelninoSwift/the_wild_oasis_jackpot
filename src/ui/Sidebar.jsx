import styled from "styled-components";
import Logo from "../ui/Logo";
import MainNav from "../ui/MainNav";
const StyleSidebar = styled.aside`
  background-color: var(--color-grey-100);
  padding: 3rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 /-1;
`;

function Sidebar() {
  return (
    <>
      <StyleSidebar>
        <Logo />
        <MainNav />
      </StyleSidebar>
    </>
  );
}

export default Sidebar;
