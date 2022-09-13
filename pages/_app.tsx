import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/system'
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme } from '../themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ lightTheme}>
      <CssBaseline/>
      <Component {...pageProps}/>
    </ThemeProvider>
  )
}

export default MyApp
