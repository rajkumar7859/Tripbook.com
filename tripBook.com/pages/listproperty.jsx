import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
const listproperty = () => {
  return (
    <>
      <Box>
        <Box p="1rem 3rem 1rem 2rem" display="flex" bg="#003580" justifyContent="space-between" >
            <Box ><Image  width="200px"
                height="50px"
                alt="logo" src="applogo.png" /></Box>
            <Flex w="20%" justifyContent="space-evenly"  >Help <CgProfile fontSize="2rem" color="white" /></Flex>
        </Box>
      </Box>
    </>
  )
}

export default listproperty
