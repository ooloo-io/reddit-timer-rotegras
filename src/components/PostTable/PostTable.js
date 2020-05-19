import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config, { timezoneDifference } from '../../config';
import Header from './Header';
import {
  Wrapper, Title, Row, Cell, Link,
} from './PostTable.styles';

const { linkPrefix } = config.postTable;

function PostTable({ activeCell, data }) {
  const { day, hour } = activeCell;

  const TIME_TO_MILISECONDS = 1000;
  const timeToUserTimezone = (utcTime) => (
    new Date((utcTime + timezoneDifference) * TIME_TO_MILISECONDS).getMinutes()
  );
  const compareCreationTime = (a, b) => (
    timeToUserTimezone(a.created_utc) - timeToUserTimezone(b.created_utc)
  );

  const posts = (day > -1 && day !== null)
    ? [...data[day][hour]].sort(compareCreationTime)
    : false;

  const Table = () => (
    posts.map((post) => (
      <Row key={post.id}>
        <Cell cellName="title">
          <Link
            href={`${linkPrefix}${post.permalink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {post.title}
          </Link>
        </Cell>
        <Cell cellName="time">
          {
            new Date((post.created_utc + timezoneDifference) * TIME_TO_MILISECONDS)
              .toLocaleString('en-US', {
                hour: 'numeric', minute: 'numeric', hour12: true,
              }).toLowerCase()
          }
        </Cell>
        <Cell cellName="score">
          {post.num_comments}
        </Cell>
        <Cell cellName="comments">
          {post.score}
        </Cell>
        <Cell cellName="author">
          {
            post.author
              ? (
                <Link
                  href={`${linkPrefix}/user/${post.author}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post.author}
                </Link>
              )
              : '[deleted]'
          }
        </Cell>
      </Row>
    ))
  );

  return (
    <Wrapper>
      {
        posts.length > 0 && (
          <>
            <Title> Posts </Title>
            <Header />
            <Table />
          </>
        )
      }
    </Wrapper>
  );
}

PostTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  activeCell: PropTypes.shape(PropTypes.object.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  activeCell: state.activeCell,
});


export default connect(mapStateToProps)(PostTable);
