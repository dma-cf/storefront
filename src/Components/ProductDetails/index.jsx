import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function ProductDetails() {

  const products = useSelector(state => state.products)
  const { id } = useParams();
  const selectedProduct = products.find(product => product._id === id)

  
  return (
    <>
    <div style={{marginTop:'100px'}}>
      <Card style={{width:'50%', margin:'0 auto'}}>
        <Typography gutterBottom variant='h2' component='div' style={{textAlign:'center', textTransform:'uppercase'}}>{selectedProduct.name}</Typography>
        <CardMedia 
        sx={{height: 350}}
        image={`https://source.unsplash.com/random?${selectedProduct.name}`}
        title={selectedProduct.name}
        />

        <CardContent style={{textAlign:'center'}}>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            {
              selectedProduct.inStock > 0
              ? <Typography gutterBottom variant='h6' component='div'>Qty In Stock: {selectedProduct.inStock}</Typography>
              : <Typography gutterBottom variant='h6' component='div'>Out of Stock</Typography>
            }
            <Typography gutterBottom variant='h6' component='div'>Price: ${selectedProduct.price}</Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button variant='contained' onClick={() => addDispatcher(selectedProduct)}>Add to Cart</Button>
        </CardActions>
      </Card>
    </div>

    </>
  )
}

export default ProductDetails