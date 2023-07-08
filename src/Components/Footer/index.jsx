import { Typography } from "@mui/material"

function Footer() {
  return (
    <>
    <footer style={{backgroundColor:'#eee', padding:'4rem', textAlign:'center'}}>
      <Typography variant="h5">
        &copy; 2023 Javscript 401d53
      </Typography>
      <Typography color="textSecondary">
        React + Redux + Material UI
      </Typography>

    </footer>
    </>
  )
}

export default Footer