import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { getArticles, logData } from '../api/api';
import ArticleCard from '../components/ArticleCard';
import SearchBar from '../components/SearchBar';
import './MainContainer.scss';

const MainContainer = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [articles, setArticles] = useState([]);
  const [hasLoaded, setHasLoaded] = useState();
  const [validationError, setValidationError] = useState('');

  const noMatchesString = 'There were no matches found with the given keyword';

  const validate = (string) => {
    if (!string.match(/^[a-z\ds]+$/i)) {
      setValidationError('Only alphanumeric characters are allowed');
    }
    if (string.length >= 40) {
      setValidationError('Only 40 characters allowed');
    }
  };

  const onInputChange = (event) => {
    setValidationError('');
    if (event.target.value) {
      validate(event.target.value);
    }
    setSearchKeyword(event.target.value);
  };

  const onSearchSubmit = async (keyword) => {
    setHasLoaded(false);
    try {
      const response = await getArticles.get('', {
        params: {
          q: keyword,
        },
      });
      logData(keyword, 'keywords');
      setArticles(response.data.articles);
      setHasLoaded(true);
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = () => {
    onSearchSubmit(searchKeyword);
  };

  return (
    <div className="main-container">
      <div className="search-bar-container">
        {validationError && <p className="validation-error-message">{validationError}</p>}
        <SearchBar
          id="search-input"
          searchKeyword={searchKeyword}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          hasError={!!validationError}
        />
        {!articles.length && hasLoaded && (
          <div className="no-matches-message">
            {noMatchesString}
          </div>
        )}
      </div>
      <div className="articles-grid">
        {articles && articles.map((article) => (
          <ArticleCard
            key={nanoid()}
            title={article.title}
            description={article.description}
            img={article.image}
            publishedAt={article.publishedAt}
            url={article.url}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
