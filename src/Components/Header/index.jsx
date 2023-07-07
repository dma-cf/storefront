import { Button, Grid, Typography } from '@mui/material'


function Header() {
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
              Cart (0)
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Header