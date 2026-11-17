import styled from "@emotion/styled";
import likeIcon from "../assets/like.svg";
import likedIcon from "../assets/like-fill.svg";
import commentIcon from "../assets/comment.svg";
import { useState } from "react";

export default function post({ title, name, major, onClick }) {
  const [likeCount, likeSetCount] = useState(0);
  const [commentCount, commentSetCount] = useState(0);
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (
    <>
      <Post>
        <span onClick={onClick}>
          <Posthead>
            <div>
              <span>최재우</span>
              <span>/</span>
              <span>FE</span>
            </div>
            <span>{`${year}-${month}-${day}`}</span>
          </Posthead>
          <Title>{title}</Title>
        </span>
        <Postfoot>
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
            <Align>
              <img
                src={likeCount ? likedIcon : likeIcon}
                alt="좋아요 아이콘"
                width="24"
                height="24"
              ></img>
              {likeCount}
            </Align>
          </li>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M4.592 15.304C2.344 9.787 6.403 3.75 12.36 3.75h.321a8.07 8.07 0 0 1 8.068 8.068a8.98 8.98 0 0 1-8.982 8.982h-7.82a.75.75 0 0 1-.47-1.335l1.971-1.583a.25.25 0 0 0 .075-.29zM12.36 5.25c-4.893 0-8.226 4.957-6.38 9.488l.932 2.289a1.75 1.75 0 0 1-.525 2.024l-.309.249h5.689a7.48 7.48 0 0 0 7.482-7.482a6.57 6.57 0 0 0-6.568-6.568z"
              clipRule="evenodd"
            ></path>
          </svg>
          {commentCount}
        </Postfoot>
      </Post>
    </>
  );
}

const Posthead = styled.div`
  display: flex;
  justify-content: space-between;
  color: #a7a7a7;
  margin: 10px;
`;

const Post = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 8px;
  padding: 0px 8px;
  box-sizing: border-box;
  cursor: pointer;
`;

const Postfoot = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 8px 0px;
  list-style: none;
`;
const Align = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Title = styled.h1`
  margin: 10px;
  padding: 8px 10px;
`;
