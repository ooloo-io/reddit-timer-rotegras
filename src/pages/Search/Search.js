import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import config from '../../config';
import Page from '../../components/Page';
import InputForm from '../../components/InputForm';
import Headline from '../../components/Headline';
import Spinner from '../../components/Spinner';

export default function Search() {
  const { slug } = useParams();

  const [data, setData] = useState([]);
  const [loading, toggleLoading] = useState(false);
  const [errorMessage, setError] = useState('');

  let count = 0;
  let after = '';
  const loopData = [];

  const fetchData = () => {
    const url = `${config.api_url}/r/${slug}.json?&after=${after}&limit=100`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        toggleLoading(true);
        after = json.data.after;
        loopData.push(...json.data.children);
      })
      .then(() => {
        if (count < 4) {
          fetchData(url);
          count += 1;
          return;
        }
        setData(loopData);
        toggleLoading(false);
      })
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    fetchData();
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

    </Page>
  );
}
