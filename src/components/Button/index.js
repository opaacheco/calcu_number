import { ButtonContainer } from "./styles";

const Button = ({ lable, onClick }) => {
  return <ButtonContainer onClick={onClick}>{lable}</ButtonContainer>;
};

export default Button;
