import StyledWelcome from "../../styles/welcome";
import promotion from "../../assets/images/promotion.svg";
import { Redirect, useParams } from "react-router-dom";

const Welcome = ({ autenticado }) => {
  const params = useParams();

  if (!autenticado) {
    return <Redirect to={"/"} />;
  }

  return (
    <StyledWelcome>
      <img src={promotion} alt="" />
      <h1>Welcome {params.name}!!!</h1>
    </StyledWelcome>
  );
};

export default Welcome;
