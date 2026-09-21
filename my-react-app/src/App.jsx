import styled from "@emotion/styled";
import Post from "./componets/post.jsx";

export default function App() {
  return (
    <Container>
      <PostList>
        <Post />
        <Post />
        <Post />
        <Post />
      </PostList>
    </Container>
  );
}
const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
