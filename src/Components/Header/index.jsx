import { Button, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux';


function Header() {
  
  const {cart} = useSelector((state) => state.cart);

  return (
    <>
      <Grid container>
        <Grid item xs>
          <Button variant="text">
            <Typography variant='h3' color='black'>
              Our Store
            </Typography>
          </Button>
        </Grid>
        <Grid item xs style={{ alignSelf: 'center', textAlign: 'right' }}>
          <Button variant="text">
            <Typography color='black'>
              Cart ({cart.length})
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Header