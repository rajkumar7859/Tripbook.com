import styles from "./navbar.module.css";
import Link from "next/link";
import { Icon } from "@chakra-ui/icons";

import {
  IoAirplaneOutline,
  IoBedOutline,
  IoCarOutline,
  IoCarSportOutline,
  IoFlowerOutline,
} from "react-icons/io5";
import { RiCommunityLine } from "react-icons/ri";
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
} from "@chakra-ui/react";
import DraverNav from "./draverNav";
import { AuthContext } from "../../context/AuthContextProvider";
import { useContext } from "react";
import { useRouter } from "next/router";

function Navbar() {
  const { auth, setAuth } = useContext(AuthContext);
  const router = useRouter();

  const SignoutReq = () => {
    setAuth({ ...auth, isAuth: "" });
    router.push("/");
  };

  return (
    <>
      {/* <Box className={styles.dNav} ><DraverNav/></Box> */}

      <Box
        // border="1px solid black"
        w="100%"
        color="white"
        height="auto"
        bg="#003580"
      >
        <Box
            // border="3px solid green"
          w="90%"
          color="#262626"
          margin="auto"
          p={4}
          className={styles.smallScreenBox}
        >
          <Box display="flex" justifyContent="space-between">
            <Link href="/">
            <Box  
            // border="2px solid green" 
            className={styles.logosize}  >
              <img
                src="applogo.png"
                // border="2px solid red"
                  width="200px"
                  height="50px"
                alt="logo"
              />
            </Box>
            </Link>

            <Box className={styles.stackBox}>
              <HStack spacing={["15px", "12px"]}>
                <Box>
                  <Link href="#" className={styles.imgLink}>
                    INR
                  </Link>
                </Box>

                <Link href="#">
                  <Image
                    borderRadius="50%"
                    background="none"
                    width={25}
                    height={25}
                    src="ind.jpeg"
                    alt="IND"
                    marginTop="4px"
                  />
                </Link>

                <Link href="#">
                  {" "}
                  <Icon color="white" w={25} h={25} />
                </Link>

                <Link
                  href="/"
                  className={styles.uniqueButton}
                  width={{
                    base: "45%",
                    sm: "40%",
                    md: "25%",
                    lg: "20%",
                    xl: "20%",
                    "2xl": "30%",
                  }}
                >
                  List your property
                </Link>

                {auth.isAuth ? (
                  <>
                    <Button
                      onClick={() => SignoutReq()}
                      className={styles.authLink}
                    >
                      Sign out
                    </Button>
                    <Avatar bg="yellow.400" name={auth.isReg.name} />
                  </>
                ) : (
                  <>
                    <Link href="/signup" className={styles.authLink}>
                      <Button
                    className={styles.authLink}
                    >
                       Register
                    </Button>
                    </Link>

                    <Link href="/signin" className={styles.authLink}>
                    <Button
                    className={styles.authLink}
                    >
                      Sign in
                    </Button>
                    </Link>
                  </>
                )}
              </HStack>
            </Box>
            <Box className={styles.smallScreen}>
              <DraverNav />
            </Box>
          </Box>

          <Box
            // border="2px solid black"
            className={styles.stackBox}
          >
            <HStack spacing="25px">
              <Link href="/" className={styles.navRow2One}>
                <IoBedOutline className={styles.iconsStyles1} />
                Stays
              </Link>

              <Link href="/flights" className={styles.navRow2}>
                <IoAirplaneOutline className={styles.iconsStyles} />
                Flights
              </Link>

              <Link href="#" className={styles.navRow2}>
                <RiCommunityLine className={styles.iconsStyles} />
                Flights + Hotel
              </Link>

              <Link href="/carrental" className={styles.navRow2}>
                <IoCarSportOutline className={styles.iconsStyles} />
                Car rentals
              </Link>

              <Link href="/regiter" className={styles.navRow2}>
                <IoFlowerOutline className={styles.iconsStyles} />
                Attractions
              </Link>

              <Link href="/login" className={styles.navRow2}>
                <IoCarOutline className={styles.iconsStyles} />
                Airport taxis
              </Link>
            </HStack>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
