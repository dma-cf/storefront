import { Typography } from "@mui/material"

function Footer() {

  let year = new Date().getFullYear();

  return (
    <>
    <footer style={{backgroundColor:'#eee', padding:'2rem', textAlign:'center', marginTop:'2rem'}}>
      <Typography variant="h5">
        &copy; {year} JavaScript 401d53
      </Typography>
      <Typography color="textSecondary">
        React + Redux + Material UI
      </Typography>

    </footer>
    </>
  )
}

export default Footer