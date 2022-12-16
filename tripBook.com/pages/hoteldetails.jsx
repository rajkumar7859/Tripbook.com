import { Box,Text , Breadcrumb,BreadcrumbItem,BreadcrumbLink, Grid, Button, GridItem, Flex} from '@chakra-ui/react'
import {ChevronRightIcon } from "@chakra-ui/icons"
import {HiStar ,HiShare} from "react-icons/hi"
import {AiFillLike ,AiOutlineHeart } from "react-icons/ai"
import React from 'react'
import SearchForm from '../components/SearchForm'

const HotelDetails = () => {
  return (
   <Box  >
    {/* ********************************************************************************************* */}
    <Box bg='#fff0e0' border='none' color='black' p="1rem">
    <Text fontSize='1xl' fontWeight="700" w="70%" m="auto" color="#262626"  >Coronavirus (COVID-19) Support</Text>
    </Box>
<Box w="80%" m="auto" mt="10px">
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

    {/* ********************************************************************************************* */}

<Box w="80%" m="auto" >
<Flex w="100%" mt="2rem"  gap="1rem" flexDirection={["column","column","row","row"]} >
  <Box border="1px solid red"  color="#0071c2" > <Button w="100%" bg="#ebf3ff" mb="0.7rem">We Price Match</Button> <SearchForm /></Box>
  <Box border="1px solid green"  w="95%">
    <Flex gap="5px" color="#0071c2" flexDirection={["column","column","row","row"]} >
  <Button w="100%" bg="#ebf3ff" mb="0.7rem">Info & prices</Button>
  <Button w="100%" bg="#ebf3ff" mb="0.7rem">Facilities</Button>
  <Button w="100%" bg="#ebf3ff" mb="0.7rem">House rules</Button>
  <Button w="100%" bg="#ebf3ff" mb="0.7rem">{`Guest Reviews ${"(rating)"}`}</Button>
    </Flex>
    
    <Flex  fontWeight="600"alignItems="center" flexDirection={["column","column","row","row"]}>
      <Text bg="#7f7f7f" p="3px" color="white">Hotel</Text>
      <Flex w="70%" alignItems="center" color="#febb02" ml="10px"  ><HiStar fontSize="22px" /><HiStar fontSize="22px" /><HiStar fontSize="22px" /> <Box ml="10px"  p="2px" color="white" border="1px solid" bg="#febb02"> <AiFillLike /></Box> 
      <Text bg="gray.100" color="black" ml="10px" p="3px" >Great for two travellers</Text>
      </Flex>

<Flex flexDirection={["column","column","row","row"]} fontSize="27px" gap="10px" justifyContent="space-evenly" alignItems="center" color="#0071c2"><AiOutlineHeart /> <HiShare  /> 
<Button bg="#0071c2" color="white" borderRadius="none" >Reserve</Button>
</Flex>
    </Flex>

<Text fontSize='2xl' fontWeight="700" mt="10px" >{"La-Paz Gardens Beacon Hotel - Vasco da Gama Goa"}</Text>

  </Box>
 
</Flex>
</Box>

    {/* ********************************************************************************************* */}

   </Box>
  )
}

export default HotelDetails