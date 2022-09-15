import { Chip, Grid, Typography, Link } from '@mui/material';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ShopLayout } from "../../components/layouts/ShopLayout";
import NextLink from "next/link";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "fullname", headerName: "name", width: 300 },
  {
    field: "paid",
    headerName: "paid",
    description: "Shows if the payment is completed or not",
    width: 200,
    renderCell: (params) => {
      return params.row.paid ? (
        <Chip color="success" label="Paid" variant="outlined" />
      ) : (
        <Chip color="error" label="Not paid" variant="outlined" />
      );
    },
  },
  {
    field: "order",
    headerName: "orders",
    description: "Shows if the payment is completed or not",
    width: 200,
    sortable:false,
    renderCell: (params) => {
      return (
        <NextLink href={`/orders/${params.row.id}`}>
          <Link underline='always'>See order</Link>
        </NextLink>
      );
    },
  },
];
const row = [
  { id: 1, paid: true, fullname: "Santiago Maruri" },
  { id: 2, paid: false, fullname: "queso Maruri" },
  { id: 3, paid: true, fullname: "ratu Maruri" },
  { id: 4, paid: false, fullname: "mancu Maruri" },
  { id: 5, paid: true, fullname: "letu Maruri" },
  { id: 6, paid: false, fullname: "ranchu Maruri" },
];

const historyPage = () => (
  <ShopLayout
    title={"Orders History"}
    pageDescription={"Orders clients history"}
  >
    <Typography variant="h1" component="h1"></Typography>

    <Grid container>
      <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </Grid>
    </Grid>
  </ShopLayout>
);

export default historyPage;
