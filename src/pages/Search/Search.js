import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import config from '../../config';
import Page from '../../components/Page';
import InputForm from '../../components/InputForm';
import Headline from '../../components/Headline';
import Spinner from '../../components/Spinner';


const limit = '100';
let total = 500;

function fetchData(slugValue, dataArray = [], afterValue = '') {
  let after = afterValue;
  let newAfter = '';
  const loopData = dataArray;

  const url = `${config.api_url}/r/${slugValue}/top.json?&after=${afterValue}&limit=${limit}`;

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      newAfter = json.data.after;

      console.log('after: ', json.data.after);
      console.log(json.data);

      // check to stop loop when equal or null
      if (newAfter !== afterValue && newAfter != null) {
        after = newAfter;
        loopData.push(...json.data.children);
      } else {
        // set to finish loop in next step
        total = loopData.length;
      }
    })
    .then(() => {
      if (loopData.length < total) {
        fetchData(slugValue, loopData, after);
      }
    })
    .catch((error) => console.log(`${error.message}`));

  return loopData;
}

function Search() {
  const { slug } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const newData = fetchData(slug);
    setData(newData);
  }, [slug]);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  return (
    <Page>
      <Headline>
        Find the best time for a subreddit
      </Headline>

      <InputForm search={slug} />

      {
        loading && <Spinner />
      }

      {/* just for test  */}
      {/* not updating */}
      {
        data.map((item, i) => (
          <div key={item.data.title}>
            {i}
            /
            {item.data.title.trim(0, 100)}
            /
            { item.data.subreddit}
          </div>
        ))
      }

    </Page>
  );
}

export default Search;
