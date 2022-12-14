import React  from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
  Box, Button, HStack,  

  } from '@chakra-ui/react'
 

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

  function DraverNav() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='#004cb8' border="1px solid white" onClick={onOpen}  fontSize={{   md: '10px', sm: '16px'   }} >
          Explore-more
        </Button>
        <Drawer
         
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
           
              <Link href="#" className={styles.navRow2One}>
                <IoBedOutline className={styles.iconsStyles1} />
                Stays
              </Link>

              <Link href="#" className={styles.navRow2s}>
                <IoAirplaneOutline className={styles.iconsStyles} />
                Flights
              </Link>

              <Link href="#" className={styles.navRow2s}>
                <RiCommunityLine className={styles.iconsStyles} />
                Flights + Hotel
              </Link>

              <Link href="/" className={styles.navRow2s}>
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
       
            </DrawerBody>
             
             
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default DraverNav