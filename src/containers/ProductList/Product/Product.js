import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import React, { Component } from 'react';
import './Product.scss';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { Box } from '@material-ui/core';

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
      <Box className="product">
        <Card style={{
          width: 325,
          height: 500,
          border: '3px solid #eaeaea',
          borderRadius: 0,
          marginBottom: 5,
          padding: 7,
          marginRight: 5,
          display: 'cover'
        }}
          className="product"
          boxshadow={3}>
          <CardActionArea>
            <CardMedia className="img-wrapper">
              {!this.state.isLoaded && <Spinner />}
              <img
                src={img}
                alt={title}
                className="product-img"
                onClick={() => this.props.showModal(id)}
                ref={(img) => this.img = img}
                style={{
                  width: 'auto',
                  height: "auto",
                  maxHeight: 400,
                  maxWidth: 350,
                  borderRadius: 0,
                  marginBottom: 5,
                  marginRight: 5,
                  display: 'cover',
                }}
              />
            </CardMedia>
          </CardActionArea>
          <div>
            <CardContent style={{ height: 10 }}>
              {title}
              <br />
              Price: PKR {price}.00
              <Divider />
            </CardContent>
          </div>
          {/* <div> */}
          <Link to={`/details/${id}`}>
            <Button size="small" color="primary"
              clicked={() => this.props.showDetails(id)}
              btnType="mobile">Show Details
            </Button>
          </Link>
          {/* </div> */}
        </Card>
      </Box>
    )
  }
};

export default Product;





