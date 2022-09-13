import { Typography, Box, Link } from '@mui/material';
import { ShopLayout } from "../../components/layouts";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import NextLink from "next/link";


const EmptyPage = () => {
  return (
    <ShopLayout
      title={"Empty cart"}
      pageDescription={"Your Cart is Currently Empty"}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <RemoveShoppingCartOutlinedIcon sx={{ fontSize: 100 }} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography>Your Cart is Currently Empty</Typography>
          <NextLink href="/" passHref>
            <Link typography='h4' color='secondary' >Go back</Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyPage;
