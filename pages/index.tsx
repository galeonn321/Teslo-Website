import type { NextPage } from 'next'
import { ShopLayout } from '../components/layouts';
import Typography from '@mui/material/Typography';


const Home: NextPage = () => {
  return (
    <ShopLayout title={'Teslo-Shop -- HOME'} pageDescription={'Find your best products here at Teslo'}>
      <Typography variant='h1' component='h1'>Home</Typography>
      <Typography variant='h2' sx={{mb:1}}>All products</Typography>
    </ShopLayout>
  )
}

export default Home
