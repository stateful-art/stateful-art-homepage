// import logo from './logo.svg';
// import './App.css';
import {
  // Accordion,
  // AccordionPanel,
  Anchor,
  Box,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Grommet,
  Heading,
  Image,
  Paragraph,
  ResponsiveContext,
  Text,
  Tip,
} from "grommet";
import {
  // AddCircle,
  Aggregate,
  Attraction,
  CaretDown,
  CaretUp,
  Directions,
  Aed,
  // SubtractCircle,
} from "grommet-icons";
import React from "react";

const theme = {
  global: {
    font: { family: "Open Sans", size: "18px", height: "20px" },
    background: { color: "#323001" },
  },
};

// const StartManifest = () => {
//   return (
//     <Box justify="center" alignContent="center">
//       <Paragraph size="large">
//         <Accordion>
//           <AccordionPanel
//             // margin="20px"
//             label={
//               <Text size="medium">
//                 <Heading>free-styler</Heading>
//               </Text>
//             }
//           >
//             <Box background="#FFFF99" height="middle" width="large"></Box>
//           </AccordionPanel>
//         </Accordion>
//       </Paragraph>
//     </Box>
//   );
// };

// const DesignPrinciples = () => {
//   return (
//     <Box justify="center" alignContent="center">
//       <Paragraph size="large">
//         <Accordion>
//           <AccordionPanel
//             // margin="20px"
//             label={
//               <Text size="medium">
//                 <Heading>design principles</Heading>
//               </Text>
//             }
//           >
//             <Box background="#FFFF99" height="middle" width="large">
//               <Paragraph>Build solidarity, not organisations.</Paragraph>

//               <Paragraph color="black" alignSelf="center" size="medium">
//                 art is intersectional, so our cities. every city has an
//                 identity, and that as well, artistically. connecting abstraction
//                 exist $GENREs, then $CAUSEs and $SKILLs ground between cities to
//                 stand together.
//               </Paragraph>

//               <Paragraph color="black" alignSelf="center" size="medium">
//                 there are no user types. there are behaviours, and we find
//                 common ground via audience, resident and artists being our base.
//               </Paragraph>
//             </Box>
//           </AccordionPanel>
//         </Accordion>
//       </Paragraph>
//     </Box>
//   );
// };

