import styled from 'styled-components';


const Row = styled.div`
  display: flex;
  width: ${({ theme }) => theme.postTable.width};
  border-top: 1px solid ${({ theme }) => theme.colors.postTableBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.postTableBorder};
  color: ${({ theme }) => theme.colors.black};
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid ${({ theme }) => theme.colors.postTableBorder};
  border-bottom: 1px solid ${({ theme }) => theme.colors.postTableBorder};
  height: ${({ theme }) => theme.postTable.rowHeight};
  padding: ${({ theme }) => theme.postTable.padding.tableCell};
  letter-spacing: .6px;
  align-text: left;
  font-size: ${({ theme }) => theme.textsize.smaller};
  font-weight: 500;
  box-sizing: border-box;
  width: ${(props) => props.theme.postTable.cellWidth[props.cellName]};
`;


export { Row, Cell };
