import styles from "./navbar.module.css";
import Link from "next/link";
import { QuestionIcon, Icon } from "@chakra-ui/icons";

import {
  IoAirplaneOutline,
  IoBedOutline,
  IoCarOutline,
  IoCarSportOutline,
  IoFlowerOutline,
} from "react-icons/io5";
import { RiCommunityLine } from "react-icons/ri";
import { Box, Button, Container, HStack, Image } from "@chakra-ui/react";
import DraverNav from "./draverNav";
 

function Navbar() {
  return (
    <>
    {/* <Box className={styles.dNav} ><DraverNav/></Box> */}
    
      <Box
        border="1px solid black"
        w="100%"
        color="white"
        height="auto"
        bg="#003580"
      >
        <Box 
        // border="2px solid green"
         w="90%" color="#262626" margin="auto" p={4}  >
          <Box display="flex" justifyContent="space-between">
            <Box>
              <img
                src="applogo.png"
                border="2px solid red"
                width="200px"
                height="50px"
                alt="logo"
              />
            </Box>
            
          <Box className={styles.stackBox} >
          <HStack spacing={["15px", "12px"]}     >
              <Box>
                <Link href="#" className={styles.imgLink}>
                  INR
                </Link>
              </Box>

              <Link href="#">
                <Image
                  borderRadius="50%"
                  boxSize="30px"
                  src="indflag.jpg"
                  alt="IND"
                  marginTop="4px"
                />
              </Link>

              <Link href="#">
                {" "}
                <Icon color="white" w={25} h={25} />
              </Link>

              <Link href="/" className={styles.uniqueButton}>
                List your property
              </Link>

              <Link href="/signup" className={styles.authLink}>
                Register
              </Link>

              <Link href="/signin" className={styles.authLink}>
                Sign in
              </Link>
            </HStack>
           
          </Box>
          <Box className={styles.smallScreen}><DraverNav/></Box>
            

          </Box>

            
          <Box 
          // border="2px solid black" 
          className={styles.stackBox}>
            <HStack spacing="25px">
              <Link href="/bgComponent" className={styles.navRow2One}>
                <IoBedOutline className={styles.iconsStyles1} />
                Stays
              </Link>

              <Link href="#" className={styles.navRow2}>
                <IoAirplaneOutline className={styles.iconsStyles} />
                Flights
              </Link>

              <Link href="#" className={styles.navRow2}>
                <RiCommunityLine className={styles.iconsStyles} />
                Flights + Hotel
              </Link>

              <Link href="/" className={styles.navRow2}>
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
