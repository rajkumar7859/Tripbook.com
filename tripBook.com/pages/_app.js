import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import AuthContextProvider from '../context/AuthContextProvider';
import Navbar from "../components/navbarSection/navbar";
import   Footer   from  "../components/Footer";


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthContextProvider>
        <Navbar/>
      <Component {...pageProps} />
        <Footer/>
      </AuthContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
