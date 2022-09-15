import {
  Box,
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
import { Chip } from "@mui/material";
import CreditCardOffOutlinedIcon from "@mui/icons-material/CreditCardOffOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
const OrderPage = () => {
  return (
    <ShopLayout title="Order Summary 12312545" pageDescription="Order Summary">
      <Typography variant="h1" component="h1">
        Order : ABC1235
      </Typography>
      {/* <Chip
        sx={{ my: 2 }}
        label="Pending Payment"
        variant="outlined"
        color="error"
        icon={<CreditCardOffOutlinedIcon/>}
      /> */}
      <Chip
        sx={{ my: 2 }}
        label="Order has been paid"
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlinedIcon />}
      />
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
                  <Link underline="always" fontWeight={500}>
                    Edit
                  </Link>
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
                  <Link underline="always" fontWeight={500}>
                    Edit
                  </Link>
                </NextLink>
              </Box>
              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <h1>Paid</h1>
                <Chip
                  sx={{ my: 2 }}
                  label="Order has been paid"
                  variant="outlined"
                  color="success"
                  icon={<CreditScoreOutlinedIcon />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default OrderPage;
