import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  padding: 0 250px;
`;

const LinkWrapper = styled(Link)`
  font-size: ${({ theme }) => theme.textsize.smaller};
  color: ${({ theme }) => theme.colors.grayDark};
  letter-spacing: .6px;

  &:last-child {
    padding-bottom: 3px;
  };
`;

const LogoWrapper = styled(Link)`
    margin-left: 56px;
    margin-top: 1px;
`;


export { Wrapper, LinkWrapper, LogoWrapper };
