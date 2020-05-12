import styled, { keyframes } from 'styled-components';


const Spin = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
`;

const Wrapper = styled.div`
  margin-top: 48px;
  width: 71px;
  height: 71px;
  animation: ${Spin} 1.5s linear infinite;
`;


export { Wrapper };
