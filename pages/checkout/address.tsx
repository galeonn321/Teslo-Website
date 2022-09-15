import { ShopLayout } from "../../components/layouts/ShopLayout";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const AddressPage = () => {
  return (
    <ShopLayout
      title={"Checkout Address"}
      pageDescription={"Confirmation Address user"}
    >
      <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
        Address
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Name" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Lastname" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Address" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Address 2 (optional)" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Country</InputLabel>
            <Select variant="filled" label="Country" value={1}>
              <MenuItem value={1}>Colombia</MenuItem>
              <MenuItem value={2}>Italy</MenuItem>
              <MenuItem value={3}>Sweden</MenuItem>
              <MenuItem value={4}>Spain</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="ZIP code" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="City" variant="filled" fullWidth />
        </Grid>
      </Grid>
      <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
        <Button color="secondary" className="circular-btn" size="large">
          Checkout
        </Button>
      </Box>
    </ShopLayout>
  );
};

export default AddressPage;
