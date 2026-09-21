import styled from "@emotion/styled";
import likeIcon from "../assets/like.svg";
import commentIcon from "../assets/comment.svg";
import { useState } from "react";

export default function post({ title, name, major }) {
  const [likeCount, likeSetCount] = useState(0);
  const [commentCount, commentSetCount] = useState(0);
  return (
    <>
      <Post>
        <Posthead>
          <div>
            <span>{name}</span>
            <span>/</span>
            <span>{major}</span>
          </div>
          <span>2026-09-07</span>
        </Posthead>
        <h1 style={{ margin: "10px 0" }}>{title}</h1>
        <Postfoot>
          <img src={likeIcon} alt="좋아요 아이콘" width="24" height="24"></img>
          {likeCount}
          <li
            onClick={() => {
              if (likeCount != true) {
                likeSetCount((prev) => prev + 1);
              } else {
                likeSetCount((prev) => prev - 1);
              }
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4.592 15.304C2.344 9.787 6.403 3.75 12.36 3.75h.321a8.07 8.07 0 0 1 8.068 8.068a8.98 8.98 0 0 1-8.982 8.982h-7.82a.75.75 0 0 1-.47-1.335l1.971-1.583a.25.25 0 0 0 .075-.29zM12.36 5.25c-4.893 0-8.226 4.957-6.38 9.488l.932 2.289a1.75 1.75 0 0 1-.525 2.024l-.309.249h5.689a7.48 7.48 0 0 0 7.482-7.482a6.57 6.57 0 0 0-6.568-6.568z"
                clipRule="evenodd"
              ></path>
            </svg>
          </li>
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
`;

const Post = styled.div`
  width: 50%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0px 10px;
  margin: 0 auto;
`;

const Postfoot = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 5px 0px;
`;