const CitiesConnViaGenres = () => {
  return (
    <Image
      src="./cities_bridged_by_genres.png"
      width="400px"
      height="300px"
      margin="10px"
      alignSelf="center"
    ></Image>
  );
};
const OrganiCities = () => {
  return (
    <Box direction="column" alignSelf="center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#273036"
          fill-opacity="1"
          d="M0,96L0,288L72,288L72,32L144,32L144,192L216,192L216,224L288,224L288,0L360,0L360,160L432,160L432,192L504,192L504,256L576,256L576,128L648,128L648,128L720,128L720,320L792,320L792,192L864,192L864,64L936,64L936,192L1008,192L1008,96L1080,96L1080,224L1152,224L1152,160L1224,160L1224,192L1296,192L1296,288L1368,288L1368,96L1440,96L1440,0L1368,0L1368,0L1296,0L1296,0L1224,0L1224,0L1152,0L1152,0L1080,0L1080,0L1008,0L1008,0L936,0L936,0L864,0L864,0L792,0L792,0L720,0L720,0L648,0L648,0L576,0L576,0L504,0L504,0L432,0L432,0L360,0L360,0L288,0L288,0L216,0L216,0L144,0L144,0L72,0L72,0L0,0L0,0Z"
        ></path>
      </svg>
      <Heading size="medium" alignSelf="center">
        Decentralised
      </Heading>
      <Text size="large" alignSelf="center">
        <Heading size="medium" alignSelf="center">
          {" "}
          Autonomous {"&"} Artistic
        </Heading>
      </Text>{" "}
      <br></br>
      <Heading size="medium" alignSelf="center">
        {" "}
        OrganiCities
      </Heading>
      <br></br>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffd700"
          fill-opacity="1"
          d="M0,96L0,288L72,288L72,32L144,32L144,192L216,192L216,224L288,224L288,0L360,0L360,160L432,160L432,192L504,192L504,256L576,256L576,128L648,128L648,128L720,128L720,320L792,320L792,192L864,192L864,64L936,64L936,192L1008,192L1008,96L1080,96L1080,224L1152,224L1152,160L1224,160L1224,192L1296,192L1296,288L1368,288L1368,96L1440,96L1440,320L1368,320L1368,320L1296,320L1296,320L1224,320L1224,320L1152,320L1152,320L1080,320L1080,320L1008,320L1008,320L936,320L936,320L864,320L864,320L792,320L792,320L720,320L720,320L648,320L648,320L576,320L576,320L504,320L504,320L432,320L432,320L360,320L360,320L288,320L288,320L216,320L216,320L144,320L144,320L72,320L72,320L0,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
};

const LogoSmall = () => {
  return (
    <Box animation="">
      <Image src="./connecting_cities_with_arts.svg" margin="20px"></Image>
    </Box>
  );
};

const LogoBig = () => {
  return (
    <Box animation="fadeIn">
      <Image
        src="./connecting_cities_with_arts.svg"
        // src="./stateful-art-top.png"
        width="525px"
        height="300px"
        margin="10px"
      ></Image>
    </Box>
  );
};

// const ParticipantsAccordionTheme = {
//   accordion: {
//     heading: {
//       level: 3,
//       margin: { vertical: "20px", horizontal: "24px" },
//     },
//     hover: {
//       heading: {
//         color: "accent-2",
//       },
//     },
//     icons: {
//       collapse: SubtractCircle,
//       expand: AddCircle,
//       color: "orange",
//     },
//     border: undefined,
//     panel: {
//       // border: {
//       //   side: 'horizontal',
//       //   size: 'medium',
//       //   color: '#DADADA',
//       //   style: 'dotted',
//       // },
//     },
//   },
// };

const GenreCardsHorizontal = (direction) => {
  return (
    <>
      {/* <Box direction="row"> */}
      <Box direction={{ direction }}>
        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "medium" }}
              round="small"
              background="background-front"
              responsive={false}
              // animation={{
              //   type: "jiggle",
              //   delay: 20,
              //   duration: 4000,
              // }}
            >
              <Text weight="bold">Berlin, Hamburg, Istanbul, Los Angeles</Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader alignSelf="center" pad="small" background="light-1">
              <Text size="large" weight="bolder">
                $HIPHOP
              </Text>
            </CardHeader>
            <CardBody pad="small" background="orange">
              <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0xa21629c00a7d9c88ea98673a0b81becd156cfe416920ec6d40b408d1506eb1e4"
                target="_blank"
                color="white"
              >
                <Box animation="zoomOut">
                  <Image
                    src="./hiphop.png"
                    width="120px"
                    height="80px"
                    style={{
                      marginLeft: "20px",
                      marginRight: "36px",
                      marginTop: "12px",
                    }}
                  ></Image>
                </Box>
              </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ 4 cities <Attraction />
              </Text>
            </CardFooter>
          </Card>
        </Tip>

        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="background-front"
              responsive={false}
            >
              <Text weight="bold" font="large">
                Hamburg
              </Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader alignSelf="center" pad="small">
              <Text size="large" weight="bolder">
                $ELECTRO
              </Text>
            </CardHeader>
            <CardBody pad="small" background="black">
              <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0x1b84234a852a468cc28f33a1702925d620d347f43ab3809892522e5ffe6362f6"
                target="_blank"
                color="white"
              >
                <Box>
                  <Image
                    src="./electronic_music.jpeg"
                    width="120px"
                    height="104px"
                    style={{
                      marginLeft: "22px",
                      marginRight: "36px",
                      marginTop: "2px",
                    }}
                  ></Image>
                </Box>
              </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ 1 city
              </Text>
              <Attraction />
              {/*
              <Button icon={<Attraction color="red" />} hoverIndicator />
              <Button icon={<ShareOption color="plain" />} hoverIndicator /> 
              */}
            </CardFooter>
          </Card>
        </Tip>

        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="background-front"
              responsive={false}
            >
              <Text weight="bold" font="large">
                Hamburg
              </Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader alignSelf="center" pad="small">
              <Text size="large" weight="bolder">
                $DUB
              </Text>
            </CardHeader>
            <CardBody pad="small" background="black">
              {/* <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0x1b84234a852a468cc28f33a1702925d620d347f43ab3809892522e5ffe6362f6"
                target="_blank"
                color="white"
              > */}
              <Box>
                <Image
                  src="./dub.jpeg"
                  width="100px"
                  height="104px"
                  style={{
                    marginLeft: "22px",
                    marginRight: "36px",
                    marginTop: "2px",
                  }}
                ></Image>
              </Box>
              {/* </Anchor> */}
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ no city
              </Text>
              <Attraction />
              {/*
              <Button icon={<Attraction color="red" />} hoverIndicator />
              <Button icon={<ShareOption color="plain" />} hoverIndicator /> 
              */}
            </CardFooter>
          </Card>
        </Tip>
      </Box>

      <Box
        direction="row"
        alignSelf="center"
        animation={{
          type: "fadeIn",
          delay: 20,
          duration: 1000,
        }}
      >
        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="background-front"
              responsive={false}
            >
              <Text weight="bold">Berlin, Hamburg</Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader alignSelf="center" pad="small">
              <Text size="large" weight="bolder">
                $GRAFFITI
              </Text>
            </CardHeader>
            <CardBody pad="small" background="red">
              <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0x6220750e4877cca63e0d68e41b88188ee4cde9b1afc9a6ce11edd72b1c3f0c9c"
                target="_blank"
                color="white"
              >
                <Box alignSelf="center">
                  <Image
                    src="./graffiti.jpeg"
                    width="130px"
                    height="104px"
                    style={{
                      marginLeft: "22px",
                      marginRight: "36px",
                      marginTop: "2px",
                    }}
                  ></Image>
                </Box>
              </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ 2 cities
              </Text>
              <Attraction />
              {/* <Button icon={<Attraction color="red" />} hoverIndicator />
              <Button icon={<ShareOption color="plain" />} hoverIndicator /> */}
            </CardFooter>
          </Card>
        </Tip>

        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="background-front"
              responsive={false}
            >
              {/* <Text weight="bold">Berlin, Hamburg</Text> */}
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader alignSelf="center" pad="small">
              <Text size="large" weight="bolder">
                $CUBISM
              </Text>
            </CardHeader>
            <CardBody pad="small" background="red">
              {/* <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0x6220750e4877cca63e0d68e41b88188ee4cde9b1afc9a6ce11edd72b1c3f0c9c"
                target="_blank"
                color="white"
              > */}
              <Box alignSelf="center">
                <Image
                  src="./painting_picasso.jpeg"
                  width="92px"
                  height="130px"
                  style={{
                    marginLeft: "22px",
                    marginRight: "22px",
                    marginTop: "2px",
                    marginBottom: "1px",
                  }}
                ></Image>
              </Box>
              {/* </Anchor> */}
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ no cities
              </Text>
              <Attraction />
              {/* <Button icon={<Attraction color="red" />} hoverIndicator />
              <Button icon={<ShareOption color="plain" />} hoverIndicator /> */}
            </CardFooter>
          </Card>
        </Tip>
      </Box>
      <Box direction="row">
        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="#FFFF99"
              responsive={false}
              animation={{
                type: "slideLeft",
                delay: 20,
                duration: 1000,
              }}
            >
              <Text size="medium">
                reggae community currently have no city-level treasury.
              </Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader alignSelf="center" pad="small" background="light-1">
              <Text size="large" weight="bolder">
                $REGGAE
              </Text>
            </CardHeader>
            <CardBody background="black">
              <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0x594080e1603af01cba9155a6fa6899b833c5549d555c89a2e7d578be33495ff3"
                target="_blank"
                color="white"
              >
                <Box>
                  <Image
                    src="./reggae.jpeg"
                    width="90px"
                    height="76px"
                    style={{
                      marginLeft: "48px",
                      marginRight: "36px",
                      marginTop: "20px",
                    }}
                  ></Image>
                </Box>
              </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ no cities
              </Text>
              <Attraction />
              {/* <Button icon={<Attraction color="red" />} hoverIndicator />
              <Button icon={<ShareOption color="plain" />} hoverIndicator /> */}
            </CardFooter>
          </Card>
        </Tip>
        {/* PUNK     */}
        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="background-front"
              responsive={false}
            >
              <Text size="medium" weight="bolder">
                Hamburg
              </Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader
              alignSelf="center"
              pad="small"
              background="light-1"
              color="white"
            >
              <Text size="large" weight="bolder">
                $PUNK
              </Text>
            </CardHeader>
            <CardBody pad="small" background="black">
              <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0x58dac8cfce8db55de5ee3b16a27461a41cf074b0f1a04d73661846dfa2dccd95"
                target="_blank"
                color="white"
              >
                <Box>
                  <Image
                    src="./punk.png"
                    width="110px"
                    height="110px"
                    style={{
                      marginLeft: "22px",
                      marginRight: "36px",
                    }}
                  ></Image>
                </Box>
              </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ 1 city
              </Text>

              <Attraction />
            </CardFooter>
          </Card>
        </Tip>
        {/* FOLK */}
        {/* ROCK */}
        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="background-front"
              responsive={false}
            >
              <Text size="medium" weight="bolder">
                Berlin, Hamburg, Istanbul, Los Angeles
              </Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader
              alignSelf="center"
              pad="small"
              background="light-1"
              color="white"
            >
              <Text size="large" weight="bolder">
                $ROCK
              </Text>
            </CardHeader>
            <CardBody pad="small" background="purple">
              <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0x58dac8cfce8db55de5ee3b16a27461a41cf074b0f1a04d73661846dfa2dccd95"
                target="_blank"
                color="white"
              >
                <Box>
                  <Image
                    src="./rock_horizontal.png"
                    width="100px"
                    height="60px"
                    style={{
                      marginLeft: "22px",
                      marginRight: "36px",
                      marginTop: "12px",
                    }}
                  ></Image>
                </Box>
              </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ 4 cities
              </Text>

              <Attraction />
            </CardFooter>
          </Card>
        </Tip>
      </Box>
      <Box
        size
        direction="row"
        alignSelf="center"
        animation={{
          type: "slideDown",
          delay: 20,
          duration: 1000,
        }}
      >
        <Tip
          size="large"
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="background-front"
              responsive={false}
            >
              <Text textAlign="center" weight="bold">
                join our discord channel and events to learn how.
              </Text>
              <Text size="small" alignSelf="center" textAlign="center">
                build resilient, free and democratically scalable,creative
                mechanisms for your city.
              </Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
            alignContent="center"
          >
            <CardHeader
              alignSelf="center"
              pad="small"
              background="light-1"
              color="white"
            >
              <Aggregate size="large"></Aggregate>
            </CardHeader>
            <CardBody pad="small" background="white">
              <Anchor href="https://discord.gg/eheV9EcudR" target="_blank">
                come join our discord server,  initiate new $GENREs in new cities.
                <br></br>
              </Anchor>
              <Paragraph textAlign="center">for "real".</Paragraph>
            </CardBody>
          </Card>
        </Tip>
      </Box>
      {/* </Box> */}
    </>
  );
};

