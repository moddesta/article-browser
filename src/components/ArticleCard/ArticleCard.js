import React from 'react';
import PropTypes from 'prop-types';
import { logData } from '../../api/api';

import './ArticleCard.scss';

const ArticleCard = ({
  img, title, description, publishedAt, url,
}) => {
  const publishingDate = `${publishedAt.split('T')[0]} `;
  const publishingTime = publishedAt.split('T')[1].replace('Z', '');
  const published = publishingDate.concat(publishingTime);

  return (
    <a href={url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
      <button
        type="button"
        onClick={() => logData({
          img, title, description, publishedAt, url,
        }, 'articles')}
        className="card-container"
      >
        <div className="image-container">
          <img className="image" src={img} alt="img" />
        </div>
        <div className="content-container">
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
          <p className="published-at">{published}</p>
        </div>
      </button>
    </a>
  );
};
ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ArticleCard;
