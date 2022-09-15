import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../../interfaces"
import NextLink from 'next/link';

const loginPage = () => {
  return (
    <AuthLayout title={"Register"}>
      <Box sx={{ width: 350, padding: "10px 20px" }}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="h1" component="h1">Sign Up</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Firstname" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Lastname"          
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Mail" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              color="secondary"
              className="circular-btn"
              size="large"
              fullWidth
            >
              Sign In
            </Button>
          </Grid>
          <Grid item xs={12} display='flex' justifyContent='end'>
            <NextLink href="./login" passHref>
              <Link underline="always" fontWeight={600}>
                Already registered?
              </Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  )
}

export default loginPage