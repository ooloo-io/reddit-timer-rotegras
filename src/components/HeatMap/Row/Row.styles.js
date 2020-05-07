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
  background: black;
  color: white;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.backgroundDark};
  font-size: ${(props) => props.theme.textsize.small};
`;


export { Wrapper, RowName };