const GenreCardsVertical = (direction) => {
  return (
    <>
      {/* <Box direction="row"> */}
      <Box direction={{ direction }}>
        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "medium" }}
              round="small"
              background="background-front"
              responsive={false}
              // animation={{
              //   type: "jiggle",
              //   delay: 20,
              //   duration: 4000,
              // }}
            >
              <Text weight="bold">Berlin, Hamburg, Istanbul, Los Angeles</Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader alignSelf="center" pad="small" background="light-1">
              <Text size="large" weight="bolder">
                $HIPHOP
              </Text>
            </CardHeader>
            <CardBody pad="small" background="orange">
              <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0xa21629c00a7d9c88ea98673a0b81becd156cfe416920ec6d40b408d1506eb1e4"
                target="_blank"
                color="white"
              >
                <Box animation="zoomOut">
                  <Image
                    src="./hiphop.png"
                    width="120px"
                    height="80px"
                    style={{
                      marginLeft: "20px",
                      marginRight: "36px",
                      marginTop: "12px",
                    }}
                  ></Image>
                </Box>
              </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ 4 cities <Attraction />
              </Text>
            </CardFooter>
          </Card>
        </Tip>

        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="background-front"
              responsive={false}
            >
              <Text weight="bold" font="large">
                Hamburg
              </Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader alignSelf="center" pad="small">
              <Text size="large" weight="bolder">
                $ELECTRO
              </Text>
            </CardHeader>
            <CardBody pad="small" background="black">
              <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0x1b84234a852a468cc28f33a1702925d620d347f43ab3809892522e5ffe6362f6"
                target="_blank"
                color="white"
              >
                <Box>
                  <Image
                    src="./electronic_music.jpeg"
                    width="120px"
                    height="104px"
                    style={{
                      marginLeft: "22px",
                      marginRight: "36px",
                      marginTop: "2px",
                    }}
                  ></Image>
                </Box>
              </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ 1 city
              </Text>
              <Attraction />
              {/* <Button icon={<Attraction color="red" />} hoverIndicator />
              <Button icon={<ShareOption color="plain" />} hoverIndicator /> */}
            </CardFooter>
          </Card>
        </Tip>
      </Box>

      <Box
        direction="row"
        alignSelf="center"
        animation={{
          type: "fadeIn",
          delay: 20,
          duration: 1000,
        }}
      >
        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="background-front"
              responsive={false}
            >
              <Text weight="bold">Berlin, Hamburg</Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader alignSelf="center" pad="small">
              <Text size="large" weight="bolder">
                $GRAFFITI
              </Text>
            </CardHeader>
            <CardBody pad="small" background="red">
              <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0x6220750e4877cca63e0d68e41b88188ee4cde9b1afc9a6ce11edd72b1c3f0c9c"
                target="_blank"
                color="white"
              >
                <Box alignSelf="center">
                  <Image
                    src="./graffiti.jpeg"
                    width="130px"
                    height="104px"
                    style={{
                      marginLeft: "22px",
                      marginRight: "36px",
                      marginTop: "2px",
                    }}
                  ></Image>
                </Box>
              </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ 2 cities
              </Text>
              <Attraction />
              {/* <Button icon={<Attraction color="red" />} hoverIndicator />
              <Button icon={<ShareOption color="plain" />} hoverIndicator /> */}
            </CardFooter>
          </Card>
        </Tip>
      </Box>
      <Box direction="row">
        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="#FFFF99"
              responsive={false}
              animation={{
                type: "slideLeft",
                delay: 20,
                duration: 1000,
              }}
            >
              <Text size="medium">
                reggae community currently have no city-level treasury.
              </Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader alignSelf="center" pad="small" background="light-1">
              <Text size="large" weight="bolder">
                $REGGAE
              </Text>
            </CardHeader>
            <CardBody background="black">
              <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0x594080e1603af01cba9155a6fa6899b833c5549d555c89a2e7d578be33495ff3"
                target="_blank"
                color="white"
              >
                <Box>
                  <Image
                    src="./reggae.jpeg"
                    width="90px"
                    height="76px"
                    style={{
                      marginLeft: "48px",
                      marginRight: "36px",
                      marginTop: "20px",
                    }}
                  ></Image>
                </Box>
              </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ 0 cities
              </Text>
              <Attraction />
              {/* <Button icon={<Attraction color="red" />} hoverIndicator />
              <Button icon={<ShareOption color="plain" />} hoverIndicator /> */}
            </CardFooter>
          </Card>
        </Tip>
        {/* PUNK     */}
        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="background-front"
              responsive={false}
            >
              <Text size="medium" weight="bolder">
                Hamburg
              </Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader
              alignSelf="center"
              pad="small"
              background="light-1"
              color="white"
            >
              <Text size="large" weight="bolder">
                $PUNK
              </Text>
            </CardHeader>
            <CardBody pad="small" background="purple">
              <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0x58dac8cfce8db55de5ee3b16a27461a41cf074b0f1a04d73661846dfa2dccd95"
                target="_blank"
                color="white"
              >
                <Box>
                  <Image
                    src="./punk.png"
                    width="100px"
                    height="60px"
                    style={{
                      marginLeft: "22px",
                      marginRight: "36px",
                      marginTop: "12px",
                    }}
                  ></Image>
                </Box>
              </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ 1 city
              </Text>

              <Attraction />
            </CardFooter>
          </Card>
        </Tip>
        {/* FOLK */}
        {/* ROCK */}
        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="background-front"
              responsive={false}
            >
              <Text size="medium" weight="bolder">
                in 0 cities
              </Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader
              alignSelf="center"
              pad="small"
              background="light-1"
              color="white"
            >
              <Text size="large" weight="bolder">
                $ROCK
              </Text>
            </CardHeader>
            <CardBody pad="small" background="purple">
              <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0x58dac8cfce8db55de5ee3b16a27461a41cf074b0f1a04d73661846dfa2dccd95"
                target="_blank"
                color="white"
              >
                <Box>
                  <Image
                    src="./rock_horizontal.png"
                    width="100px"
                    height="60px"
                    style={{
                      marginLeft: "22px",
                      marginRight: "36px",
                      marginTop: "12px",
                    }}
                  ></Image>
                </Box>
              </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ 4 cities
              </Text>

              <Attraction />
            </CardFooter>
          </Card>
        </Tip>
      </Box>
      <Box
        size
        direction="row"
        alignSelf="center"
        animation={{
          type: "slideDown",
          delay: 20,
          duration: 1000,
        }}
      >
        <Tip
          size="large"
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="background-front"
              responsive={false}
            >
              <Text textAlign="center" weight="bold">
                join our discord channel and events to learn how.
              </Text>
              <Text size="small" alignSelf="center" textAlign="center">
                build resilient, free and democratically scalable,creative
                mechanisms for your city.
              </Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
            alignContent="center"
          >
            <CardHeader
              alignSelf="center"
              pad="small"
              background="light-1"
              color="white"
            >
              <Aggregate size="large"></Aggregate>
            </CardHeader>
            <CardBody pad="small" background="white">
              <Anchor href="https://discord.gg/eheV9EcudR" target="_blank">
                start an artistic community DAO for your city today,
                <br></br>
              </Anchor>
              <Paragraph textAlign="center">for "real".</Paragraph>
            </CardBody>
          </Card>
        </Tip>
      </Box>
      {/* </Box> */}
    </>
  );
};

