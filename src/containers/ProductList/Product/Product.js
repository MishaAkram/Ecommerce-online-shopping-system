import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import './Product.scss';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { Box } from '@material-ui/core';
import { shadows } from '@material-ui/system';
const thumb = {
  display: 'inline-flex',
  borderRadius: 0,
  border: '3px solid #eaeaea',
  marginBottom: 5,
  marginRight: 5,
  width: '345',
  height: "auto",
  padding: 7,
  boxSizing: 'border-box'
};

class Product extends Component {
  state = {
    isLoaded: false,
    isError: false
  };

  componentDidMount() {
    this.load(this.img);
  };

  load = img => {
    let image = img;
    image.src = this.props.product.img;
    image.onload = () => {
      this.onImageLoaded();
    };

    image.onError = () => {
      this.onImageLoadError(this.props.product.img);
    };
  };

  onImageLoaded = () => {
    this.setState({
      isLoaded: true
    });
  };

  onImageLoadError = () => {
    this.setState({
      isError: true
    });
  };

  render() {
    const { id, img, price, title } = this.props.product;

    return (
      <Box className="product"
     
      >
        <Card style={thumb} className="product"
         boxShadow={3}>
          <CardActionArea>
            <CardMedia className="img-wrapper">
              {!this.state.isLoaded && <Spinner />}
              <img
                src={img}
                alt={title}
                className="product-img"
                onClick={() => this.props.showModal(id)}
                ref={(img) => this.img = img}
              />
            </CardMedia>
            <CardContent style={{ height: 10 }}>
              {title}
              <br />
                Price: {price}.00 $
                <Divider />
            </CardContent>
            <CardActions>
              <Link to={`/details/${id}`}>
                <Button size="small" color="primary"
                  clicked={() => this.props.showDetails(id)}
                  btnType="mobile">Show Details
                </Button>
              </Link>
            </CardActions>
          </CardActionArea>
        </Card>
      </Box>
    )
  }
};

export default Product;





