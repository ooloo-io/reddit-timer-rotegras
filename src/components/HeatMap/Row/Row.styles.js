import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: flex-end;
  flex-grow: 1;
`;

const RowName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 154px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.backgroundDark};
`;

const Text = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.textsize.small};
  letter-spacing: 1.1px;
  margin-left: 5px;
  font-weight: 500;
`;


export { Wrapper, RowName, Text };
