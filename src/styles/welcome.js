import styled from "styled-components";

const StyledWelcome = styled.main`
  background-color: #1b2029;
  min-height: 100vh;
  display: flex;
  padding-left: 5%;
  align-items: center;
  gap: 0px 200px;
  padding: 30px;
  h1 {
    color: #fff;
    font-size: 70px;
  }

  img {
    max-width: 650px;
    width: 100%;
  }

  @media (max-width: 1400px) {
    flex-direction: column-reverse;
    gap: 50px;
    justify-content: space-around;

    h1 {
      font-size: 3.8em;
    }
  }
`;

export default StyledWelcome;
