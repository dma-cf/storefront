import { useSelector, useDispatch } from "react-redux";
import { When } from "react-if";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";

function Products() {

  const { activeCategory, products } = useSelector((state) => state.store)

  return (
    <>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

      <When condition={activeCategory}>
        {
          products.map((product, idx) => (
            <Grid item xs={2} sm={4} md={4} key={idx}>
              <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={`https://source.unsplash.com/random?${product.name.toLowerCase()}`}
                title={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Add to Cart</Button>
                <Button size="small">View Details</Button>
              </CardActions>
              </Card>
            </Grid>
          ))
        }
        

      </When>
    </Grid>
    </>
  )
}

export default Products