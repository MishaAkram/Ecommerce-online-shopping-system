import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterProducts } from '../../../store/actions';
import '../Navigation.scss';

import NavigationItem from './NavigationItem';

const femaleCategories = [
  {
    category: 'female',
    content: 'Women',
    linkType: 'main'
  },
  {
    category: 'kurtis',
    content: 'Kurtis'
  },
  {
    category: 'stitched',
    content: 'Stitched Dresses',
  },
  {
    category: 'un-stitched',
    content: 'Unstitched Dresses',
  },
  
  {
    category: 'accessories',
    content: 'Accessories',
    linkType: 'main'
  },
  {
    category: 'bracelets',
    content: 'Bracelets',
  },
  {
    category: 'earings',
    content: 'Earings',
  },
  {
    category: 'footware',
    content: 'Footware',
  },
  {
    category: 'stoles',
    content: 'Stoles',
  },

];

const sideNavigation = ({ filterProducts, children }) => (
  <nav className="side-navigation">
    <ul className="side-navigation-list">
      {femaleCategories.map(femaleCategory => {
        const { category, linkType, content } = femaleCategory;

        return (
          <NavigationItem
            key={category}
            clicked={() => filterProducts(category)}
            linkType={linkType}
            link={`/products/${category}`}>
            {content}
          </NavigationItem>
        )
      })}
      {children}
    </ul>
  </nav>
);

sideNavigation.propTypes = {
  filterProducts: PropTypes.func.isRequired
};

export default connect(null, { filterProducts })(sideNavigation);