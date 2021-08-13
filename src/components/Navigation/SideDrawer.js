import React from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { toggleSideDrawer } from '../../store/actions/interfaceActions';
import './Navigation.scss';
import logo from '../../assets/icons/logo.png';
import closeBtnIcon from '../../assets/icons/arrow_left.png';
import NavigationItem from './NavigationItems/NavigationItem';
import Backdrop from '../UI/Backdrop/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { femaleCategories } from './category';
import { filterProducts } from './../../store/actions/productActions';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const SideDrawer = ({ filterProducts, toggleSideDrawer }) => {
  const showSideDrawer = useSelector(state => state.interface.sideDrawerShowed)
  const isAuth = useSelector(state => state.auth.token !== null)

  let attachedClasses = ["side-drawer", "close"];
  if (showSideDrawer) {
    attachedClasses = ["side-drawer", "open"];
  };
  const classes = useStyles();
  return (
    <>
      <Backdrop show={showSideDrawer} clicked={toggleSideDrawer} />
      <div className={attachedClasses.join(' ')}>
        <div className="logo-wrapper">
          <img className="logo" src={logo} alt="Elegant Store" />
          <button onClick={toggleSideDrawer} className="toggle-side-drawer">
            <img src={closeBtnIcon} alt="close side drawer" />
          </button>
        </div>
        <List onClick={toggleSideDrawer} component="nav" className={classes.root} aria-label="mailbox folders">
          {femaleCategories.map((femaleCategory, index) => {
            const { category, linkType, content, link, authContent } = femaleCategory;
            return (
              (content || (isAuth && authContent)) && <>
                <ListItem button>
                  <NavigationItem
                    key={index}
                    clicked={() => filterProducts(category)}
                    linkType={linkType}
                    link={link ? `${link}` : `/products/${category}`}>
                    <ListItemText primary={content || (isAuth && authContent)} />
                  </NavigationItem>
                </ListItem>
                <Divider />
              </>
            )
          })}
        </List>
      </div>
    </>
  );
};


export default connect(null, { toggleSideDrawer, filterProducts })(SideDrawer);