import { Checkbox, Text } from "@chakra-ui/react";

const FilterBox = ({type}) => {
  return (
    <Checkbox name={type} onInput={({target}) => console.log(target.name)} m="5px">
      <Text fontSize="13px">
        {
          type === "Rating" ? ("> 5 Rating")
          : type === "Reviews" ? ("> 50 Reviews")
          : type === "Price" ? ("< 8000 Price")
          : null
        }
      </Text>
    </Checkbox>
  );
};

export default FilterBox;
