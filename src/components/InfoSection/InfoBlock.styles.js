import styled from 'styled-components';


const StyledBlock = styled.section`
  width: 758px;
  margin: 53px auto 17px;
  padding: 0 0 0 10px;
  text-align: left;
  border: 1px solid transparent;

  &:last-child {
    margin-bottom: 96px;
  }
`;

const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.textsize.medium};
  /* font-weight: 400; */
  margin: 30px auto 13px 0;
`;


export { StyledBlock, StyledTitle };
