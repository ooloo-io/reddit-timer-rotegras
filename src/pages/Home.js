import React from 'react';
import Button from '../components/Button';
import Table from '../components/Table';

export default function Home() {
  return (
    <section className="page">
      <h1>
        No reactions to your Reddit posts?
      </h1>
      <div className="subtitle">
        Great timing, great results! Find the best time to post on your subreddit.
      </div>
      <Button
        text="SHOW ME THE BEST TIME"
      />
      <Table />
    </section>
  );
}
