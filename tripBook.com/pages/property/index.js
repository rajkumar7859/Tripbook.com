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
import { useRouter } from "next/router";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

const Property = ({ data }) => {
  const router = useRouter();
  const { city } = router.query;
  const [sort, setSort] = useState("TopPicks");

  useEffect(() => {
    router.push({
      pathname: '/property',
      query: { city: city, sortBy: sort }
    })
  },[sort])

  return (
    <Flex
      w="82%"
      m="30px auto"
      justifyContent="space-between"
      gap="10px"
      flexDirection={["column", "column", "row", "row"]}
    >
      <Flex flexDirection="column" minW="277px" gap="5px">
        <SearchForm />

        {/* <Box display={["none", "none", "block", "block"]} fontSize="14px">
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
        </Box> */}
      </Flex>
      <Flex
        w={["100%", "100%", "72%", "72%"]}
        flexDirection="column"
        gap="15px"
      >
        <Text fontSize="22px" fontWeight="bold">
          {city}: {data.length} properties found
        </Text>
        <Menu>
          <MenuButton
            bg="white"
            border="1px solid #1771C4"
            color="#1771C4"
            borderRadius="50px"
            w="220px"
            as={Button}
            rightIcon={<BiChevronDown />}
          >
            Sort By: {sort}
          </MenuButton>
          <MenuList>
            <MenuOptionGroup
              onChange={(value) =>{
                setSort(value)
              }}
              defaultValue="Top picks"
              type="radio"
            >
              <MenuItemOption value="TopPicks">Our top picks</MenuItemOption>

              <MenuItemOption value="HighestRating">
                Rating (Highest)
              </MenuItemOption>
              <MenuItemOption value="LowestRating">
                Rating (Lowest)
              </MenuItemOption>
              <MenuItemOption value="TopReviewed">Top reviewed</MenuItemOption>
              <MenuItemOption value="LowPrice">Low Price</MenuItemOption>
              <MenuItemOption value="HighPrice">High Price</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        {data.map((el) => (

          <Link style={{textDecoration: "none"}} href={`/property/${el._id}`}>
          <SearchCard
            title={el.title}
            TravelText={el.TravelText}
            TravelText1={el.TravelText1}
            TravelText2_o={el.TravelText2_o}
            TravelText_2={el.TravelText_2}
            key={el._id}
            TravelText2={el.TravelText2}
            price={el.price}
            reviews={el.reviews}
            rating={el.rating}
            ratingStatus={el.ratingStatus}
            imagescr={el.imagescr}
            id={el._id}
            city={el.city}
          />
          </Link>
          
        ))}
      </Flex>
    </Flex>
  );
};

export const getServerSideProps = async (context) => {
  const { city, sortBy } = context.query;
  const res = await axios.get(
    `http://localhost:3000/api/property?city=${city}&sortBy=${sortBy}`
  );

  return {
    props: {
      data: res.data.properties,
    },
  };
};

export default Property;
