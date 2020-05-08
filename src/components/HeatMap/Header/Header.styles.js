import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  padding-left: 154px;
  height: 54px;
  width: 100%;
`;

const TimeLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-text: center;
  width: 80px;
  height: 100%;
  background-image: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.backgroundBottom} 0%,
    ${({ theme }) => theme.colors.backgroundTop} 50%
  );
`;

const Text = styled.span`
  margin-top: 2px;
  margin-left: 1px;
  color: ${(props) => props.theme.colors.grayDarker};
  letter-spacing: .5px;
  font-size: ${(props) => props.theme.textsize.smaller};
`;

export { Wrapper, TimeLabel, Text };