// const ParticipantsAccordion = ({ animate, multiple, ...rest }) => (
//   <Grommet theme={ParticipantsAccordionTheme}>
//     <ResponsiveContext.Consumer>
//       {(size) =>
//         size === "small" ? (
//           <Box {...rest} pad="large" align="center" justify="center">
//             <Heading size="small">NFT roadmap:</Heading>

//             <Paragraph alignSelf="center" margin="12px">
//               <Text>
//                 initial implementation will cover dedicating resources to
//                 multiple cities {"&"} genres.
//               </Text>
//             </Paragraph>
//             <Paragraph alignSelf="center" margin="12px">
//               <Text>
//                 With a focus on voting for artists that are proposed within
//                 genres of the cities.
//               </Text>
//             </Paragraph>

//             <Paragraph alignSelf="center" margin="12px">
//               <Text>sonn will introduce causes. waitForIt.</Text>
//             </Paragraph>

//             <Accordion animate={animate} multiple>
//               <AccordionPanel
//                 margin="20px"
//                 label={<Text size="medium">artists mint artworks</Text>}
//               >
//                 <Box background="#9a3c3c" height="middle" width="middle">
//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>Artists initiate the scope of impact.</Text>
//                   </Paragraph>

//                   <Image
//                     src="./a_pseudo_banksy_mint.png"
//                     width="400px"
//                     height="360px"
//                     margin="32px"
//                   ></Image>

//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>
//                       {" "}
//                       NFT royalties of an artwork, partially dedicated to
//                       empower cities, through combinations of causes and genres.
//                     </Text>
//                   </Paragraph>
//                 </Box>
//               </AccordionPanel>

//               <AccordionPanel
//                 margin="20px"
//                 label={
//                   <Text size="medium"> {"&"} create topics for genres</Text>
//                 }
//               >
//                 <Box background="#9a3c3c" height="middle" width="middle">
//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>
//                       stateful.art treasury on 0xhabitat.org enables artists to
//                       initiate artistic movements as topics.
//                     </Text>
//                     <Image
//                       src="./create_new_community_in_habitat.png"
//                       width="380px"
//                       height="400px"
//                       margin="20px"
//                     ></Image>
//                   </Paragraph>

//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>
//                       {" "}
//                       They can also include communication channels for those
//                       communities.
//                     </Text>
//                   </Paragraph>
//                 </Box>
//               </AccordionPanel>

//               <AccordionPanel
//                 margin="20px"
//                 label={<Text size="medium">audiences vote via signalling</Text>}
//               >
//                 <Box
//                   background="#9a3c3c"
//                   alignSelf="center"
//                   height="middle"
//                   width="middle"
//                   margin="20px"
//                 >
//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>
//                       members in those cities, that are as well audiences,
//                       artists and residents of those cities; vote on which
//                       artistic projects will get funding and be able to propose
//                       new artists and projects from other cities and genres to
//                       their communities.
//                     </Text>
//                   </Paragraph>

