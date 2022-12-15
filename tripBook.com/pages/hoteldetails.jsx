import { Box,Text , Breadcrumb,BreadcrumbItem,BreadcrumbLink} from '@chakra-ui/react'
import {ChevronRightIcon } from "@chakra-ui/icons"
import React from 'react'

const HotelDetails = () => {
  return (
   <Box  >
    <Box bg='#fff0e0' border='none' color='black' p="1rem">
    <Text fontSize='1xl' fontWeight="700" w="70%" m="auto" color="#262626"  >Coronavirus (COVID-19) Support</Text>
    </Box>
<Box w="80%" m="auto">
  <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />} >
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>About</BreadcrumbLink >
  </BreadcrumbItem >

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
</Box>
<Box w="80%" m="auto" >
<Grid>
  <Box></Box>
  <Box></Box>
  <Box></Box>
  <Box></Box>
</Grid>
</Box>
   </Box>
  )
}

export default HotelDetails