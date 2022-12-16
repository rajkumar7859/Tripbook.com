import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import AuthContextProvider from '../context/AuthContextProvider';


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthContextProvider>
      <Component {...pageProps} />
      </AuthContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
