import styled from "@emotion/styled";
import Logo from "../assets/logo.png";
import Profile from "../assets/profile.svg";
import { useNavigate } from "react-router-dom";

export default function header() {
  const navigate = useNavigate();
  return (
    <Bg>
      <Align onClick={() => navigate("/")}>
        <img src={Logo} alt="로고" width="48" height="48" />
        <span>
          <strong>대게</strong>
        </span>
      </Align>
      <Align>
        <img src={Profile} alt="profile" width="40" height="40" />
        <span>마이페이지</span>
      </Align>
    </Bg>
  );
}
const Bg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 100px;
  padding: 8px;
`;

const Align = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;
