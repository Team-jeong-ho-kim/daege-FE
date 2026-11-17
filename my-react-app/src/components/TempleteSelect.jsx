import styled from "@emotion/styled";

export default function TempleteSelect({ title, Text, $active, onClick }) {
  return (
    <>
      <Templete $active={$active} onClick={onClick}>
        <TempleteBtn>{title}</TempleteBtn>
        <TempleteText $active={$active} onClick={onClick}>
          {Text}
        </TempleteText>
      </Templete>
    </>
  );
}

const TempleteBtn = styled.span`
  font-size: 2em;
`;

const TempleteText = styled.p`
  color: ${(props) => (props.$active ? "white" : "#999;")};
  margin: 0;
`;

const Templete = styled.button`
  background-color: ${(props) => (props.$active ? "#eb5757" : "#e3e3e3")};
  border-radius: 8px;
  padding: 8px;
  width: 400px;
  height: 200px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 5px 5px gray;
    background-color: #eb5757;
  }
`;
