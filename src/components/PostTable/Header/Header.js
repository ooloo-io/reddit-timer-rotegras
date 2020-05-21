import React from 'react';
import {
  Row, Cell,
} from './Header.styles';


export default function Header() {
  return (
    <Row>
      <Cell cellName="title">
        Title
      </Cell>
      <Cell cellName="time">
        Time Posted
      </Cell>
      <Cell cellName="score">
        Score
      </Cell>
      <Cell cellName="comments">
        Comments
      </Cell>
      <Cell cellName="author">
        Author
      </Cell>
    </Row>
  );
}
