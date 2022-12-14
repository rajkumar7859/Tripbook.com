import {
  Flex,
  Text,
  Button,
  Image,
  Link,
  Box,
  HStack,
  Center,
} from "@chakra-ui/react";
import { AiFillStar, AiFillLike } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";

const SearchCard = () => {
  return (
    <Flex w="100%" p="15px" border="1px solid #C6C6C6" gap="10px" flexDirection={["column","column","column","row","row"]}>
      <Box position="relative" minW="200px" h="200px">
        <Image
          w="100%"
          h="100%"
          src="https://cf.bstatic.com/xdata/images/hotel/square200/323330336.webp?k=b584d3e27a05d007d1ef1443849b8f00d296f51c347b9c97fab70ae45841b2c2&o=&s=1"
        />
        <Box w="30px" h="30px" position="absolute" top="10px" right="0px">
          <BsHeart className="image_icon" fontSize="20px" />
        </Box>
      </Box>
      <Flex flexDirection="column" gap="5px">
        <Flex alignItems={"center"}>
          <Text
            mr="10px"
            fontWeight={"bold"}
            color="blackAlpha.700"
            fontSize={"20px"}
          >
            Haveli Kalwara - A Heritage Hotel
          </Text>
          <AiFillStar color="#FEBB02" />
          <AiFillStar color="#FEBB02" />
          <AiFillLike color="#FEBB02" />
        </Flex>

        <HStack fontSize="12px">
          <Link color="#007BD2" textDecoration={"underline"}>
            Lorem lorem
          </Link>
          <Link color="#007BD2" textDecoration={"underline"}>
            Lorem lorem
          </Link>
          <Text>450 m from centre</Text>
        </HStack>
        <Text fontSize="12px">Travel Sustainable property</Text>
        <Text fontSize="12px">
          Initially, built in the 17th century as the Rajput Court House,
          Kalwara Haveli is located in Jaipur. The Ajmeri Gate is 750 metres
          away.
        </Text>
      </Flex>
      <Flex flexDirection={"column"} gap="10px">
        <Flex justifyContent={"space-between"} alignItems="center">
          <Flex flexDirection={"column"}>
            <Text>Very good</Text>
            <Text color="blackAlpha.700" fontSize={"12px"}>
              195 reviews
            </Text>
          </Flex>
          <Center w="30px"
            h="30px"
            bg="#003580"
            borderRadius={"4px"}
            borderBottomLeftRadius="0px"
            color="white">8.3</Center>
        </Flex>
        <Button colorScheme={"blue"}>Show Prices</Button>
      </Flex>
    </Flex>
  );
};

export default SearchCard;
