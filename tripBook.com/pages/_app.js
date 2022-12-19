import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import AuthContextProvider from "../context/AuthContextProvider";
import Footer from "../components/Footer";
import GuestContextProvider from "../context/GuestContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthContextProvider>
        <GuestContextProvider>
          <Component {...pageProps} />
          <Footer />
        </GuestContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
