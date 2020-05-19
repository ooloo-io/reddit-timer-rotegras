import styled from 'styled-components';


const Row = styled.div`
  display: flex;
  width: ${({ theme }) => theme.postTable.width};
  border-top: 1px solid ${({ theme }) => theme.postTable.borderColor};
  border-right: 1px solid ${({ theme }) => theme.postTable.borderColor};
  color: ${({ theme }) => theme.postTable.headerColor};
  font-weight: 500;
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid ${({ theme }) => theme.postTable.borderColor};
  border-bottom: 1px solid ${({ theme }) => theme.postTable.borderColor};
  height: ${({ theme }) => theme.postTable.rowHeight};
  padding: ${({ theme }) => theme.postTable.padding.tableCell};
  letter-spacing: .6px;
  align-text: left;
  font-size: ${({ theme }) => theme.textsize.smaller};
  font-weight: 600;
  box-sizing: border-box;
  width: ${(props) => props.theme.postTable.cellWidth[props.cellName]};
`;


export { Row, Cell };
