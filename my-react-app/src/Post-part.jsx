import TextSet from "./components/TextSet.jsx";
import styled from "@emotion/styled";
import Header from "./components/header.jsx";
import Text from "./components/TextInput.jsx";
import Profile from "./assets/profile.svg";
import Back from "./assets/left-arrow.svg";
import { useState } from "react";
import { data, useLocation, useNavigate, useParams } from "react-router-dom";
import Templete from "./Templete.jsx";

export default function Post({ onChange }) {
  const [selected, setSelected] = useState("");
  const { id } = useParams();
  const [isPosted, setIsPosted] = useState(false);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState([]);

  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const handleContentChange = (index, value, contentTitle) => {
    setContents((prev) => {
      const next = [...prev];
      next[index] = {
        title: contentTitle,
        value: value,
      };
      return next;
    });
  };

  // async function PostUp() {
  //   try {
  //     const response = await fetch("/board", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         title: title,
  //         contents: contents,
  //         Templete: id,
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("게시글 저장 실패");
  //     }
  //     const data = await response.json();

  //     navigate(`/post/${data.id}`);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  function PostUp() {
    try {
      const posts = JSON.parse(localStorage.getItem("posts")) || [];

      const newPost = {
        id: Date.now(),
        title: title,
        contents: contents,
        Templete: id,
        date: `${year}-${month}-${day}`,
      };

      posts.push(newPost);

      localStorage.setItem("posts", JSON.stringify(posts));

      navigate(`/post/${newPost.id}`);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(selected);

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          PostUp();
        }}
      >
        <TitleSection>
          <TitleContainer>
            <Label htmlFor="Title">
              제목<Required>*</Required>
            </Label>
            <TitleInput
              placeholder="제목을 입력해주세요"
              id="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </TitleContainer>
        </TitleSection>
        <ProfileContainer>
          <img src={Profile} />
          <Info>
            <Name>
              <span>최재우</span>
              <Major>FE</Major>
            </Name>
            <Dates>{`${year}-${month}-${day}`}</Dates>
          </Info>
        </ProfileContainer>
        <BorderLine />
        <Align>
          <Main>
            <TextSet selected={selected} setSelected={setSelected} />
          </Main>
          {id === "0" && (
            <>
              <Text
                title="본문"
                length={1000}
                $active={selected}
                isPosted={isPosted}
                onValueChange={(value) => handleContentChange(0, value, "본문")}
              />
            </>
          )}
          {id === "1" && (
            <>
              <Text
                title="본문"
                length={1000}
                $active={selected}
                isPosted={isPosted}
                onValueChange={(value) => handleContentChange(0, value, "본문")}
              />
            </>
          )}
          {id === "2" && (
            <>
              <Text
                title="8교시"
                length={300}
                $active={selected}
                isPosted={isPosted}
                onValueChange={(value) =>
                  handleContentChange(0, value, "8교시")
                }
              />
              <Text
                title="9교시"
                length={300}
                $active={selected}
                isPosted={isPosted}
                onValueChange={(value) =>
                  handleContentChange(1, value, "9교시")
                }
              />
              <Text
                title="10교시"
                length={300}
                $active={selected}
                isPosted={isPosted}
                onValueChange={(value) =>
                  handleContentChange(2, value, "10교시")
                }
              />
            </>
          )}
          {id === "3" && (
            <>
              <Text
                title="질문"
                length={100}
                $active={selected}
                isPosted={isPosted}
                onValueChange={(value) => handleContentChange(0, value, "질문")}
              />
              <Text
                title="답"
                length={300}
                $active={selected}
                isPosted={isPosted}
                onValueChange={(value) => handleContentChange(1, value, "답")}
              />
              <Text
                title="질문"
                length={100}
                $active={selected}
                isPosted={isPosted}
                onValueChange={(value) => handleContentChange(2, value, "질문")}
              />
              <Text
                title="답"
                length={300}
                $active={selected}
                isPosted={isPosted}
                onValueChange={(value) => handleContentChange(3, value, "답")}
              />
            </>
          )}
        </Align>
        <BorderLine />
        <Align>
          <Btn>
            <SubmitBtn type="submit">게시하기</SubmitBtn>
          </Btn>
        </Align>
      </form>
    </>
  );
}

const HeaderStyle = styled.div`
  background-color: #fce7e3;
`;
const TitleSection = styled.div`
  width: 70%;
  margin: 0 auto;
`;
const BorderLine = styled.hr`
  width: 70%;
`;

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 70%;
`;

const Align = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleInput = styled.input`
  background: none;
  border: none;
  &:focus {
    outline: none;
  }
  font-size: 32px;
  font-weight: bold;
  width: 100%;
  height: 52px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Label = styled.label`
  font-size: 16px;
  color: #8b8b8b;
`;

const Required = styled.span`
  color: red;
  font-size: 16px;
  margin-left: 4px;
`;

const SubmitBtn = styled.button`
  background-color: #eb5757;
  border: none;
  border-radius: 8px;
  padding: 4px;
  width: 8%;
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
  width: 70%;
  margin: 8px;
`;

const ProfileContainer = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  gap: 16px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Dates = styled.span`
  color: #999;
  font-size: 16px;
`;

const Name = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Major = styled.span`
  color: #eb5757;
`;

const BackBtn = styled.img`
  margin: 0 8%;
  padding-top: 24px;
  cursor: pointer;
`;
