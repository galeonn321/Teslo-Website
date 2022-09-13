import type { NextPage } from "next";
import { ShopLayout } from "../components/layouts";
import Typography from "@mui/material/Typography";
import { Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import { initialData } from "../database/products";

const Home: NextPage = () => {
  return (
    <ShopLayout
      title={"Teslo-Shop -- HOME"}
      pageDescription={"Find your best products here at Teslo"}
    >
      <Typography variant="h1" component="h1">
        Home
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        All products
      </Typography>

      <Grid container spacing={4}>
        {initialData.products.map((product) => (
          <Grid item xs={6} sm={4} key={product.slug}>
            <Card>
              <CardActionArea>
                <CardMedia component='img' image={`products/${product.images[0]}`} alt={product.title}/>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ShopLayout>
  );
};

export default Home;
