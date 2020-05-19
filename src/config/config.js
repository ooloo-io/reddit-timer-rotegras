const config = {
  defaultReddit: 'javascript',
  api_url: 'https://www.reddit.com/',
  dayLabels: [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
  ],
  postTable: {
    linkPrefix: 'https://reddit.com/',
  },
};

const timezoneDifference = new Date().getTimezoneOffset() * 60;

export { config, timezoneDifference };
