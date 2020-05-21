import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.heatmap.width};
  margin-bottom: 31px;
  margin-top: 50px;
`;


export { Wrapper };