//                   <Image
//                     src="./jazz_elise_reggae_hamburg.png"
//                     width="380px"
//                     height="360px"
//                     margin="32px"
//                   ></Image>

//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>
//                       When there is enough fund collected for those cities,
//                       proposed and voted artists will be entitled for a
//                       financial and community support for a future artist
//                       residency.
//                     </Text>
//                   </Paragraph>
//                 </Box>
//               </AccordionPanel>

//               {/* <AccordionPanel
//                     margin="20px"
//                     label={<Text size="medium">collectors help making positive impact</Text>}
//                   >
//                     <Box background="#9a3c3c" alignSelf="center" height="middle" width="medium" margin="20px">
//                       <Paragraph justify="center" margin="12px">
//                         <Text >
//                                 Collectors will be included on artistic movements of those cities and they'll be able to vote on artist residencies too.
//                           </Text>
//                       </Paragraph>

//                     </Box>
//                   </AccordionPanel> */}
//             </Accordion>
//           </Box>
//         ) : (
//           <Box {...rest} pad="large" align="center" justify="center">
//             {/* ASDF */}
//             <ArtfulSpaces />

//             <Accordion animate={animate} multiple>
//               <AccordionPanel
//                 margin="20px"
//                 label={<Text size="medium">artists mint artworks</Text>}
//               >
//                 <Box background="#9a3c3c" height="middle" width="600px">
//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>they initiate the scope of impact.</Text>
//                     <Text>
//                       {" "}
//                       NFT royalties of an artwork, partially dedicated to
//                       empower cities, through combinations of causes and genres.
//                     </Text>
//                   </Paragraph>

//                   <Image
//                     src="./a_pseudo_banksy_mint.png"
//                     width="582px"
//                     height="576px"
//                     margin="22px"
//                     alignSelf="center"
//                   ></Image>
//                 </Box>
//               </AccordionPanel>

//               <AccordionPanel
//                 margin="20px"
//                 label={
//                   <Text size="medium"> {"&"} create topics for genres</Text>
//                 }
//               >
//                 <Box background="#9a3c3c" height="middle" width="large">
//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>
//                       stateful.art community on 0xhabitat.org, extended via city
//                       treasuries; enables artists to initiate artistic movements
//                       as topics.
//                     </Text>
//                     <Image
//                       src="./create_new_community_in_habitat.png"
//                       width="380px"
//                       height="400px"
//                       margin="20px"
//                     ></Image>
//                   </Paragraph>

//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>
//                       {" "}
//                       They can also include communication channels for those
//                       communities.
//                     </Text>
//                   </Paragraph>
//                 </Box>
//               </AccordionPanel>

//               <AccordionPanel
//                 margin="10px"
//                 label={<Text size="medium">audiences vote via signalling</Text>}
//               >
//                 <Box
//                   background="#9a3c3c"
//                   alignSelf="center"
//                   height="middle"
//                   width="large"
//                   margin="20px"
//                 >
//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>
//                       {" "}
//                       audiences, artists/collectives from those cities propose
//                       new artists and projects to their communities. those
//                       artists and projects might be already residing in those
//                       cities or not.
//                     </Text>
//                   </Paragraph>

//                   <Image
//                     src="./jazz_elise_reggae_hamburg.png"
//                     width="692px"
//                     height="576px"
//                     margin="32px"
//                   ></Image>

//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>
//                       When there is enough fund collected for those cities,
//                       proposed and voted artists will be entitled for a
//                       financial and community support for a future artist
//                       residency.{" "}
//                     </Text>
//                   </Paragraph>
//                 </Box>
//               </AccordionPanel>

//               <AccordionPanel
//                 margin="10px"
//                 label={
//                   <Text size="medium">and .. community-based curation</Text>
//                 }
//               >
//                 <Box
//                   background="#9a3c3c"
//                   alignSelf="center"
//                   height="middle"
//                   width="large"
//                   margin="20px"
//                 >
//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>
//                       {" "}
//                       audiences, artists/collectives from those cities propose
//                       new artists and projects to their communities. those
//                       artists and projects might be already residing in those
//                       cities or not.
//                     </Text>
//                   </Paragraph>

//                   <Image
//                     src="./jazz_elise_reggae_hamburg.png"
//                     width="692px"
//                     height="576px"
//                     margin="32px"
//                   ></Image>

//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>finally</Text>
//                   </Paragraph>

//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>
//                       When there is enough fund collected for those cities,
//                       proposed and voted artists will be entitled for a
//                       financial and community support for a future artist
//                       residency.{" "}
//                     </Text>
//                   </Paragraph>
//                 </Box>
//               </AccordionPanel>

//               {/* <AccordionPanel
//                     margin="20px"
//                     label={<Text size="medium">collectors help making positive impact</Text>}
//                   >
//                     <Box background="#9a3c3c" alignSelf="center" height="middle" width="medium" margin="20px">
//                       <Paragraph justify="center" margin="12px">
//                         <Text >
//                                 Collectors will be included on artistic movements of those cities and they'll be able to vote on artist residencies too.
//                           </Text>
//                       </Paragraph>

//                     </Box>
//                   </AccordionPanel> */}
//             </Accordion>
//           </Box>
//         )
//       }
//     </ResponsiveContext.Consumer>
//   </Grommet>
// );

