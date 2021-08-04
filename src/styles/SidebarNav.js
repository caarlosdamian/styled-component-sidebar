import styled from "styled-components";
import Sidebar from "../components/Sidebar";

export default styled.nav`
  width: 250px;
  background: #12171c;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({sidebar})=> (sidebar?'0':'-100%')};
  transition: 500ms;
  z-index: 10;
`;
