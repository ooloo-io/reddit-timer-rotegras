import styled from 'styled-components';


const Text = styled.div`
  font-size: ${({ theme }) => theme.textsize.smaller};
  margin-top: 15px;
  letter-spacing: 0.5px;
  padding-left: 2px;
`;

const Bold = styled.span`
  font-weight: 700;
  letter-spacing: 0.5px;
`;


export { Text, Bold };
