import { Link } from 'react-router-dom';
import Styled from 'styled-components';


const Button = Styled(Link)`
  background: ${({ theme }) => theme.colors.buttonBg};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.textsize.small};
  font-weight: 500;
  height: 36px;
  line-height: 2.75;
  text-transform: uppercase;
  padding: 0 16px;
`;


export default Button;
