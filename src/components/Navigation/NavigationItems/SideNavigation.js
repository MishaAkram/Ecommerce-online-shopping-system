import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterProducts } from '../../../store/actions';
import '../Navigation.scss';
import NavigationItem from './NavigationItem';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { femaleCategories } from '../category';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  link:{
    fontFamily: "ACourier New, monospace",
  }
}));

const SideNavigation = ({ filterProducts}) => {
  const classes = useStyles();
  return (
    <nav className="side-navigation">
      <ul className="side-navigation-list">
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          {femaleCategories.map((femaleCategory, index) => {
            const { category, linkType, content, link } = femaleCategory
            return (
              !link &&
              <NavigationItem
                key={index}
                clicked={() => filterProducts(category)}
                linkType={linkType}
                link={`/products/${category}`}>
                <ListItem button>
                  <ListItemText primary={content} className={classes.link}/>
                  <Divider />
                </ListItem>
              </NavigationItem>
            )
          })}
        </List>
      </ul>
    </nav>
  )
}

SideNavigation.propTypes = {
  filterProducts: PropTypes.func.isRequired
};

export default connect(null, { filterProducts })(SideNavigation);