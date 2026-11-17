import { useNavigate, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "./components/header.jsx";
import Profile from "./assets/profile.svg";
import Back from "./assets/left-arrow.svg";
import likeIcon from "./assets/likes.svg";
import likedIcon from "./assets/like-fill.svg";
import { useState } from "react";

export default function Postview({ Date }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [likeCount, likeSetCount] = useState(0);
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  const post = posts.find((item) => String(item.id) === id);

  if (!post) {
    return <p>게시글을 찾을 수 없습니다.</p>;
  }

  return (
    <>
      <HeaderStyle>
        <Header />
      </HeaderStyle>

      <BackBtn src={Back} onClick={() => navigate("/")} />

      <TitleSection>
        <TitleContainer>
          <h1>{post.title}</h1>
        </TitleContainer>
      </TitleSection>

      <ProfileContainer>
        <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src={Profile} />
          <Info>
            <Name>
              <span>최재우</span>
              <Major>FE</Major>
            </Name>
            <Date1>{post.date}</Date1>
          </Info>
        </li>
        <li
          onClick={() => {
            if (likeCount != true) {
              likeSetCount((prev) => prev + 1);
            } else {
              likeSetCount((prev) => prev - 1);
            }
          }}
          style={{ cursor: "pointer" }}
        >
          <Align1>
            <img
              src={likeCount ? likedIcon : likeIcon}
              alt="좋아요 아이콘"
              width="24"
              height="24"
            ></img>
            {likeCount}
          </Align1>
        </li>
      </ProfileContainer>

      <BorderLine />
      <Container>
        <Align>
          <ContentContainer>
            {(Array.isArray(post.contents) ? post.contents : []).map(
              (content, index) => (
                <Content key={index}>
                  <h1 style={{ color: "#eb5757" }}>{content.title}</h1>
                  <p style={{ wordBreak: "break-all" }}>{content.value}</p>
                </Content>
              ),
            )}
          </ContentContainer>
        </Align>
      </Container>
      <BorderLine />

      <Container>
        <Align>
          <Foothead>
            <Title>댓글</Title>
            <Span>2개</Span>
          </Foothead>
          <Footbody>
            <CommentContainer>
              <Comment>
                <img src={Profile} />
                <CommentInfo>
                  <Title>최재우</Title>
                  <Text>댓글 내용입니다.</Text>
                </CommentInfo>
              </Comment>
              <Comment>
                <img src={Profile} />
                <CommentInfo>
                  <Title>최재우</Title>
                  <Text>댓글 내용입니다.</Text>
                </CommentInfo>
              </Comment>
            </CommentContainer>
          </Footbody>
          <Foot>
            <Registration type="text" placeholder="댓글을 입력하세요." />
            <RegistrationBtn>등록</RegistrationBtn>
          </Foot>
        </Align>
      </Container>
    </>
  );
}

const HeaderStyle = styled.div`
  background-color: #fce7e3;
`;
const Align1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;
const Foothead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
const Footbody = styled.div``;
const Foot = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;
const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Comment = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const CommentInfo = styled.div``;

const BackBtn = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin: 0 8%;
  padding-top: 24px;
`;
const TitleSection = styled.div`
  width: 70%;
  margin: 0 auto;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const ProfileContainer = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  gap: 16px;
  justify-content: space-between;
  list-style: none;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date1 = styled.span`
  color: #999;
  font-size: 16px;
`;

const Name = styled.div`
  display: flex;
  gap: 8px;
`;

const Major = styled.span`
  color: #eb5757;
`;

const BorderLine = styled.hr`
  width: 70%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Align = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Content = styled.div`
  margin-bottom: 24px;

  h3 {
    margin-bottom: 8px;
  }

  p {
    white-space: pre-wrap;
  }
`;

const Text = styled.p`
  margin: 0;
`;

const Title = styled.h3`
  margin: 0;
`;

const Registration = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  padding: 0 8px;
  &:focus {
    outline: none;
  }
`;

const RegistrationBtn = styled.button`
  width: 80px;
  height: 40px;
  background-color: #eb5757;
  color: white;
  border: none;
  border-radius: 8px;
`;

const Span = styled.span`
  color: #999;
  font-size: 12px;
`;
