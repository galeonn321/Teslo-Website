import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { CartList, OrderSummary } from "../../components/cart";
import { ShopLayout } from "../../components/layouts";
import NextLink from "next/link";

const SummaryPage = () => {
  return (
    <ShopLayout title={"Order Summary"} pageDescription={"Order Summary"}>
      <Typography variant="h1" component="h1">
        Order Summary
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2" fontWeight={600}>
                order
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Box display="flex" justifyContent="end">
                <NextLink href="/checkout/address" passHref>
                  <Link underline="always" fontWeight={500}>Edit</Link>
                </NextLink>
              </Box>
              <Typography variant="subtitle1">Delivery Address</Typography>
              <Typography>Anacleto Borifacio</Typography>
              <Typography>323 Somewhere</Typography>
              <Typography>Strisville satan</Typography>
              <Typography>Canada</Typography>
              <Typography>+1 123123123</Typography>

              <Divider sx={{ my: 1 }} />
              <Box display="flex" justifyContent="end">
                <NextLink href="/checkout/address" passHref>
                  <Link underline="always" fontWeight={500}>Edit</Link>
                </NextLink>
              </Box>
              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Confirm order
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default SummaryPage;
