import type { NextPage } from "next";
import { ShopLayout } from "../components/layouts";
import Typography from "@mui/material/Typography";
import { initialData } from "../database/products";
import { ProductList } from "../components/products";

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

      <ProductList products={initialData.products as any}/>
    </ShopLayout>
  );
};

export default Home;
