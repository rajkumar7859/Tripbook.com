import { Box,Text , Breadcrumb,BreadcrumbItem,BreadcrumbLink, Grid, Button, GridItem} from '@chakra-ui/react'
import {ChevronRightIcon } from "@chakra-ui/icons"
import React from 'react'
import SearchForm from '../components/SearchForm'

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
<Grid mt="2rem" templateColumns={{ sm:"repeat(1,27%)" ,lg:"repeat(2,70%)" }}>
  <Box border="1px solid red" > <Button w="100%" bg="#ebf3ff" mb="0.7rem">We Price Match</Button> <SearchForm /></Box>
  <Box border="1px solid green">
  <Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'header'}>
    Header
  </GridItem>
  <GridItem pl='2' bg='pink.300' area={'nav'}>
    Nav
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'footer'}>
    Footer
  </GridItem>
</Grid>
 </Box>
</Grid>
</Box>
   </Box>
  )
}

export default HotelDetails