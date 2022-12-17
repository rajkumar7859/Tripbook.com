import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {CgProfile} from "react-icons/cg"

const listproperty = () => {
  return (
    <>
      <Box border="1px soild red" bg="#003580" >
       <Flex  border="1px soild black" ><Image src="applogo.png" width="200px"
                height="50px"
                alt="logo" /> <Text>Help</Text> <CgProfile /></Flex>
      </Box>
    </>
  )
}

export default listproperty
