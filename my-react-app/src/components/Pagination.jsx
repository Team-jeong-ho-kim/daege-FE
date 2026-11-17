import styled from "@emotion/styled";
import { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

export default function Pagination({ totalPages, pageNum, setPageNum }) {
  const startPage = Math.max(1, Math.min(pageNum - 1, totalPages - 2));
  const visiblePages = Array.from(
    { length: Math.min(3, totalPages) },
    (_, index) => startPage + index,
  );
  return (
    <>
      <div>
        <Page className="foot-page">
          {pageNum > 1 && <Before onClick={() => setPageNum(pageNum - 1)} />}

          {visiblePages.map((page) => (
            <PageBtn
              key={page}
              $selected={pageNum === page}
              onClick={() => setPageNum(page)}
            >
              {page}
            </PageBtn>
          ))}

          {pageNum < totalPages && (
            <Next onClick={() => setPageNum(pageNum + 1)} />
          )}
        </Page>
      </div>
    </>
  );
}

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 16px 16px 0 16px;
`;
const PageBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eb5757;
  border-radius: 50%;
  padding: 4px;
  min-width: 35px;
  min-height: 35px;
  background: none;
  cursor: pointer;
  font-weight: bold;
  background-color: ${(props) => (props.$selected ? "#eb5757" : "white")};
`;

const Next = styled(MdNavigateNext)`
  width: 24px;
  height: 24px;
  color: #555;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

const Before = styled(MdNavigateBefore)`
  width: 24px;
  height: 24px;
  color: #555;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;
