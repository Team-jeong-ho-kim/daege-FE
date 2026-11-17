import styled from "@emotion/styled";
import { useState } from "react";

export default function TextSet({ selected, setSelected }) {
  return (
    <>
      <Set>
        <Text
          type="button"
          $active={selected === "bold"}
          onClick={() => setSelected(selected === "bold" ? "" : "bold")}
        >
          <Bold>B</Bold>
        </Text>

        <Text
          type="button"
          $active={selected === "h1"}
          onClick={() => setSelected(selected === "h1" ? "" : "h1")}
        >
          H1
        </Text>

        <Text
          type="button"
          $active={selected === "h2"}
          onClick={() => setSelected(selected === "h2" ? "" : "h2")}
        >
          H2
        </Text>

        <Text
          type="button"
          $active={selected === "h3"}
          onClick={() => setSelected(selected === "h3" ? "" : "h3")}
        >
          H3
        </Text>
      </Set>
    </>
  );
}

const Text = styled.button`
  border-radius: 20%;
  background-color: ${(props) => (props.$active ? "#ecb7b7" : "white")};
  color: ${(props) => (props.$active ? "#eb3d3d" : "black")};
  border: 1px solid ${(props) => (props.$active ? "#eb3d3d" : "#b8b8b8")};
  padding: 8px;
  width: 36px;
  cursor: pointer;
`;

const Set = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px 0;
`;

const Bold = styled.div`
  font-weight: bold;
  font-size: 16px;
`;
