import styled from "styled-components";

const RightSide = styled.section`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: end;
  position: relative;
  .background {
    background: linear-gradient(to left, #6f78a6, #ada2b3);
    max-width: 600px;
    max-height: 700px;
    width: 100%;
    height: 100%;
    border-top-left-radius: 100%;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  img {
    max-width: 650px;
    width: 100%;
    position: absolute;
    right: 200px;
    bottom: 100px;
  }

  @media (max-width: 1450px) {
    .background {
      background: linear-gradient(to left, #6f78a6, #ada2b3);
      max-width: 600px;
      max-height: 700px;
      width: 100%;
      height: 100%;
      border-top-left-radius: 100%;
      float: right;
      right: 0;
      bottom: 0;
    }

    img {
      max-width: 650px;
      width: 100%;
      position: relative;
      right: 0;
      bottom: 0;
    }
  }

  @media (max-width: 930px) {
    img {
    }
  }
`;

export default RightSide;
