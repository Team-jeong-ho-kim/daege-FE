import Post from "./components/post.jsx";
import styled from "@emotion/styled";
import Header from "./components/header.jsx";
import DropMenu from "./components/DropMenu.jsx";
import Footer from "./components/Pagination.jsx";
import PlusBtn from "./assets/plus.svg";
import Cancel from "./assets/cancel.svg";
import { useEffect, useState } from "react";
import Create from "./assets/write.svg";
import Templete from "./assets/copy-plus.svg";
import { useNavigate } from "react-router-dom";
import { getPosts, getPost } from "./utils/posts.js";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const navigate = useNavigate();
  const postsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(posts.length / postsPerPage));
  const startIndex = (pageNum - 1) * postsPerPage;

  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  useEffect(() => {
    const data = getPosts();
    setPosts(data);
  }, []);

  // useEffect(() => {
  //   async function PostLoad() {
  //     try {
  //       const response = await fetch("/posts");

  //       if (!response.ok) {
  //         throw new Error("게시글 목록을 불러오지 못했습니다.");
  //       }

  //       const data = await response.json();
  //       setPosts(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   PostLoad();
  // }, []);

  return (
    <>
      {isOpen && <Blur />}
      <Header />
      <Body isOpen={isOpen}>
        <Container>
          <Padding>게시판</Padding>
          <Menu>{posts.length === 0 ? null : <DropMenu />}</Menu>
          <PostList>
            {posts.length === 0 ? (
              <EmptyState>게시글이 없습니다</EmptyState>
            ) : (
              currentPosts.map((post) => (
                <Post
                  key={post.id}
                  title={post.title}
                  onClick={() => navigate(`/post/${post.id}`)}
                />
              ))
            )}
          </PostList>
          <Plus>
            <Align
              style={{ display: isOpen ? "flex" : "none" }}
              onClick={() => navigate("/templete/id")}
            >
              템플릿 생성
              <Border
                src={Templete}
                alt="templete"
                width="24px"
                height="24px"
              />
            </Align>
            <Align
              style={{ display: isOpen ? "flex" : "none" }}
              onClick={() => navigate("/templete")}
            >
              게시글 작성
              <Border
                src={isOpen ? Create : null}
                alt="create"
                width="24px"
                height="24px"
              />
            </Align>
            <Btn
              src={isOpen ? Cancel : PlusBtn}
              alt="plus menu"
              width="24px"
              height="24px"
              onClick={() => setIsOpen(!isOpen)}
            />
          </Plus>
          <Footer
            pageNum={pageNum}
            setPageNum={setPageNum}
            totalPages={totalPages}
          />
        </Container>
      </Body>
    </>
  );
}
const Body = styled.div`
  background-color: #fce7e3;
  min-height: 110vh;
`;
const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
const Container = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 8px 16px;
`;
const Padding = styled.h1`
  padding-top: 80px;
  margin: 0;
`;

const Plus = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  position: fixed;
  right: 3em;
  bottom: 3em;
  z-index: 2;
  gap: 12px;
`;
const Blur = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const Border = styled.img`
  border-radius: 50%;
  background-color: white;
  padding: 12px;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 5px #e0e0e0;
  }
`;

const Align = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: white;
  cursor: pointer;
`;
const Btn = styled.img`
  background-color: #eb5757;
  border-radius: 50%;
  padding: 12px;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 5px #ff8181;
  }
`;

const EmptyState = styled.h1`
  text-align: center;
  color: gray;
`;
