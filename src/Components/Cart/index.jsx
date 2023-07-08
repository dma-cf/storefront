import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Container } from '@mui/material';
import { removeFromCart } from '../../store/actions';

function Cart() {

  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cart);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product)); 
  }

  return(
    <>
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ul>
        {        
        cart.map((product, idx) => {
          const productInCart = cart.findIndex(product => product.name === product.name)

          if (productInCart !== idx) {
            return;
          }
          return(
            <li key={idx} style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '25%'
            }}>
              {product.name}
              <Button onClick={() => handleRemoveFromCart(product)}>X</Button>
            </li>
          );
          })
        
        }
        </ul>
        </Box>
    </div>
    </>
  )
}

export default Cart;