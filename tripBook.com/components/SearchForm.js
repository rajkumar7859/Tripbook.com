import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import { BsSearch } from "react-icons/bs";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.css";

const SearchForm = () => {
  return (
    <Box p="17px 15px" bg="#FEBB02">
      <Text fontSize="20px" fontWeight="bold">
        Search
      </Text>
      <FormControl>
        <FormLabel fontSize="13px">Destination/property name:</FormLabel>
        <InputGroup bg="white" borderRadius="6px" mb="10px">
          <InputLeftElement pointerEvents="none" children={<BsSearch />} />
          <Input type="text" placeholder="Where are you going" />
        </InputGroup>
        <FormLabel fontSize="13px">Check-in - Check-out</FormLabel>
        <DateRangePicker className="date_picker" />
        <NumberInput min={0} max={20} bg="white" mb="10px" borderRadius="6px">
          <NumberInputField placeholder="Number of guests" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <VStack alignItems="flex-start" mb="10px">
          <Checkbox>Entire homes & apartments</Checkbox>
          <Checkbox>I'm travelling for work</Checkbox>
        </VStack>

        <Button w="100%" h="50px" type="submit" colorScheme="blue">
          Search
        </Button>
      </FormControl>
    </Box>
  );
};

export default SearchForm;
