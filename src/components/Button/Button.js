import styled from 'styled-components';
import colors from '../../utils/colors';


const Button = styled.button`
  height: 70px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  display: flex;
  width: ${({width}) => width};
  background: ${colors.primary};
  border-radius: 50px;
  border: none;
  color: ${colors.white};
  font-size: 1em;
  font-weight: 900;
  transition: box-shadow .3s ease;
  cursor: pointer;
  
  :hover {
    box-shadow: 0 10px 20px -15px red;
  }
`;

export default Button;