import styled from "styled-components";

const LeftSide = styled.section`
  max-width: 452px;
  width: 100%;
  height: 100%;

  h1 {
    color: #897ff7;
    font-weight: 800;
    font-size: 50px;
    margin-top: 50px;
    text-align: center;
  }

  .container {
    width: 100%;
    padding: 20px 50px 0px;
  }

  .socialMedias {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .images {
    display: flex;
    justify-content: space-around;
  }

  .or {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }

  .or .bar {
    flex: 1;
    height: 1px;
    background-color: #52565d;
  }

  .or span {
    width: 80px;
    text-align: center;
    color: #52565d;
    font-weight: 500;
    font-size: 22px;
  }

  .images img {
    width: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  form label {
    margin-bottom: 16px;
  }

  form label h3 {
    color: #fff;
    margin-bottom: 20px;
  }

  form label input {
    width: 100%;
    padding: 14px;
    border-radius: 13px;
    background-color: #161923;
    border: 2px solid #121621;
    color: #fff;
    font-weight: 400px;
  }

  form button {
    margin-bottom: 50px;
    width: 122px;
    padding: 16px;
    background-color: #6c61f6;
    border: 1px solid #6c61f6;
    border-radius: 45px;
    color: #fff;
    align-self: center;
    font-size: 18px;
    font-weight: 600;
  }

  .error {
    color: #897ff7;
    margin-top: 10px;
  }

  @media (max-width: 930px) {
    margin-bottom: 40px;
  }
`;

export default LeftSide;
