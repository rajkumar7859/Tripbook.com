import {
    Box,
    Button,
    Flex,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItemOption,
    MenuOptionGroup,
  } from "@chakra-ui/react";
  
  import { BiChevronDown } from "react-icons/bi";
  import FilterBox from "../../components/Filters";
  import SearchCard from "../../components/SearchCard";
  import SearchForm from "../../components/SearchForm";
  
  const SearchResults = () => {
    return (
      <Flex
        w="82%"
        m="30px auto"
        justifyContent="space-between"
        gap="10px"
        flexDirection={["column","column","row","row"]}
      >
        <Flex flexDirection="column" minW="277px" gap="5px">
          <SearchForm />
  
          <Box display={["none","none","block","block"]} fontSize="14px">
            <Box p="8px" border="1px solid #E7E7E7">
              <Text fontWeight="bold">Filter by:</Text>
            </Box>
            <Box p="8px" border="1px solid #E7E7E7">
              <Text fontWeight="bold">Your previous filters</Text>
              {Array(1).fill(<FilterBox />)}
            </Box>
            <Flex p="8px" border="1px solid #E7E7E7" flexDirection="column">
              <Text fontWeight="bold">Popular filters</Text>
              {Array(8).fill(<FilterBox />)}
            </Flex>
            <Flex p="8px" border="1px solid #E7E7E7" flexDirection="column">
              <Text fontWeight="bold">Health & safety</Text>
              {Array(1).fill(<FilterBox />)}
            </Flex>
            <Flex p="8px" border="1px solid #E7E7E7" flexDirection="column">
              <Text fontWeight="bold">Sustainability</Text>
              {Array(1).fill(<FilterBox />)}
            </Flex>
            <Flex p="8px" border="1px solid #E7E7E7" flexDirection="column">
              <Text fontWeight="bold">Star rating</Text>
              {Array(6).fill(<FilterBox />)}
            </Flex>
            <Flex p="8px" border="1px solid #E7E7E7" flexDirection="column">
              <Text fontWeight="bold">Distance from centre</Text>
              {Array(3).fill(<FilterBox />)}
            </Flex>
            <Flex p="8px" border="1px solid #E7E7E7" flexDirection="column">
              <Text fontWeight="bold">Fun things to do</Text>
              {Array(26).fill(<FilterBox />)}
            </Flex>
            <Flex p="8px" border="1px solid #E7E7E7" flexDirection="column">
              <Text fontWeight="bold">Entire places</Text>
              {Array(1).fill(<FilterBox />)}
            </Flex>
            <Flex p="8px" border="1px solid #E7E7E7" flexDirection="column">
              <Text fontWeight="bold">Property type</Text>
              {Array(5).fill(<FilterBox />)}
            </Flex>
          </Box>
        </Flex>
        <Flex w={["100%","100%","72%","72%"]} flexDirection="column" gap="15px">
          <Text fontSize="22px" fontWeight="bold">
            Jaipur: 829 properties found
          </Text>
          <Menu>
            <MenuButton
              bg="white"
              border="1px solid #1771C4"
              color="#1771C4"
              borderRadius="50px"
              w="200px"
              as={Button}
              rightIcon={<BiChevronDown />}
            >
              Sort By:
            </MenuButton>
            <MenuList>
              <MenuOptionGroup defaultValue="top" type="radio">
                <MenuItemOption value="top">Our top picks</MenuItemOption>
                <MenuItemOption value="Homes">
                  Homes and apartments
                </MenuItemOption>
                <MenuItemOption value="StarsH">Stars (Highest)</MenuItemOption>
                <MenuItemOption value="StarsL">Stars (Lowest)</MenuItemOption>
                <MenuItemOption value="Dis">Distance from city</MenuItemOption>
                <MenuItemOption value="Reviews">Top reviewed</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          {Array(9).fill(<SearchCard />)}
        </Flex>
      </Flex>
    );
  };
  
  export default SearchResults;
  