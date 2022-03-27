import {
  Grommet,
  Heading,
  Box,
  Button,
  Carousel,
  Image,
  ResponsiveContext,
} from "grommet";

import { TreeOption } from "grommet-icons";

import React from "react";

export const PostStructuralImg = () => {
  return (
    <Image
      alignSelf="center"
      src="./Ryn_Shaparenko_worknumber_799.png"
      style={{ maxWidth: "42%" }}
      alt="drawing by Ryn Shaparenko: worknumber 799"
    ></Image>
  );
};



export const LogoBig = () => {
  return (
    <Box
      gap="large"
      background="black"
      // animation={{
      //   type: "slideRight",
      //   delay: 10,
      //   duration: 12000,
      // }}
    >
      <Image
        src="./logo.svg"
        style={{ maxWidth: "10%" }}
      ></Image>

      {/* <Button>asd</Button> */}
    </Box>
  );
};

export const LogoSmall = () => {
  return (
    <Box
    margin="26px"
      animation={{
        type: "slideRight",
        delay: 10,
        duration: 12000,
      }}
    >
      <Image src="./logo_textual.png" style={{ maxWidth: "20%" }}></Image>
    </Box>
  );
};

const slideImages = [
  {
    name: "connecting cities",
    src: "./localZines/slides/connecting_cities.png",
  },
  {
    name: "meta discussion",
    src: "./localZines/slides/meta_discussion.png",
  },
  {
    name: "mutual inclusion",
    src: "./localZines/slides/mutual_funds_btw_cities.png",
  },
  {
    name: "relative participation",
    src: "./localZines/slides/relativite_participation.png",
  },
];

const theme = {
  global: {
    font: { family: "Open Sans", size: "18px", height: "20px" },
    background: { color: "#323001" },
  },
};

export const ScientificArtPoster = () => {
  return (
    <Image
      src="./art_flows_in_time_and_space.svg"
      maxWidth="100%"
      // width="400px"
      // height="300px"
      // margin="10px"
      alignSelf="center"
    ></Image>
  );
};

export const CollectivePlaylist = () => {
  return (
    <>

<ResponsiveContext.Consumer>
     {(size) => (size === "small" ? (
      <Heading size="small" textAlign="center">
      the flow is you
    </Heading>
        ) :(
          <Heading size="medium" textAlign="center">
          the flow is you
        </Heading>
        ))}
  </ResponsiveContext.Consumer> 



      
      <Box
        justify="center"
        alignContent="center"
        size="medium"
        direction="column"
      >
        <iframe
          maxWidth="42%"
          maxHeight="100%"
          src="https://www.youtube.com/embed/tBzlhIYELeM"
          title="rest in peace, Jeff Alexander"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        ,
        <iframe
          maxWidth="42%"
          maxHeight="100%"
          src="https://www.youtube.com/embed/A3LFvaAD2-Y"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        ,
        <iframe
          maxWidth="42%"
          maxHeight="100%"
          src="https://www.youtube.com/embed/7jMlFXouPk8"
          title="hope flows"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        ,
        <iframe
          maxWidth="42%"
          maxHeight="100%"
          src="https://www.youtube.com/embed/XRz-_u2tN0c"
          title="say it, yes to good, not to bad. you know what's what, just feel it."
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        ,
      </Box>
      );
    </>
  );
};

export const LocalZineSlides = () => (
  <Grommet theme={theme}>
    <Box align="center" pad="large">
      <Carousel>
        <Box
          align="center"
          gap="medium"
          pad="xlarge"
          background="background-contrast"
          direction="row"
        >
          <Image src={slideImages[0].src}> </Image>
          <Button label="Learn More" />
        </Box>
        <Box
          align="center"
          gap="medium"
          pad="xlarge"
          background="background-contrast"
          direction="row"
        >
          <TreeOption size="xlarge" />
          <Button label="Visit" />
        </Box>
        <Box pad="xlarge" background="accent-3">
          <Image src={slideImages[1].src}> </Image>
        </Box>

        <Box
          align="center"
          gap="medium"
          pad="xlarge"
          background="background-contrast"
          direction="row"
        >
          <TreeOption size="xlarge" />
          <Button label="Visit" />
        </Box>
        <Box pad="xlarge" background="accent-3">
          <Image src={slideImages[2].src}> </Image>
        </Box>
      </Carousel>
    </Box>
  </Grommet>
);

LocalZineSlides.storyName = "something unique";

export default {
  title: "LocalZines for +Impact",
};
