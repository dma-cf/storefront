import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import './styles.scss';
import { Link } from 'react-router-dom';

function Header() {
  const { cart } = useSelector(state => state);
  return (
    <>
      <AppBar>
        <Toolbar className="toolBar" >
          <Grid container>
            <Grid item>
              <Button component={Link} to="/">
                <Typography variant="h4">Our Store</Typography>
              </Button>
            </Grid>
            <Grid item xs style={{ textAlign: 'right', alignSelf: 'center' }}>
              <Button component={Link} to="/cart">
                <Typography>CART ({cart.length})</Typography>
              </Button>
            </Grid>

          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
