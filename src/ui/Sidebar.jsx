import styled from "styled-components";

const StyleSidebar = styled.aside`
  background-color: var(--color-grey-100);
  padding: 3rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 /-1;
`;

function Sidebar() {
  return (
    <>
      <StyleSidebar>Sidebar</StyleSidebar>
    </>
  );
}

export default Sidebar;
