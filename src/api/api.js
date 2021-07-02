import axios from 'axios';

const API_KEY = '74fa6d32a4b1f7544858e3c8f79f8fd0';

export const getArticles = axios.create({
  baseURL: `https://gnews.io/api/v4/search?q=example&token=${API_KEY}`,
  params: {
    lang: 'en',
    max: 9,
  },
});

export const logData = (value, endpoint) => {
  axios.post(`http://localhost:5000/${endpoint}`, { data: value });
};
