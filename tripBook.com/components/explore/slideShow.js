import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Link from "next/link";
import { Box, Button, Image, Text } from "@chakra-ui/react";

export const Slideshow = ({ image, no, tag, subTag }) => {
  return (
    <Box
      className="slide-container"

      // border={{ base:"8px solid red", sm:'5px solid green', md: '3px solid teal', lg: '2px solid black' , xl:'3px solid red' , '2xl':'4px solid grey' }}
      // display={{ base:"block" , sm:"block" , md:"flex" , lg:"flex" , xl : "flex" , '2xl' : "flex"}}
    >
      <Box
        textAlign={"start"}
        width={"88%"}
        margin={"auto"}
        marginBottom={"20px"}
        // border={{
        //   base: "8px solid red",
        //   sm: "5px solid green",
        //   md: "3px solid teal",
        //   lg: "2px solid pink",
        //   xl: "3px solid grey",
        //   "2xl": "4px solid grey",
        // }}
      >
        <Text
          fontWeight={"bold"}
          fontSize={["12px", "15px", "18px", "22px"]}
          marginBottom={"8px"}
          marginTop={"15px"}
        >
          {tag}
        </Text>
        <p style={{ marginBottom: "8px" }}>{subTag}</p>
        <Slide slidesToShow={no} autoplay={false} className="slidingCont">
          {image.map((slideImage, index) => (
            <Link href={`/explore${slideImage.caption}`} key={index}>
              <Box
                className="each-slide"
                key={index}
                // border={{
                //   base: "8px solid red",
                //   sm: "5px solid green",
                //   md: "3px solid teal",
                //   lg: "2px solid black",
                //   xl: "2px solid black",
                //   "2xl": "4px solid grey",
                // }}
              >
                <Box
                  marginRight={"10px"}
                //   border={{
                //     base: "8px solid red",
                //     sm: "5px solid green",
                //     md: "3px solid teal",
                //     lg: "2px solid black",
                //     xl: "3px solid red",
                //     "2xl": "4px solid grey",
                //   }}
                  height="auto"
                >
                  <img src={slideImage.url} alt="v" />
                  <Box display={{ base:"none" , sm:"none" , md:"block" , lg:"block" , xl : "block" , '2xl' : "block"}} > 
                  <h3 style={{ fontWeight: "bold" }}>{slideImage.caption}</h3>
                  <h3 style={{ fontWeight: "400" }}>{slideImage.property}</h3>
                  </Box>
                  <Box display={{ base:"block" , sm:"block" , md:"none" , lg:"none" , xl : "none" , '2xl' : "none"}} > 
                  <h3 style={{ fontWeight: "thin" }}
                  fontSize={{ base:"2px" , sm:"10px"  }}
                  >{slideImage.caption}</h3>
                  
                  </Box>
                </Box>
              </Box>
            </Link>
          ))}
        </Slide>
      </Box>
    </Box>
  );
};
