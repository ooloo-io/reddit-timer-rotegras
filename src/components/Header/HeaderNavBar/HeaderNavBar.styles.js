import styled from 'styled-components';
import { Link } from 'react-router-dom';


const NavBarWrapper = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
`;

const LinkWrapper = styled(Link)`
  font-size: ${({ theme }) => theme.textsize.body};
  color: ${({ theme }) => theme.colors.grayDark};
  margin: 1px 0 0 26px;

  &:first-child {
    margin-right: .25px;
  }
`;


export { NavBarWrapper, LinkWrapper };
