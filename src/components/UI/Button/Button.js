import React from 'react';
import './Button.scss';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));
const MyButton = ({ disabled, clicked, btnType, children }) => {
  const classes = useStyles();
  return (
    <>
      <button
        disabled={disabled}
        onClick={clicked}
        className={["btn", btnType].join(' ')}
      >
        {children}
      </button>
      {/* <Button variant="outlined" color="primary" href="#outlined-buttons" size="small" className={classes.margin}> */}
        {/* Link */}
 {/* </Button> */}
    </>
  )
}

export default MyButton;