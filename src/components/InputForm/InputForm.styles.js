import Styled from 'styled-components';


const SearchGroup = Styled.form`
  display: flex;
  align-items: center;
  height: 32px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Input = Styled.input`
  height: 36px;
  width: 371px;
  font-size: ${({ theme }) => theme.textsize.small};
  padding: 0 16px 1px;
  margin: 1px 10px 0;
  border-radius: 2px;
  border: solid 1px ${({ theme }) => theme.colors.greyLight};
`;

const Prefix = Styled.span`
  padding-top: 1px;
  letter-spacing: .4px;
`;


export {
  Input,
  SearchGroup,
  Prefix,
};
