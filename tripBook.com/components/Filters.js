import { Checkbox, Text } from "@chakra-ui/react";

const FilterBox = () => {
  return (
    <Checkbox w="70px" m="5px">
      <Text fontSize="13px">Filter it</Text>
    </Checkbox>
  );
};

export default FilterBox;
