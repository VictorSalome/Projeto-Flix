

import { ThemeProvider, Box, Typography } from '@mui/material'
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { createTheme } from '@mui/material';
import { apptheme } from './config/theme';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";


const theme = createTheme({})

const Home = () => {
  return (
    <Typography variant='h1'>
      Home
    </Typography>
  )
}

const About = () => {
  return (
    <Typography variant='h1'>
      About
    </Typography>
  )
}


function App() {
  return <ThemeProvider theme={apptheme}>
    <Box
      component="main"
      sx={{
        height: '100vh',
        backgroundColor: (theme) => theme.palette.grey[900],
      }}
    >
      <Header />s
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Layout>

    </Box>


  </ThemeProvider>

}

export default App;