const OnTheWall = () => (
  <Grommet>
    {/* <Heading size="medium" textAlign="center">
      {" "}
      a metaversal solidarity, on the walls.
    </Heading> */}

    <ResponsiveContext.Consumer>
      {(size) =>
        size === "small" ? (
          <>
            <Heading size="xsmall" textAlign="center">
              {" "}
              a metaversal solidarity, <br></br>
              on the wall"
            </Heading>
          </>
        ) : (
          <>
            <Heading size="medium" textAlign="center">
              {" "}
              a metaversal solidarity, on the walls
            </Heading>
          </>
        )
      }
    </ResponsiveContext.Consumer>

    {/* /////////// */}

    <ResponsiveContext.Consumer>
      {(size) =>
        size === "small" ? (
          <Box direction="column">
            <Box
              animation={{
                type: "slideUp",
                delay: 20,
                duration: 1000,
              }}
            >
              <Image
                src="./a_pseudo_banksy_mint.png"
                width="464px"
                height="448px"
                margin="32px"
              ></Image>
            </Box>
            <Box
              animation={{
                type: "slideDown",
                delay: 20,
                duration: 1000,
              }}
            >
              <Image
                src="./real_metaverse.png"
                width="464px"
                height="448px"
                margin="32px"
              ></Image>
            </Box>
          </Box>
        ) : (
          <Box direction="row">
            <Box
              animation={{
                type: "slideUp",
                delay: 20,
                duration: 1000,
              }}
            >
              <Image
                src="./a_pseudo_banksy_mint.png"
                width="576px"
                height="558px"
                margin="32px"
              ></Image>
            </Box>
            <Box
              animation={{
                type: "slideDown",
                delay: 20,
                duration: 1000,
              }}
            >
              <Image
                src="./real_metaverse.png"
                width="576px"
                height="558px"
                margin="32px"
              ></Image>
            </Box>
          </Box>
        )
      }
    </ResponsiveContext.Consumer>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 320">
      <path
        fill="#ff5500"
        fill-opacity="0.8"
        d="M0,64L96,96L192,128L288,192L384,128L480,64L576,192L672,64L768,288L864,128L960,96L1056,128L1152,64L1248,32L1344,192L1440,288L1440,320L1344,320L1248,320L1152,320L1056,320L960,320L864,320L768,320L672,320L576,320L480,320L384,320L288,320L192,320L96,320L0,320Z"
      ></path>
    </svg>
  </Grommet>
);

const DiscordButton = (props) => (
  <Anchor href="https://discord.gg/EXN7Mta2wu" target="_blank" color="black">
    <Box
      tag="footer"
      direction="row"
      justify="center"
      pad="medium"
      gap="medium"
      //flex={true}
      background="#5865F2"
      round="large"
      animation={{
        type: "jiggle",
        delay: 20,
        duration: 1000,
      }}
    >
      <Text size="large" marginTop="20">
        discord
      </Text>
      <Image
        src="https://i.pinimg.com/736x/34/ea/20/34ea20e0747020c021677987211a6353.jpg"
        width="60x"
        height="60px"
      />
    </Box>{" "}
  </Anchor>
);

const FooterSection = () => (
  <>
    <Box direction="column">
      <Box
        tag="footer"
        direction="row"
        justify="center"
        pad="small"
        gap="small"
        //flex={true}
        background="black"
      >
        {/* 

  */}

        <Box direction="row">
          <Text size="xxlarge">$START {"  "}</Text>
          <Text size="xlarge"> @{"   "}</Text>
        </Box>

        <Anchor
          href="https://0xhabitat.org/app/#habitat-community,0xbb2fe36ba4fb98a3b268a3d7ee872081ad0155376abbbb8cf91d97275ac8ec58"
          target="_blank"
          color="white"
        >
          <Image src="habitat_logo.png" width="144px" height="36px"></Image>
        </Anchor>
      </Box>
      {/* 
      <Box
        tag="footer"
        direction="row"
        justify="center"
        pad="small"
        gap="small"
        //flex={true}
        background="#EB459E"
      >
 
        <Anchor
          href="https://discord.gg/EXN7Mta2wu"
          target="_blank"
          color="black"
        >
          community @ discord
        </Anchor>
      </Box> */}
      <DiscordButton />
      <Box
        tag="footer"
        direction="row"
        justify="center"
        pad="small"
        gap="small"
        margin="medium"
        //flex={true}
        background="#323001"
      >
        <Anchor
          href="https://github.com/stateful-art"
          target="_blank"
          color="white"
        >
          <Text size="large">code</Text>
        </Anchor>
        {"|"}

        <Anchor
          href="https://miro.com/app/board/o9J_l3gy0-U=/"
          target="_blank"
          color="white"
        >
          {/* {"|  "} */}
          <Text size="large">design canvas</Text>
        </Anchor>

        {"|"}

        <Anchor
          href="https://twitter.com/StatefulArt"
          target="_blank"
          color="white"
        >
          {" "}
          <Text size="large">twitter</Text>
        </Anchor>
      </Box>

      <Box align="center" justify="center" margin="30p">
        <Anchor
          href="https://trello.com/b/DzBmDMd9/statefulart"
          target="_blank"
          color="white"
        >
          {" "}
          <Text size="large">project evolution</Text>
        </Anchor>
      </Box>

      {/* <Box
        tag="footer"
        direction="row"
        justify="center"
        pad="small"
        gap="small"
        //flex={true}
        background="black"
      >
        <Anchor
          href="https://0xhabitat.org/app/#habitat-community,0xbb2fe36ba4fb98a3b268a3d7ee872081ad0155376abbbb8cf91d97275ac8ec58"
          target="_blank"
          color="white"
        >
          blog @ substack (soon)
        </Anchor>
      </Box> */}

      <Box align="center" justify="center" margin="30p">
        <Text size="large" margin="20px">
          {" "}
          contact@stateful.art
        </Text>
      </Box>
      <Box align="center" justify="center" margin="30p">
        <Anchor
          href="https://www.youtube.com/watch?v=QnJFhuOWgXg"
          target="_blank"
        >
          <Paragraph size="large"> the revolution will be minted</Paragraph>
        </Anchor>
        <Directions color="red" />

        <Text size="small"> © all rights left </Text>
      </Box>
    </Box>
  </>
);

