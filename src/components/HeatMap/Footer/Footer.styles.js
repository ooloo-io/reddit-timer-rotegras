import styled from 'styled-components';


const Text = styled.div`
  font-size: ${({ theme }) => theme.textsize.smaller};
  margin-top: 14px;
  letter-spacing: 0.7px;
`;

const Bold = styled.span`
  font-weight: 700;
  letter-spacing: 0.7px;
`;


export { Text, Bold };
