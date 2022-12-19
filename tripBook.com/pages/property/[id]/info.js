import { Box, HStack, VStack,Text,Divider, Stack,Image ,Radio, RadioGroup,
    FormControl,FormLabel,FormErrorMessage,FormHelperText,Input,Select ,Textarea, Button, SimpleGrid, Grid,
  Center,useToast, Link
} from "@chakra-ui/react";
import {MdOutlineCreditCardOff} from "react-icons/md";
import {IoCheckmarkDone} from "react-icons/io5";
import {MdOutlineLocalParking} from "react-icons/md";
import {MdOutlineRestaurant} from "react-icons/md";
import {MdLocalAirport} from "react-icons/md";
  import { useRouter } from "next/router";
  import {FaSwimmingPool} from "react-icons/fa";
import axios from "axios";
import Navbar from "../../../components/navbarSection/navbar"
import { useState } from "react";


export default function Info({data}){

    const { query } = useRouter();
    const { id } = query;
    const toast=useToast();
    // useState
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [email1,setEmail1]=useState("");
    const [guestName,setGuestName]=useState("");
    const [request,setRequest]=useState("");
    const [floor,setFloor]=useState("");
    const [guest,setGuest]=useState("");
    // const [loading,setLoading]=useState(false)
    //  
    function callSubmit(){
    
      if(name===""||email===""||email1===""||guestName===""||request===""){
        return toast({
          title: 'Please fill all the required fields.',
        description: " All fields are mandatory.",
        status: 'warning',
        duration: 3400,
        isClosable: true,
        })

      }
      toast({
        title: 'Details has been saved successfully.',
        description: "Enjoy our services.",
        status: 'success',
        duration: 3400,
        isClosable: true,
      })
      setName("");
      setEmail("");
      setEmail1("");
      setGuestName("");
      setRequest("");
      setGuest("");
      setFloor("");
    
  
    
    }
  //   if(loading){
  //     return (
  //       <>
  //       <Box  marginTop={"160px"}  >
  //  <Skeleton  startColor='pink.500' endColor='orange.500' height='60px' />
  //  <Skeleton marginTop={"20px"} startColor='pink.500' endColor='orange.500' height='60px' />
  //  <Skeleton  marginTop={"20px"}  startColor='pink.500' endColor='orange.500' height='60px' />
  //  </Box>
  //       </>
  //     )
  //   }

    return(
        <>
        <Navbar />
      {/* main css & one main Hstack */}
        {/* <Stack marginTop={"25px"}> */}
     <SimpleGrid columns={{base:1,lg:2}} w={"100%"} margin={"auto"} marginTop={"25px"} >
      
     <VStack margin={"auto"} marginTop={0} w={{base:"full",lg:"60%"}} >
                <Box border={"0.1px solid gray"}  w={"96%"} >
                    <Text fontSize={"16px"} fontWeight={'bold'} marginLeft={"15px"}>Your booking details</Text>
                    <HStack marginTop={"15px"}  gap={2}>
                        <Box marginLeft={"15px"} >
                            <VStack alignItems={"start"} >
                                <Text fontSize={"16px"}  marginBottom={"0"}>Check-in</Text>
                                <Text fontSize={"16px"} fontWeight={"bold"} >Thu 15 Dec 2022</Text>
                                <Text color={"gray"}>From 12:00</Text>
                            </VStack>
                        </Box>
                        <Center height='65px'>
  <Divider orientation='vertical' />
</Center>
                        <Box >
                        <VStack alignItems={"start"}>
                        <Text fontSize={"16px"}  marginBottom={"0"}>Check-out</Text>
                                <Text fontSize={"16px"} fontWeight={"bold"} >Thu 12 Jan 2023</Text>
                                <Text color={"gray"}>Until 10:00</Text>
                              
                                </VStack>
                        </Box>
                      
                    </HStack>
                    <Text marginTop={"25px"} marginLeft={"15px"}>Total length of stay:</Text>
                    <Text  fontWeight={"bold"}   marginLeft={"15px"}>4 weeks</Text>
                    <Center w='80%' margin={"auto"} marginTop={"15px"}>
  <Divider orientation='horizontal' />
</Center>
                    <Text marginTop={"15px"} marginLeft={"15px"} fontWeight={"bold"} >You selected:</Text>
                    <Text    marginLeft={"15px"} fontSize={"14px"}>Deluxe Double or Twin Room with Balcony</Text>
                    <Text color={"#0071C2"} fontWeight={"bold"} marginLeft={"15px"} marginTop={"15px"} marginBottom={"15px"}  >Change your selection</Text>
                </Box>
                <Box border={"0.1px solid gray"} bgColor={"#EBF3FF"}  w={"96%"} >
                    <HStack height={"100px"}>
                        <VStack  w={{base:"68%",md:"62%",lg:"62%"}} align={"start"}  marginLeft={'15px'}>
                            <Text fontWeight={"bold"} marginTop={"-25px"} >Price</Text>
                        
                        </VStack>
                        <VStack >
                        <Text fontWeight={"bold"}>₹ {data.price}</Text>
                         <Box  bgColor={"green"} color={"white"} fontSize={'12px'} padding={"5px"} >
                            No Surprises! Final price.</Box>
                        </VStack>
                    </HStack>
                   
                     </Box>
              
                
            </VStack>

            {/* 2nd vstack */}
            <VStack margin={"auto"} w={{base:"full",lg:"111%"}} marginLeft={{base:"0px",md:"0px",lg:"-110px"}} marginTop={{base:"35px",md:"0px",lg:"0px"}}>
                {/* 1st stack */}
                <Stack  border={"0.1px solid gray"}  w={"96%"}>
                    <HStack>
                        
           <Image w={"210px"} h={"100%"} src={data.imagescr}/>
         <VStack align={"start"}>
   <Text color={"#0071C2"} fontWeight={"bold"} fontSize={"14px"}>Hotel</Text>
    <Text fontSize={"18px"} fontWeight={"bold"}>{data.title}</Text>
    <Text>{data.city}</Text>
    <SimpleGrid columns={{base:2,md:4,lg:4}} gap={3} >
        <HStack>
        <MdOutlineLocalParking  color="green"  fontSize={"18px"}/>
        
        <Text fontSize={'14px'}>Parking</Text>
        </HStack>
       <HStack>
       <MdOutlineRestaurant  color="green"  fontSize={"18px"}/>
        
        <Text fontSize={'14px'}>Restaurant</Text>
       </HStack>
        <HStack>

        <MdLocalAirport  color="green"  fontSize={"18px"}/>
        
        <Text fontSize={'14px'}>Airport</Text>
        </HStack>

<HStack>
<FaSwimmingPool  color="green"  fontSize={"18px"}/>
        
        <Text fontSize={'14px'}>Swimming </Text>
</HStack>
        
       
        
        
    </SimpleGrid>
    </VStack>
    
</HStack>

                </Stack>
                {/* 2nd Stack starts*/}
                <Stack border={"0.1px solid gray"} w={"96%"}>
                    <VStack align={"start"} marginLeft={18} marginBottom={"19px"} >
                        <Text fontSize={"18px"} fontWeight={"bold"}>Good to know:</Text>
                        <HStack>
                        <MdOutlineCreditCardOff color="green"  fontSize={"22px"} />
                        <Text >   
                       No credit card needed!
                        </Text>
                        </HStack>
                        <HStack>
                            {/* react icons */}
                            <IoCheckmarkDone color="green"  fontSize={"22px"}/>
                        <Text >
                        Free cancellation until 23:59 on 13 December 2022
                        </Text>
                        </HStack>
                      <HStack >
                      <IoCheckmarkDone color="green"  fontSize={"22px"}/>
                      <Text >
                        No payment needed today. You'll pay when you stay.
                        </Text>
                      </HStack>
                       
                    </VStack>
                </Stack>
                {/* 3rd stack */}
                <Stack border={"0.1px solid gray"} margin={"auto"} bgColor={'#EBF3FF'} w={"96%"} paddingBottom={25}>
                    <Box  w={"96%"} margin={"auto"}>
                  <Text fontWeight={"bold"} fontSize={"22px"}> Enter your details</Text>
                  <Box  color={"green"}>Almost done! Just fill in the * required info</Box>
               </Box>
             
               
               
             
               
              
              <Box paddingLeft={"17px"}>
              <FormLabel fontWeight={"bold"}>Full name *</FormLabel>
                <Input  value={name} onChange={(e)=>setName(e.target.value)} h={"33px"}  w={{base:"74%",md:"55%",lg:"65%"}} placeholder="Enter your full name"      bgColor={"white"}/>
               <FormLabel fontWeight={"bold"}>Email Address *</FormLabel>
                <Input value={email} onChange={(e)=>setEmail(e.target.value)}      bgColor={"white"} h={"33px"}  w={{base:"74%",md:"55%",lg:"65%"}} placeholder="Enter your email address"/>

                <FormLabel paddingTop={"25px"} fontWeight={"bold"}>Confirm Email Address *</FormLabel>
                <Input value={email1} onChange={(e)=>setEmail1(e.target.value)}      bgColor={"white"} h={"33px"}  w={{base:"74%",md:"55%",lg:"65%"}} placeholder="Enter your email address"/>

<HStack marginTop={"25px"}>

<FormLabel fontSize={"17px"}  fontWeight={"bold"}>Guests:</FormLabel>
               
             
<Select value={guest}  onChange={(e)=>setGuest(e.target.value)}     bgColor={"white"} placeholder='1'  fontSize={"15px"} height={"32px"} w={"70px"}>

  <option value='option2'> 2</option>
  <option value='option3'> 3</option>
  <option value='option3'> 4</option>

</Select >
</HStack>
<FormLabel paddingTop={"25px"} fontWeight={"bold"}>Full guest name *</FormLabel>
                <Input value={guestName} onChange={(e)=>setGuestName(e.target.value)}     bgColor={"white"}  w={{base:"74%",md:"55%",lg:"65%"}}placeholder="Please enter full guest name" h={"33px"}
           
                />   

                
                <VStack marginTop={"25px"} align={"start"}>

<FormLabel fontSize={"17px"}  fontWeight={"bold"}>Floor preference</FormLabel>
               
             
<Select w={"170px"}  value={floor} onChange={(e)=>setFloor(e.target.value)}     bgColor={"white"} placeholder='No preference' fontSize={"15px"} height={"39px"}  >
 
  <option value='High floor'> High floor</option>
  <option value='Ground floor'> Ground floor</option>
  

</Select>
</VStack>
                    
                </Box>
                </Stack>
                {/* 4th stack */}
                <Stack  bgColor={"#EBF3FF"} border={"0.1px solid gray"}  w={"96%"} margin={"auto"}>
                    <VStack w={"96%"} align={"start"} margin={"auto"} marginBottom={'25px'}>
                        <Text fontSize={"22px"} fontWeight={"bold"}>
                        Special requests
                        </Text>
                        <Text>Special requests cannot be guaranteed – but the property will do its best to meet
                             your needs. You can always make a special request after your booking is complete!</Text>

                             <Text paddingTop={"15px"} fontWeight={"bold"}>Please write your requests in English or Hindi.</Text>
                             <Textarea value={request}  onChange={(e)=>setRequest(e.target.value)}  bgColor={"white"} w={"90%"} h={"90px"} size='sm' />
                    </VStack>
                  
                </Stack>
                <HStack marginBottom={'25px'}>
                <Button  fontSize={"25px"} w={'180px'} h={"38px"} color={"white"} border={"0px"} onClick={callSubmit} colorScheme={"blue"}>Submit</Button>
             <Link style={{textDecoration: "none"}}  href="/">
   <Button onClick={()=>setLoading(true)}
    fontSize={"25px"} w={'180px'} h={"38px"} color={"white"} border={"0px"} colorScheme={"blue"}>Home</Button> </Link>
                </HStack>
            </VStack>

            
            </SimpleGrid>
        {/* </Stack> */}
        </>
    )
}


export const getServerSideProps = async (context) => {
    const { id } = context.query;
  
    const res = await axios.get(`http://localhost:3000/api/property/${id}`);
    console.log(id);
    console.log(res.data);
    return {
      props: {
        data: res.data.property,
      },
    };
  };