import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.scss';

const SearchBar = ({
  searchKeyword, onInputChange, onSubmit, hasError,
}) => {
  const searchButtonLabel = 'Search';

  return (
    <div className="search-bar">
      <InputGroup className="mb-3">
        <FormControl
          className="search-bar-input"
          placeholder="Search for articles"
          size="lg"
          value={searchKeyword}
          onChange={onInputChange}
          maxLength={40}
        />
        <InputGroup.Append>
          <Button
            type="submit"
            className="search-bar-button"
            size="lg"
            variant="outline-primary"
            onClick={() => onSubmit()}
            disabled={!searchKeyword || hasError}
          >
            {searchButtonLabel}
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

SearchBar.propTypes = {
  searchKeyword: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
};

export default SearchBar;
