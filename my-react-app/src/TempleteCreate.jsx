import TempleteSelect from "./components/TempleteSelect";
import styled from "@emotion/styled";
import Back from "./assets/left-arrow.svg";
import Header from "./components/header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Templete() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  return (
    <>
      <HeaderStyle>
        <Header />
      </HeaderStyle>
      <BackBtn
        src={Back}
        width="32px"
        height="32px"
        onClick={() => window.history.back()}
      />
      <MainContainer>
        <TitleContainer>
          <Title>내 템플릿</Title>
        </TitleContainer>
        <TempleteContainer>
          <TempleteSelect
            title="+"
            $active={selected === 0}
            onClick={() => setSelected(selected === 0 ? null : 0)}
          ></TempleteSelect>
          <TempleteSelect
            title="기본 템플릿"
            Text="빈 입력창입니다."
            $active={selected === 1}
            onClick={() => setSelected(selected === 1 ? null : 1)}
          ></TempleteSelect>
          <TempleteSelect
            title="교시별 템플릿"
            Text="8,9,10교시로 나누어져있습니다."
            $active={selected === 2}
            onClick={() => setSelected(selected === 2 ? null : 2)}
          ></TempleteSelect>
          <TempleteSelect
            title="질문답 템플릿"
            Text="질문 후 답을 하는 형식으로 나누어져있습니다."
            $active={selected === 3}
            onClick={() => setSelected(selected === 3 ? null : 3)}
          ></TempleteSelect>
        </TempleteContainer>
      </MainContainer>
      <Align>
        <Btn>
          <SubmitBtn
            onClick={() => {
              if (selected !== null) {
                navigate(`/post/${selected}`);
              } else {
                alert("템플릿을 선택해주세요");
              }
            }}
          >
            다음
          </SubmitBtn>
        </Btn>
      </Align>
    </>
  );
}

const HeaderStyle = styled.div`
  background-color: #fce7e3;
`;

const TempleteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 80%;
`;

const BackBtn = styled.img`
  margin: 0 8%;
  padding-top: 24px;
  cursor: pointer;
`;

const Align = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubmitBtn = styled.button`
  background-color: #eb5757;
  border: none;
  border-radius: 8px;
  padding: 4px;
  width: 4%;
  height: 40px;
  color: white;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 5px #ff8181;
  }
`;

const Btn = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
  margin: 8px;
  margin-top: 40px;
`;
