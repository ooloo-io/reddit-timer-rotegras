import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${(props) => {
    return props.children < 10
      ? props.theme.heatMapColors[`color${props.children}`]
      : props.theme.heatMapColors.color10;
  }};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.textsize.small};
  font-weight: 700;
`;


export { Wrapper };
