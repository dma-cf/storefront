import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { When } from 'react-if';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { addToCart } from '../../store/cart';
import { getProducts, removeFromStock } from '../../store/products';
import { Link } from 'react-router-dom';

function Products() {
  const { activeCategory } = useSelector((state) => state.categories);
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addDispatcher = (product) => {
    dispatch(addToCart(product));
    dispatch(removeFromStock(product));
  };

  useEffect(() => {
    dispatch(getProducts(activeCategory.name))
  }, [activeCategory]);

  return (
    <>
      <When condition={activeCategory}>
        <div style={{textAlign:'center', margin:'5rem auto'}}>
          <Typography variant='h2' style={{textTransform:'capitalize'}}>{activeCategory.name}</Typography>
          <Typography variant='overline'>{activeCategory.description}</Typography>
        </div>
        <Grid container spacing={2} width="80%" margin="auto">
          {
            products.map((product, index) => (
              <Grid key={`products${index}`} item xs={12} md={6} lg={4} >
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={`https://source.unsplash.com/random?${product.name}`}
                    title={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant='caption'>Qty: {product.inStock}</Typography>

                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => addDispatcher(product)}
                      size="small">
                      ADD TO CART
                    </Button>
                    <Button 
                    component={Link} to={`/productDetails/${product._id}`}
                    size="small">
                      VIEW DETAILS
                      </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </When>
    </>
  )
}

export default Products
