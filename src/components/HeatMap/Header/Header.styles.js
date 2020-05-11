import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  padding-left: ${({ theme }) => theme.heatmap.dayLabelWidth};
  height: ${({ theme }) => theme.heatmap.headerHeight};
  width: 100%;
`;

const TimeLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-text: center;
  width: ${({ theme }) => theme.heatmap.headerLabelWidth};
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
  font-weight: 500;
`;

export { Wrapper, TimeLabel, Text };
