import styled from "styled-components";

const Main = styled.main`
  background-color: #1b2029;
  min-height: 100vh;
  display: flex;
  padding-left: 5%;

  @media (max-width: 930px) {
    flex-direction: column;
  }
`;

export default Main;
