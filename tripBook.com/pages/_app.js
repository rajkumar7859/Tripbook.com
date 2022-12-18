import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import AuthContextProvider from '../context/AuthContextProvider';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthContextProvider>
      <Component {...pageProps} />
      <Footer />
      </AuthContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