function App() {
  return (
    <Grommet theme={theme}>
      <Box align="center" background="black" justify="end" direction="column">
        <Box direction="column" align="center" background="black">
          {/* top logo here */}
          <ResponsiveContext.Consumer>
            {(size) => (size === "small" ? <LogoSmall /> : <LogoBig />)}
          </ResponsiveContext.Consumer>

          <Box justify="center" alignContent="center">
            <Heading size="small" alignSelf="center">
              <Box direction="row" pad="small" gap="small">
                <Box
                  // background="#323001"
                  animation={{
                    type: "slideUp",
                    delay: 300,
                    duration: 4000,
                  }}
                >
                  <Heading size="medium" alignSelf="center">
                    {" "}
                    ?what, why
                  </Heading>
                </Box>
                <Box>
                  <Aed />
                </Box>
                <Box
                  // background="#323001"
                  animation={{
                    type: "slideDown",
                    delay: 300,
                    duration: 5000,
                  }}
                >
                  <Heading size="medium" alignSelf="center">
                    {" "}
                    how {"&"} where
                  </Heading>
                </Box>
              </Box>

              <Box>
                <Paragraph alignSelf="center" size="large" textAlign="center">
                  "an artistic approach for progressively developing
                  inter-cities connectivity, decentralised exchanges and
                  audience/citizens side activated and engaged collective
                  governance mechanisms establish mesh-to-mesh connections that
                  are made of peer-to-peer connections of cities and hopes."
                </Paragraph>
              </Box>
              <OrganiCities />
              {/* <Box
                background="#323001"
                animation={{
                  type: "pulse",projec
                  delay: 300,
                  duration: 2400,
                }}
              >
                what ; why ; how ; where
              </Box> */}
            </Heading>
            <Box alignSelf="center">
              <Paragraph alignSelf="center" size="large" textAlign="center">
                stateful.art is an open-sourced design-thinking project, initiating an experimental context* to tackle{" "}
                <Anchor
                  href="https://www.interaction-design.org/literature/topics/wicked-problems"
                  target="_blank"
                >
                  wicked problems
                </Anchor>{" "}
                of our time. 
                <br></br>
                <br></br>
                hence in the future, preparing for civic global
                resolutions including environmental issues, migrations.
                <br></br>
                <br></br>* $STARTing with re-defining future art residencies
                that are community-based, and not any more, solely initiated,
                organised and consented by institutional structures and
                processes, that are not transparent at all, nor designed to always stay as open calls.
                <br></br>
                <Heading>
                  {" "}
                  Art is a piece of peace, <br></br>doesn't matter how loud it
                  is.
                </Heading>
                <br></br>* project initiates a couple of $GENRE and defined a
                couple of initial cities for voting communitiy-supported
                residency proposals per artistic movement and cities with DAOs
                for that solidarity and intentional, conscious actions from
                residents of those cities.
                <br></br>
                {/* <br></br> <br></br>  */}
              </Paragraph>

              <ResponsiveContext.Consumer>
                {(size) =>
                  size === "small" ? (
                    <GenreCardsVertical direction={"column"} />
                  ) : (
                    <GenreCardsHorizontal direction={"row"} />
                  )
                }
              </ResponsiveContext.Consumer>
              <CitiesConnViaGenres />

              <Paragraph alignSelf="center" size="large" textAlign="center">
                we are encouraging all to come together, coordinate and organize
                via creating new solidarity networks within and between cities.
                <br></br>
                <br></br>
                in core of its tokenomics, project is utilising abstract
                phenomenons like
                <Text>$GENREs</Text>
                and
                <Text>$CAUSEs.</Text>
                <br></br>
                <br></br>
                so that people that are new to blockchain have uniting starting
                points and create their values and use those in anywhere
                relating to artistic content, locality and especially
                solidarity-based exchanges.
                {/* in the future. but especially in galleries/cafe/bars that are streaming, displaying and maybe merchandising in those artistic genres, already. */}
                <br></br>
                <br></br>literally, those artistic movements are having their
                unique tokens that have places to start proposing and and
                engaging with other proposals.
                <br></br>once people start experiencing their common stakes,
                rights and hopes at remotes, that are still on this planet.
              </Paragraph>

              <Heading size="medium" alignSelf="center">
                {" "}
                reasonings
              </Heading>
              <Paragraph alignSelf="center" size="large" textAlign="center">
                especially at the recent convention, COP26, we have eventually
                seen what is
                <Text weight="bolder" color="red" size="large">
                  {" "}
                  unsustainable:
                </Text>
                <Text weight="bolder" color="orange" size="large">
                  {" "}
                  "ignorance".
                </Text>{" "}
                <br></br>
                <br></br>many states having hard time reflecting local and
                global societies' common will, rights and hopes.
                <br></br> with this initiative project, simply inviting all to
                take global matters to citizens of those cities and countries to
                decide, act and even build and propose better solutions.
                <br></br>
                <br></br> and doing it in a resilient and undeniable way; with
                blockchain, DAOs, and new NFT minting.
                <br></br>
                <br></br>
                for that, lately started an example smart contract project based
                on ERC-1155 standard and named that
                <Anchor
                  href="https://github.com/stateful-art/local-zines"
                  target="_blank"
                >
                  {" "}
                  "LocalZines".{" "}
                </Anchor>
                {"<|"}CheckItOut.
                <br></br>
                <br></br>
                with that, creating a minting scenario, where supply is hoping
                to make NFTs a accessibility and sustainability of the arts,
                knowledge and the notion of togetherness.
                <br></br>
                <br></br> you'll se in the "Banksy Case" below, that an artist
                can just dedicate to art communities (some initiated as below
                and they are linked to their respective $GENRE DAO communities
                so to say.
                <br></br>
                <br></br> if the matter is sovereignity, then it will be those
                communities in their cities that would at least show their will
                for change, intentionally.
                <br></br>
                <br></br> how? well, with $GENRE abstraction, we try to reflect
                what it is like in real life. via people having both containing
                and expressing their taste and stake in creative communities in
                their cities and of course, that's the point: remotes too.
                <br></br>
                <br></br>
                as long as people there are open those positive impact. so we
                create those tokens that people can use globally for such and a
                lot of ways.
                <br></br>
                <br></br>
                so that's how we build mutual empowerment zones between cities,
                not countries. it's after all more direct connections and could
                be even more sustainable.
                <Text> </Text>
                <Text> </Text>
                <br></br>
                <br></br>while taking part in welcoming art residencies of the
                future, they are encouraged to take initiative and start
                something truly unique out there, and help developing different
                governance and ungovernance mechanisms.
              </Paragraph>

              <Paragraph alignSelf="center" size="large" textAlign="center">
                project, as-is, defined in the realms and art and activism, that
                are movemental.
                <br></br>
                even in a binary world, where individual and collective impact
                being delegated;
                <br></br> <br></br>
                we'll be signing those future petitions golbally, as world
                citizens, hopefully and even surely, before the next convention.
                <br></br>
                <br></br>
                and from there, we'll diversify our positive impact in a
                borderless fashion. there's tech, there is will and the vision.
                well, it's up to people to organise and co-imagine and want
                that, for other livings too, after all.
              </Paragraph>

              {/* <Paragraph alignSelf="center" size="large" textAlign="center">
                well, nothing mysterious here but connecting cities in a way, 
                where people on those cities first time having a mutual empowerment fund and a resilient capacity and flexibility on building and sustaining their communities and have a stake on some remote community. 
              </Paragraph> */}

              <Paragraph alignSelf="center" size="large" textAlign="center">
              
                our initial endevours mainly focus on incentivising democratic
                initiative taking via a timely art direction in the tokenomics.
                <br></br>
                <br></br>
                project is initiated as a Decentralised Autonomous Organisation
                (DAO) and located on 0xhabitat.org token issued as{" "}
                <Text size="xlarge" color="#f33fe4">
                  $START.
                </Text>
                <br></br>
                <br></br>
                initially started a few city treasuries for some artistic
                movements (see below).
              </Paragraph>
              {/* <Paragraph alignSelf="center" size="large" textAlign="center">
                initial activities will have an focus on developing
                community-supported 
                <Anchor src="https://en.wikipedia.org/wiki/Artist-in-residence">
                   artist-in-residence</Anchor>
                programs that are demand-aware, so people can invite artists by proposing them to art projects for communities they engage with.
                
                that is shared by community members  and funding artistic movements of those dedicated cities with NFT sale/resales.

                where art communities in cities can organise, share resources and invite artists from all around the world.
                
                
                
                where
                we are all together. we want to connect people for that and experience having common stakes in the development of those other cities they wanted to., building first city-to-city
                empowerment and experience of solidarity without limitations of national borders.
              
              </Paragraph> */}

              {/* <Box background="yellow" margin="small" round="small">
                <Paragraph
                  color="black"
                  alignSelf="center"
                  size="large"
                  textAlign="center"
                >
                  cities are alive. like us; they surface highly creative, intersectional 
                  
                  that's why this project encourages and empowers all on building
                  <br></br>
                  mutually inclusive
                  <br></br>
                  autonomous empowerment zones
                </Paragraph>
              </Box> */}

              {/* <Heading size="middle">introducing DAAOs.</Heading> */}
            </Box>
          </Box>

          <DiscordButton />
          <Box>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#5000ca"
                fill-opacity="1"
                d="M0,0L90,288L180,224L270,96L360,128L450,224L540,32L630,96L720,256L810,128L900,160L990,192L1080,192L1170,288L1260,128L1350,128L1440,96L1440,320L1350,320L1260,320L1170,320L1080,320L990,320L900,320L810,320L720,320L630,320L540,320L450,320L360,320L270,320L180,320L90,320L0,320Z"
              ></path>
            </svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="0.73" d="M0,288L20,266.7C40,245,80,203,120,170.7C160,139,200,117,240,128C280,139,320,181,360,197.3C400,213,440,203,480,208C520,213,560,235,600,256C640,277,680,299,720,272C760,245,800,171,840,160C880,149,920,203,960,234.7C1000,267,1040,277,1080,277.3C1120,277,1160,267,1200,266.7C1240,267,1280,277,1320,240C1360,203,1400,117,1420,74.7L1440,32L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#5000ca"
                fill-opacity="1"
                d="M0,160L90,288L180,224L270,128L360,224L450,256L540,320L630,32L720,0L810,192L900,160L990,64L1080,320L1170,320L1260,224L1350,128L1440,96L1440,0L1350,0L1260,0L1170,0L1080,0L990,0L900,0L810,0L720,0L630,0L540,0L450,0L360,0L270,0L180,0L90,0L0,0Z"
              ></path>
            </svg> */}
          </Box>

          {/* <Box direction="column">
            <Box
              // tag="footer"
              direction="row"
              justify="center"
              pad="small"
              gap="small"
              //flex={true}
              background="black"
              margin="large"
            ></Box>
          </Box> */}

          <Box justify="center" alignContent="center">
            <CaretUp color="red" />
          </Box>

          {/* <ResponsiveContext.Consumer>
            {(size) => (size === "small" ? <LogoSmall /> : <LogoBig />)}
          </ResponsiveContext.Consumer> */}

          {/* <ResponsiveContext.Consumer>
            {(size) =>
              size === "small" ? (
                <GenreCardsVertical direction={"column"} />
              ) : (
                <GenreCardsHorizontal direction={"row"} />
              )
            }
          </ResponsiveContext.Consumer> */}

          <Box justify="center" alignContent="center">
            <CaretDown color="yellow" />
            <CaretDown color="yellow" />
            <CaretDown color="yellow" />
          </Box>

          <Heading size="medium">what's next?</Heading>
          <OnTheWall />

          <Box align="center" alignContent="center" justify="center">
            {/* <Image
              src="./cities_bridged_by_genres.png"
              width="360px"
              height="300px"
              margin="20px"
            ></Image>

            <Box justify="center" alignContent="center">
              <CaretDown color="green" />
            </Box>

            <Box direction="row" justify="between"></Box>
            <Box justify="center" alignContent="center">
              <CaretUp color="red" />
            </Box>

            <Image
              src="./cities_bridged_by_causes.png"
              width="360px"
              height="300px"
              margin="20px"
            ></Image>

            <Box justify="center" alignContent="center">
              <CaretDown color="green" />
            </Box> */}

            {/* <ParticipantsAccordion /> */}

            {/* <Box justify="center" alignContent="center">
              <ResponsiveContext.Consumer>
            
                {(size) =>
                  size === "small" ? (
                    <Image
                      src="./impact_oriented_minting_small.png"
                      width="400x"
                      height="360px"
                      margin="10px"
                    ></Image>
                  ) : (
                    <Image
                      src="./impact_oriented_minting_large.png"
                      width="615px"
                      height="480px"
                      margin="40px"
                    ></Image>
                  )
                }
              </ResponsiveContext.Consumer>
            </Box> */}

            {/* <Box justify="center" alignContent="center">
              <CaretDown color="red" />
            </Box>
            <Paragraph>a</Paragraph>
            <Paragraph>metaverse</Paragraph>
            <Paragraph>for the future.</Paragraph>
 */}
            {/* 
<ResponsiveContext.Consumer>
            {(size) =>
              size === "small" ? (
                <Image
                  src="./welcome_to_metaverse_vision.png"
                  width="400px"
                  height="360px"
                  margin="20px"
                ></Image>
              ) : (
                <Image
                  src="./welcome_to_metaverse_vision.png"
                  width="540px"
                  height="480px"
                  margin="60px"
                ></Image>
              )
            }
          </ResponsiveContext.Consumer>             */}
          </Box>
        </Box>

        <Paragraph>{/* <MetamaskConnectButton/> */}</Paragraph>

        <FooterSection />
      </Box>
    </Grommet>
  );
}

// function Manifest() {
//   return <h2>manifest content here</h2>;
// }

// function Roadmap() {
//   return <h2>roadmap content here </h2>;
// }

export default App;
