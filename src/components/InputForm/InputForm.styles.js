import Styled from 'styled-components';


const SearchGroup = Styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 502px;
  height: 32px;
  margin-top: 20px;
`;

const Input = Styled.input`
  height: 36px;
  width: 370px;
  font-size: ${({ theme }) => theme.textsize.small};
  padding: 0 16px 1px;
  margin: 1px 7px 0;
  border-radius: 2px;
  border: solid 1px ${({ theme }) => theme.colors.greyLight};
`;

const Prefix = Styled.span`
  width: 20px;
  height: 32px;
  line-height: 32px;
  vertilcal-align: middle;
  padding-top: 1px;
`;


export {
  Input,
  SearchGroup,
  Prefix,
};
