import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
    Box,
  } from '@chakra-ui/react';
  import { BsQuestionCircle } from 'react-icons/bs'
  import { CgProfile } from 'react-icons/cg'

  
  const addproperty=()=> {
    return (
        <>
        <Box p="1rem 3rem 1rem 2rem" display="flex" bg="#003580" mb="1rem" justifyContent="space-between" >
            <Box><Image  width="200px"
                height="50px"
                alt="logo" src="applogo.png" /></Box>
            <Flex w="20%" justifyContent="space-evenly" color="white"  ><Image borderRadius="50%"
                    background="none"
                    width={25}
                    height={25}
                    alt="IND" src="ind.jpeg" />Help <BsQuestionCircle fontSize="1.5rem" cursor="pointer" /> <CgProfile cursor="pointer" fontSize="1.5rem" /></Flex>
        </Box>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Add your property details</Heading>
            <FormControl id="text">
              <FormLabel>Image</FormLabel>
              <Input type="file" />
            </FormControl>
            <FormControl id="location">
              <FormLabel>Location</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="city">
              <FormLabel>City</FormLabel>
              <Input type="text" />
            </FormControl>
            <Stack spacing={6}>
              <Button colorScheme={'blue'} variant={'solid'}>
                Add your property
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
                'https://q-xx.bstatic.com/psb/capla/static/media/peace-of-mind.a71f10d1.svg'
            }
            />
        </Flex>
      </Stack>
            </>
    );
  }
  export default addproperty