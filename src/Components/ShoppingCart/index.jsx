import { Button, Container, Grid, List, ListItem, ListItemText, TextField, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import SimpleCart from '../SimpleCart'

function ShoppingCart() {

  const cart = useSelector(state => state.cart)

  return (
    <>
      <SimpleCart />
      <div style={{ width: '50%', margin: '0 auto', marginTop: '100px', padding: '10px' }}>
        <Typography variant='h4' style={{}}>Cart Summary</Typography>
        <List>
          {
            cart.length > 0 ? cart.map((item, idx) => (
              <ListItem key={`${item}-${idx}`}>
                <ListItemText primary={item.name} />
                <Typography variant='body2'>${item.price}</Typography>
              </ListItem>
              // <li >{item.name} - ${item.price}</li>
            )) : <Typography variant='body'>Cart Empty</Typography>
          }
          <ListItem>
            <ListItemText primary={`Total Items in Cart: ${cart.length}`} />
          </ListItem>
        </List>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant='h6'>Billing Address</Typography>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <TextField label="Full Name" />
              <TextField label="Address" />
              <TextField label="City" />
              <TextField label="State" />
              <TextField label="Zip" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h6'>Payment Details</Typography>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <TextField label="Credit Card #" disabled />
              <TextField style={{ margin: '15px 0' }} label="Exp. Date" InputLabelProps={{ shrink: true }} type='date' />
              <TextField label="CVV" disabled />

            </div>
          </Grid>
        </Grid>
        <Button variant='contained' style={{ margin: '15px auto' }}>Place Your Order</Button>
      </div>
    </>
  )
}

export default ShoppingCart