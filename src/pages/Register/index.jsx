import LeftSide from "../../styles/LeftSide";
import { RiErrorWarningFill } from "react-icons/ri";
import Main from "../../styles/main";
import RightSide from "../../styles/RightSide";
import promotion from "../../assets/images/promotion.svg";
import facebook from "../../assets/images/facebook.png";
import google from "../../assets/images/google.png";
import linkedin from "../../assets/images/linkedin.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

const Register = ({ setAutenticado }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    name: yup
      .string()
      .required("Nome obrigatório")
      .max(18, "máximo de 18 caracteres"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "minímo de 8 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&.*])(?=.{8,})/,
        "a senha precisa conter pelos menos um caracter maiúsculo, outro minúsculo, um número e um caracter especial"
      ),
    confirmPassword: yup
      .string()
      .required("Senha obrigatória")
      .oneOf([yup.ref("password"), null], "senhas precisam ser iguais"),
  });

  const onSubmitFunction = (data) => {
    setAutenticado(true);
    history.push(`/welcome/${data.name}`);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Main>
      <LeftSide>
        <h1>Create Account</h1>
        <div className="container">
          <div className="socialMedias">
            <div className="images">
              <a href="https://www.google.com.br/">
                <img src={google} alt="" />
              </a>
              <a href="https://www.facebook.com/">
                <img src={facebook} alt="" />
              </a>
              <a href="https://www.linkedin.com/">
                <img src={linkedin} alt="" />
              </a>
            </div>
            <div className="or">
              <div className="bar"></div>
              <span>OR</span>
              <div className="bar"></div>
            </div>
          </div>

          <form action="" onSubmit={handleSubmit(onSubmitFunction)}>
            <label>
              <h3>Name</h3>
              <input type="text" {...register("name")} />
              <div className="error">
                {errors.name && (
                  <>
                    <RiErrorWarningFill /> {errors.name.message}
                  </>
                )}
              </div>
            </label>

            <label>
              <h3>Email</h3>
              <input type="email" {...register("email")} />
              <div className="error">
                {errors.email && (
                  <>
                    <RiErrorWarningFill /> {errors.email.message}
                  </>
                )}
              </div>
            </label>

            <label>
              <h3>Password</h3>
              <input type="password" {...register("password")} />
              <div className="error">
                {errors.password && (
                  <>
                    <RiErrorWarningFill /> {errors.password.message}
                  </>
                )}
              </div>
            </label>

            <label>
              <h3>Confirm Password</h3>
              <input type="password" {...register("confirmPassword")} />
              <div className="error">
                {errors.confirmPassword && (
                  <>
                    <RiErrorWarningFill /> {errors.confirmPassword.message}
                  </>
                )}
              </div>
            </label>

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </LeftSide>
      <RightSide>
        <div>
          <div className="background"></div>
          <img src={promotion} alt="" />
        </div>
      </RightSide>
    </Main>
  );
};

export default Register;
