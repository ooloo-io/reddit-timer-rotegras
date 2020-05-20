import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../../config';
import Header from './Header';
import {
  Wrapper, Title, Row, Cell, Link,
} from './PostTable.styles';

const { linkPrefix } = config.postTable;

function PostTable({ activeCell, groupedPosts }) {
  const { day, hour } = activeCell;

  const TIME_TO_MILISECONDS = 1000;
  const NO_AUTHOR = '[deleted]';

  const compareCreationTime = (a, b) => (
    a.created_utc - b.created_utc
  );

  const formatTimePosted = (creationTime) => {
    const visitorTime = new Date(creationTime * TIME_TO_MILISECONDS)
      .toLocaleString('en-US', {
        hour: 'numeric', minute: 'numeric', hour12: true,
      }).toLowerCase();
    return visitorTime;
  };

  const posts = (day !== null)
    ? [...groupedPosts[day][hour]].sort(compareCreationTime)
    : [];

  if (posts.length === 0) {
    return null;
  }

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
            formatTimePosted(post.created_utc)
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
            post.author === NO_AUTHOR
              ? NO_AUTHOR
              : (
                <Link
                  href={`${linkPrefix}/user/${post.author}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post.author}
                </Link>
              )
          }
        </Cell>
      </Row>
    ))
  );

  return (
    <Wrapper>
      <Title> Posts </Title>
      <Header />
      <Table />
    </Wrapper>
  );
}

PostTable.propTypes = {
  groupedPosts: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  activeCell: PropTypes.shape(PropTypes.object.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  groupedPosts: state.groupedPosts,
  activeCell: state.activeCell,
});


export default connect(mapStateToProps)(PostTable);
