import styled from 'styled-components';


const Wrapper = styled.div`
  margin-bottom: 45px;
`;

const Row = styled.div`
  display: flex;
  width: ${({ theme }) => theme.postTable.width};
  color: ${({ theme }) => theme.postTable.headerColor};
  border-right: 1px solid ${({ theme }) => theme.postTable.borderColor};
`;

const Cell = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-left: 1px solid ${({ theme }) => theme.postTable.borderColor};
  border-bottom: 1px solid ${({ theme }) => theme.postTable.borderColor};
  height: ${({ theme }) => theme.postTable.rowHeight};
  padding: ${({ theme }) => theme.postTable.padding.tableCell};
  width: ${(props) => props.theme.postTable.cellWidth[props.cellName]};
  box-sizing: border-box;
  letter-spacing: .5px;
  font-size: ${({ theme }) => theme.textsize.smaller};
  font-weight: 400;
  text-align: left;
`;

const Link = styled.a`
  font-size: ${({ theme }) => theme.textsize.smaller};
  font-weight: 400;
  align-text: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 0;
  margin-right: auto;
`;

const Title = styled.h2`
  width: ${({ theme }) => theme.postTable.width};
  font-weight: 500;
  text-align: left;
  margin-top: 0;
  margin-bottom: 12px;
`;


export {
  Wrapper, Title, Row, Cell, Link,
};
