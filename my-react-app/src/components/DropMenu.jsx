import styled from "@emotion/styled";

export default function DropMenu() {
  return (
    <MenuStyle>
      <option>최신순</option>
      <option>오래된 순</option>
    </MenuStyle>
  );
}
const MenuStyle = styled.select`
  border-style: none;
  outline: none;
  width: 15%;
  padding: 8px;
  border-radius: 4px;
`;
