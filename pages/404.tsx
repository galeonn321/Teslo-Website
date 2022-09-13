import { Box } from "@mui/material";
import { ShopLayout } from "../components/layouts";
import Typography from "@mui/material/Typography";

const Custom404 = () => {
  return (
    <ShopLayout
      title="Page not found"
      pageDescription="There is nothing to show here."
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
      >
        <Typography variant="h1" component="h1" fontSize={80} fontWeight={200}>
          404 |
        </Typography>
        <Typography marginLeft={2}>No website found</Typography>
      </Box>
    </ShopLayout>
  );
};

export default Custom404;
