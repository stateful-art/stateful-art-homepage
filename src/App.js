// import logo from './logo.svg';
// import './App.css';
import {
  Accordion,
  AccordionPanel,
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
  Attraction,
  CaretDown,
  CaretUp,
  Directions,
  // SubtractCircle,
  Aggregate,
} from "grommet-icons";
import React from "react";

const theme = {
  global: {
    font: { family: "Inconsolata", size: "18px", height: "20px" },
  },
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

const GenreCardList = () => {
  return (
    <>
      <Box direction="column">
        <Box direction="row">
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
                <Text size="small">berlin, hamburg, istanbul, los angeles</Text>
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
                $HIPHOP
              </CardHeader>
              <CardBody pad="small" background="orange">
                <Anchor
                  href="https://0xhabitat.org/app/#habitat-community,0xa21629c00a7d9c88ea98673a0b81becd156cfe416920ec6d40b408d1506eb1e4"
                  target="_blank"
                  color="white"
                >
                  <Box>
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
                <Text weight="bold">Hamburg</Text>
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

        <Box direction="row" alignSelf="center">
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
                background="background-front"
                responsive={false}
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
                <Text size="small">berlin, hamburg, istanbul, los angeles</Text>
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
        <Box size direction="row" alignSelf="center">
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
      </Box>
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
      <Heading size="medium" textAlign="center"> solidarity,</Heading>
      <Heading size="medium" textAlign="center"> on the wall.</Heading>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,32L0,64L96,64L96,256L192,256L192,224L288,224L288,320L384,320L384,32L480,32L480,128L576,128L576,288L672,288L672,256L768,256L768,160L864,160L864,32L960,32L960,160L1056,160L1056,0L1152,0L1152,160L1248,160L1248,160L1344,160L1344,32L1440,32L1440,320L1344,320L1344,320L1248,320L1248,320L1152,320L1152,320L1056,320L1056,320L960,320L960,320L864,320L864,320L768,320L768,320L672,320L672,320L576,320L576,320L480,320L480,320L384,320L384,320L288,320L288,320L192,320L192,320L96,320L96,320L0,320L0,320Z"></path></svg>
    
    <Image
      src="./a_pseudo_banksy_mint.png"
      width="640px"
      height="620px"
      margin="32px"
    ></Image>
  </Grommet>
);

const DiscordButton = (props) => (
  <Box
    tag="footer"
    direction="row"
    justify="center"
    pad="small"
    gap="small"
    //flex={true}
    background="#EB459E"
  >
    {/* 

*/}
    <Anchor href="https://discord.gg/EXN7Mta2wu" target="_blank" color="black">
      <Text size="large">community @ discord</Text>
    </Anchor>
  </Box>
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
        <Anchor
          href="https://0xhabitat.org/app/#habitat-community,0xbb2fe36ba4fb98a3b268a3d7ee872081ad0155376abbbb8cf91d97275ac8ec58"
          target="_blank"
          color="white"
        >
          $START
        </Anchor>
        <br></br>
        at{" "}
        <Anchor
          href="https://0xhabitat.org/app/#habitat-community,0xbb2fe36ba4fb98a3b268a3d7ee872081ad0155376abbbb8cf91d97275ac8ec58"
          target="_blank"
          color="white"
        >
          <Image src="habitat_logo.png" width="80px" height="24px"></Image>
        </Anchor>
      </Box>

      <Box
        tag="footer"
        direction="row"
        justify="center"
        pad="small"
        gap="small"
        //flex={true}
        background="#EB459E"
      >
        {/* 

  */}
        <Anchor
          href="https://discord.gg/EXN7Mta2wu"
          target="_blank"
          color="black"
        >
          community @ discord
        </Anchor>
      </Box>

      <Box
        tag="footer"
        direction="row"
        justify="center"
        pad="small"
        gap="small"
        //flex={true}
        background="black"
      >
        <Anchor
          href="https://github.com/stateful-art"
          target="_blank"
          color="white"
        >
          code
        </Anchor>
        {"<>"}

        <Anchor
          href="https://miro.com/app/board/o9J_l3gy0-U=/"
          target="_blank"
          color="white"
        >
          {" "}
          workspace
        </Anchor>

        {"<>"}

        <Anchor
          href="https://twitter.com/StatefulArt"
          target="_blank"
          color="white"
        >
          {" "}
          twitter
        </Anchor>
      </Box>

      <Box align="center" justify="center" margin="30p">
        <Anchor
          href="https://trello.com/b/DzBmDMd9/statefulart"
          target="_blank"
          color="white"
        >
          {" "}
          project evolution
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
        <Text size="medium" margin="8px">
          {" "}
          contact@stateful.art
        </Text>
      </Box>
      <Box align="center" justify="center" margin="30p">
        <Anchor
          href="https://www.youtube.com/watch?v=QnJFhuOWgXg"
          target="_blank"
        >
          <Paragraph> the revolution would be minted</Paragraph>
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
          <ResponsiveContext.Consumer>
            {(size) =>
              size === "small" ? (
                <Image
                  src="./stateful-art-top.png"
                  width="262px"
                  height="150px"
                  margin="20px"
                ></Image>
              ) : (
                <Image
                  src="./stateful-art-top.png"
                  width="525px"
                  height="300px"
                  margin="60px"
                ></Image>
              )
            }
          </ResponsiveContext.Consumer>
          <Box justify="center" alignContent="center">
            <Paragraph size="medium">
              {/* <Heading size="middle">too long; but read  </Heading> */}

              <Accordion>
                <AccordionPanel
                  margin="20px"
                  label={
                    <Text size="medium">
                      <Heading>too long; but read</Heading>
                    </Text>
                  }
                >
                  <Box background="white" height="middle" width="middle">
                    <Paragraph alignSelf="center" margin="12px">
                      stateful.art aims to build a resilient, diverse and
                      solidarity-oriented ground for residents of remote cities.
                      <br></br>
                      <br></br>
                      activities mainly focus on creation of commons in terms of
                      financials, tech infrastructure and common stakes in terms
                      of democratic initiative taking via art direction in the
                      tokenomics.
                      <br></br>
                      <br></br>
                      project itself is a DAO with its governance token issued
                      as $START. initially started a few city treasuries for
                      some artistic movements (see below).
                    </Paragraph>
                  </Box>
                </AccordionPanel>
              </Accordion>
            </Paragraph>
          </Box>

          <Box justify="center" alignContent="center">
            <Heading size="middle" alignSelf="center">
              what ; why ; how ; where
            </Heading>
            <Box alignSelf="center">
              <Paragraph alignSelf="center" size="large" textAlign="center">
                stateful.art is an open-sourced blockchain project, aiming to
                initiate an experimental context;
              </Paragraph>

              <Paragraph alignSelf="center" size="large" textAlign="center">
                {/* xxx */}
                to create commons for artistic communities of cities.
              </Paragraph>
              <Image
                src="./cities_bridged_by_genres.png"
                width="360px"
                height="300px"
                margin="20px"
                alignSelf="center"
              ></Image>
              <Heading size="small" alignSelf="center">
                mutually inclusive
              </Heading>
              <Heading size="small" alignSelf="center">
                autonomous empowerment zones
              </Heading>
              <Paragraph alignSelf="center" size="large" textAlign="center">
                "an artistic approach for progressively developing inter-cities
                connectivity for the existing or future (art) residencies."
              </Paragraph>

              {/* <Heading size="middle">introducing DAAOs.</Heading> */}
            </Box>

            <Box direction="row" alignSelf="center">
              <Text size="xlarge" weight="bolder" margin="small">
                {" "}
                "come, as you are."{" "}
              </Text>
              <Heading size="middle" color="green">
                but where?
              </Heading>
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

          <Box direction="column">
            <Box
              tag="footer"
              direction="row"
              justify="center"
              pad="small"
              gap="small"
              //flex={true}
              background="black"
              margin="large"
            >
              <Box direction="column" alignSelf="center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#273036"
                    fill-opacity="1"
                    d="M0,96L0,288L72,288L72,32L144,32L144,192L216,192L216,224L288,224L288,0L360,0L360,160L432,160L432,192L504,192L504,256L576,256L576,128L648,128L648,128L720,128L720,320L792,320L792,192L864,192L864,64L936,64L936,192L1008,192L1008,96L1080,96L1080,224L1152,224L1152,160L1224,160L1224,192L1296,192L1296,288L1368,288L1368,96L1440,96L1440,0L1368,0L1368,0L1296,0L1296,0L1224,0L1224,0L1152,0L1152,0L1080,0L1080,0L1008,0L1008,0L936,0L936,0L864,0L864,0L792,0L792,0L720,0L720,0L648,0L648,0L576,0L576,0L504,0L504,0L432,0L432,0L360,0L360,0L288,0L288,0L216,0L216,0L144,0L144,0L72,0L72,0L0,0L0,0Z"
                  ></path>
                </svg>
                <Text size="large" alignSelf="center" margin="small">
                  Decentralised
                </Text>
                <Text size="large" alignSelf="center">
                  Autonomous {"&"} Artistic
                </Text>{" "}
                <br></br>
                <Text size="large" alignSelf="center">
                  OrganiCities
                </Text>
                <br></br>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#ffd700"
                    fill-opacity="1"
                    d="M0,96L0,288L72,288L72,32L144,32L144,192L216,192L216,224L288,224L288,0L360,0L360,160L432,160L432,192L504,192L504,256L576,256L576,128L648,128L648,128L720,128L720,320L792,320L792,192L864,192L864,64L936,64L936,192L1008,192L1008,96L1080,96L1080,224L1152,224L1152,160L1224,160L1224,192L1296,192L1296,288L1368,288L1368,96L1440,96L1440,320L1368,320L1368,320L1296,320L1296,320L1224,320L1224,320L1152,320L1152,320L1080,320L1080,320L1008,320L1008,320L936,320L936,320L864,320L864,320L792,320L792,320L720,320L720,320L648,320L648,320L576,320L576,320L504,320L504,320L432,320L432,320L360,320L360,320L288,320L288,320L216,320L216,320L144,320L144,320L72,320L72,320L0,320L0,320Z"
                  ></path>
                </svg>
              </Box>
            </Box>
          </Box>

          <Box justify="center" alignContent="center">
            <CaretUp color="red" />
          </Box>

          <GenreCardList />

          <Box justify="center" alignContent="center">
            <CaretDown color="yellow" />
            <CaretDown color="yellow" />
            <CaretDown color="yellow" />
          </Box>
          
          <Heading size="medium">what's next?</Heading>
          <OnTheWall/>

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
