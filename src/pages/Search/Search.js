import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Page from '../../components/Page';
import InputForm from '../../components/InputForm';
import Headline from '../../components/Headline';
import Spinner from '../../components/Spinner';
import HeatMap from '../../components/HeatMap';


const NUM_POSTS_TO_FETCH = 500;
const MAX_NUM_POSTS_PER_PAGE = 100;
const MAX_NUM_PAGES = NUM_POSTS_TO_FETCH / MAX_NUM_POSTS_PER_PAGE;

/**
 * The reddit endpoint used to fetch the top posts uses pagination. We can fetch a maximum
 * number of 100 posts per page. In order to fetch the first 500 posts we use this recursive
 * function. Until the last page or the required number of posts has been reached we continue
 * to fetch more posts.
 *
 * @param {string} subredditName the name of the subreddit
 * @param {string} after the id of the last post used for pagination
 * @param {number} page the current page being fetched
 */

async function fetchPosts(subredditName, after = null, page = 1) {
  let url = `https://www.reddit.com/r/${subredditName}/top.json?t=year&limit=${MAX_NUM_POSTS_PER_PAGE}`;
  if (after) {
    url += `&after=${after}`;
  }

  const response = await fetch(url);
  const { data } = await response.json();

  const posts = data.children;
  const isLastPage = data.dist < MAX_NUM_POSTS_PER_PAGE;
  const requiredNumOfPostsReached = page === MAX_NUM_PAGES;

  if (isLastPage || requiredNumOfPostsReached) {
    return posts;
  }

  const nextPosts = await fetchPosts(subredditName, data.after, page + 1);
  return posts.concat(nextPosts);
}


function Search() {
  const { slug } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    fetchPosts(slug)
      .then((posts) => setData(posts))
      .then(() => setLoading(false))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error.message));
  }, [slug]);

  return (
    <Page>
      <Headline>
        Find the best time for a subreddit
      </Headline>

      <InputForm search={slug} />

      {
        loading && <Spinner />
      }
      {
        !loading && <HeatMap data={data} />
      }
    </Page>
  );
}

export default Search;
