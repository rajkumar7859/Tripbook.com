import { Box, Container, Heading, Text } from "@chakra-ui/react";
import styles from "../backgroundImg/bgComponent.module.css";
function BgComponent() {
  return (
    <>
      <Box
        // border="2px solid black"
        w="100%"
        color="white"
        height={{ md: "400px", sm: "300px" }}
      >
        <Box className={styles.bgImg} width="100%" height="100%">
          <Box 
          // border="2px solid red"
           w="90%" margin="auto" p={4}>
            <Box className={styles.textOnImg}>
              <Text
                fontSize={{ base: "24px", md: "40px", lg: "56px" }}
                fontWeight="bold"
                 
              >
                The joy of home anywhere in the world
              </Text>
              <br />

              <Text fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
                Easy booking, easy living
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default BgComponent;
