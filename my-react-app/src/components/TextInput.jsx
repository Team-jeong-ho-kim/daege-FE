import styled from "@emotion/styled";
import { useState } from "react";

export default function TextInput({
  title,
  $active,
  length,
  isPosted,
  onValueChange,
}) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onValueChange(newValue);
  };
  return (
    <>
      <Title>
        {title}
        <Required>*</Required>
      </Title>
      <TextWrapper>
        {isPosted ? (
          <p>{value}</p>
        ) : (
          <Text
            $active={$active}
            placeholder="본문을 입력해주세요."
            value={value}
            onChange={handleChange}
            maxLength={length}
            length={length}
            required
          />
        )}

        <Count>
          {value.length} / {length}
        </Count>
      </TextWrapper>
    </>
  );
}

const Text = styled.textarea`
  width: 100%;
  height: ${(props) => props.length}px;
  padding: 24px 8px;
  border: none;
  border-radius: 8px;
  background-color: #f7f7f7;
  font-weight: ${({ $active }) =>
    $active === "bold" ||
    $active === "h1" ||
    $active === "h2" ||
    $active === "h3"
      ? "bold"
      : "normal"};
  font-size: ${({ $active }) => {
    if ($active === "h1") return "24px";
    if ($active === "h2") return "20px";
    if ($active === "h3") return "16px";
    return "14px";
  }};
  box-sizing: border-box;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const Title = styled.h1`
  width: 70%;
  padding: 12px 0;
  box-sizing: border-box;
  text-align: left;
  margin: 0;
`;

const Required = styled.span`
  color: red;
  font-size: 16px;
  margin-left: 4px;
`;

const TextWrapper = styled.div`
  position: relative;
  width: 70%;
`;

const Count = styled.p`
  position: absolute;
  top: 8px;
  right: 8px;
  margin: 0;
  font-size: 12px;
  color: #999;
  pointer-events: none;
`;
