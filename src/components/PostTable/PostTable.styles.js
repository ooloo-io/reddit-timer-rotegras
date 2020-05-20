import styled from 'styled-components';


const Wrapper = styled.div`
  margin-bottom: 45px;
`;

const Row = styled.div`
  display: flex;
  width: ${({ theme }) => theme.postTable.width};
  color: ${({ theme }) => theme.postTable.headerColor};
  border-right: 1px solid ${({ theme }) => theme.colors.postTableBorder};
`;

const Cell = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-left: 1px solid ${({ theme }) => theme.colors.postTableBorder};
  border-bottom: 1px solid ${({ theme }) => theme.colors.postTableBorder};
  height: ${({ theme }) => theme.postTable.rowHeight};
  padding: ${({ theme }) => theme.postTable.padding.tableCell};
  width: ${(props) => props.theme.postTable.cellWidth[props.cellName]};
  box-sizing: border-box;
  letter-spacing: .5px;
  font-size: ${({ theme }) => theme.textsize.smaller};
  font-weight: 400;
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
`;

const Link = styled.a`
  font-size: ${({ theme }) => theme.textsize.smaller};
  color: ${({ theme }) => theme.colors.link};
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 0;
  margin-right: auto;
`;

const Title = styled.h2`
  width: ${({ theme }) => theme.postTable.width};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  text-align: left;
  margin-top: 0;
  margin-bottom: 12px;
`;


export {
  Wrapper, Title, Row, Cell, Link,
};
