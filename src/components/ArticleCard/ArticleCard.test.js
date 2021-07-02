import React from 'react';
import { shallow } from 'enzyme';

import ArticleCard from './ArticleCard';

describe('ArticleCard', () => {
  const defaultProps = {
    img: 'https://www.google.lt/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png',
    title: 'test title',
    description: 'test description',
    publishedAt: '2021-07-02T08:00:00Z',
    url: 'https://www.google.lt',
  };
  const createWrapper = () => shallow(<ArticleCard
    img={defaultProps.img}
    title={defaultProps.title}
    description={defaultProps.description}
    publishedAt={defaultProps.publishedAt}
    url={defaultProps.url}
  />);

  it('Should render a title', () => {
    const wrapper = createWrapper();
    expect(wrapper.find('.title').text()).toEqual(defaultProps.title);
  });

  it('Should render an img', () => {
    const wrapper = createWrapper();
    expect(wrapper.find('.image').exists()).toBe(true);
  });

  it('Should render a description', () => {
    const wrapper = createWrapper();
    expect(wrapper.find('.description').text()).toEqual(defaultProps.description);
  });

  it('Should render a time when an article was published', () => {
    const wrapper = createWrapper();
    const testAlteredDate = '2021-07-02 08:00:00';
    expect(wrapper.find('.published-at').text()).toEqual(testAlteredDate);
  });

  it('Should render anchor link', () => {
    const wrapper = createWrapper();
    expect(wrapper.find('a').exists()).toBe(true);
  });
});
