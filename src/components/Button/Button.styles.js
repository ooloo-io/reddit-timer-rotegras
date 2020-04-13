import { Link } from 'react-router-dom';
import Styled from 'styled-components';


const StyledButton = Styled(Link)`
  background: ${({ theme }) => theme.colors.buttonBg};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.textsize.small};
  font-weight: 500;
  height: 36px;
  text-transform: uppercase;
  padding: 10px 15px 10px 17px;
`;


export default StyledButton;
