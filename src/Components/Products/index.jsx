import { When } from "react-if";

import { Grid } from "@mui/material";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";

function Products() {
  const { products } = useSelector((state) => state.products);
  const { activeCategory } = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    console.log(product)
    if (product.inStock < 1) {
      alert('Out of Stock');
      return;
    } else {
      dispatch(addToCart(product));
    }
  }

  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <When condition={activeCategory.name}>
          {products.map((product, idx) => (
            <Grid item xs={2} sm={4} md={4} key={idx}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={`https://source.unsplash.com/random?${product.name.toLowerCase()}`}
                  title={product.name}
                />
                <CardContent>
                  <div style={
                    {display:'flex', 
                    flexDirection:'row', 
                    justifyContent:'space-between', 
                    alignItems:'center'}
                    }>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {
                        product.inStock > 0 ? `In Stock: ${product.inStock}` : 'Out of Stock'
                      }
                    </Typography>
                  </div>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                  <Button size="small">View Details</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </When>
      </Grid>
    </>
  );
}

export default Products;
