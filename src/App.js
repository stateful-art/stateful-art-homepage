// import logo from './logo.svg';
// import './App.css';
import {
  Accordion,
  AccordionPanel,
  Anchor,
  Box,
  Button,
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
  Tip
} from "grommet";
import {
  AddCircle,
  Attraction,
  CaretDown,
  CaretUp,
  Directions,
  SubtractCircle,
} from "grommet-icons";
import React from "react";

const theme = {
  global: {
    font: { family: "Inconsolata", size: "18px", height: "20px" },
  },
};

const ParticipantsAccordionTheme = {
  accordion: {
    heading: {
      level: 3,
      margin: { vertical: "20px", horizontal: "24px" },
    },
    hover: {
      heading: {
        color: "accent-2",
      },
    },
    icons: {
      collapse: SubtractCircle,
      expand: AddCircle,
      color: "orange",
    },
    border: undefined,
    panel: {
      // border: {
      //   side: 'horizontal',
      //   size: 'medium',
      //   color: '#DADADA',
      //   style: 'dotted',
      // },
    },
  },
};



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
            width={{ max: 'small' }}
            round="small"
            background="background-front"
            responsive={false}
          >
             <Text weight="bold">city treasuries</Text>
            <Text size="small">
              berlin, hamburg, istanbul, los angeles
            </Text>
          </Box>
        }
        dropProps={{ align: { left: 'right' } }}
      >
        <Card height="small" margin="small" width="small" background="light-1">
            <CardHeader  alignSelf="center" pad="small" background="light-1">$HIPHOP</CardHeader>
            <CardBody pad="small" background="orange">
              <Anchor
                    href="https://0xhabitat.org/app/#habitat-community,0xa21629c00a7d9c88ea98673a0b81becd156cfe416920ec6d40b408d1506eb1e4"
                    target="_blank"
                    color="white"
                  >
                    <Box>
                      <Image src="./hiphop.png" 
                      width="120px" height="80px" 
                          style={{
                                  marginLeft: "20px", 
                                  marginRight: "36px",
                                  marginTop: "12px"
                                  }}
                                  >
                      </Image>
                    </Box>
                  </Anchor>

            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
            @ 4 cities <Attraction/>

            </CardFooter>
          </Card>
      </Tip>

      <Tip
        plain
        content={
          <Box
            pad="small"
            gap="small"
            width={{ max: 'small' }}
            round="small"
            background="background-front"
            responsive={false}
          >
            <Text weight="bold">city treasuries</Text>
            <Text size="small">
              berlin, hamburg, istanbul, los angeles
            </Text>
          </Box>
        }
        dropProps={{ align: { left: 'right' } }}
      >
          <Card height="small" margin="small" width="small" background="light-1">
            <CardHeader alignSelf="center" pad="small" background="light-1" color="white">$ROCK</CardHeader>
            <CardBody pad="small" background="purple">
              <Anchor
                  href="https://0xhabitat.org/app/#habitat-community,0x58dac8cfce8db55de5ee3b16a27461a41cf074b0f1a04d73661846dfa2dccd95"
                  target="_blank"
                  color="white"
                >
                  <Box>
                    <Image src="./rock_horizontal.png" 
                    width="100px" height="60px" 
                        style={{
                                marginLeft: "22px", 
                                marginRight: "36px",
                                marginTop: "12px"
                                }}
                                >
                    </Image>
                  </Box>
                 </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              {/* <Button icon={<Attraction color="red" />} hoverIndicator />
                                  <Text>@ 4 cities</Text> */}
              @ 4 cities<Attraction/> 
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
            width={{ max: 'small' }}
            round="small"
            background="background-front"
            responsive={false}
          >
            <Text weight="bold">city treasuries</Text>
            <Text size="small">
              berlin, hamburg
            </Text>
          </Box>
        }
        dropProps={{ align: { left: 'right' } }}
      >
        <Card height="small" margin="small" width="small" background="light-1">
            <CardHeader alignSelf="center" pad="small">$GRAFFITI</CardHeader>
            <CardBody pad="small" background="red">
              <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0x6220750e4877cca63e0d68e41b88188ee4cde9b1afc9a6ce11edd72b1c3f0c9c"
                target="_blank"
                color="white"
              >
                <Box alignSelf="center">
                  <Image src="./graffiti.jpeg" 
                  width="120px" height="104px" 
                      style={{
                              marginLeft: "22px", 
                              marginRight: "36px",
                              marginTop: "2px"
                              }}
                              >
                  </Image>
                </Box>
              </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
            @ 2 cities<Attraction/> 

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
            width={{ max: 'small' }}
            round="small"
            background="background-front"
            responsive={false}
          >
            <Text weight="bold"></Text>
            <Text size="small">
              electronic music community currently have no city-level treasury.
            </Text>
          </Box>
        }
        dropProps={{ align: { left: 'right' } }}
      >
        <Card height="small" margin="small" width="small" background="light-1">
            <CardHeader alignSelf="center" pad="small">$ELECTRO</CardHeader>
            <CardBody pad="small" background="black">
              <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0x1b84234a852a468cc28f33a1702925d620d347f43ab3809892522e5ffe6362f6"
                target="_blank"
                color="white"
              >
                <Box>
                  <Image src="./electronic_music.jpeg" 
                  width="120px" height="104px" 
                      style={{
                              marginLeft: "22px", 
                              marginRight: "36px",
                              marginTop: "2px"
                              }}
                              >
                  </Image>
                </Box>
              </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
            @ 0 cities<Attraction/> 

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
            width={{ max: 'small' }}
            round="small"
            background="background-front"
            responsive={false}
          >
            <Text weight="bold"></Text>
            <Text size="small">
            reggae community currently have no city-level treasury.
            </Text>
          </Box>
        }
        dropProps={{ align: { left: 'right' } }}
      >
          <Card height="small" margin="small" width="small" background="light-1">
            <CardHeader alignSelf="center" pad="small" background="light-1">
              $REGGAE
            </CardHeader>
            <CardBody background="black">
            <Anchor
          href="https://0xhabitat.org/app/#habitat-community,0x594080e1603af01cba9155a6fa6899b833c5549d555c89a2e7d578be33495ff3"
          target="_blank"
          color="white"
        >
          <Box>
            <Image src="./reggae.jpeg" width="90px" height="76px" 
                style={{
                        marginLeft: "48px", 
                        marginRight: "36px",
                        marginTop: "20px"
                        }}></Image>
          </Box>
        </Anchor>
              </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
            @ 0 cities<Attraction/> 

              {/* <Button icon={<Attraction color="red" />} hoverIndicator />
              <Button icon={<ShareOption color="plain" />} hoverIndicator /> */}
            </CardFooter>
          </Card>
        </Tip>
        </Box>
      </Box>
    </>
  );
};


const ParticipantsAccordion = ({ animate, multiple, ...rest }) => (
  <Grommet theme={ParticipantsAccordionTheme}>
    <ResponsiveContext.Consumer>
      {(size) =>
        size === "small" ? (
          <Box {...rest} pad="large" align="center" justify="center">
            <Heading size="small">roadmap:</Heading>

            <Paragraph alignSelf="center" margin="12px">
              <Text>
                initial implementation will cover dedicating resources to
                multiple cities {"&"} genres.
              </Text>
            </Paragraph>
            <Paragraph alignSelf="center" margin="12px">
              <Text>
                With a focus on voting for artists that are proposed within
                genres of the cities.
              </Text>
            </Paragraph>

            <Paragraph alignSelf="center" margin="12px">
              <Text>
                Then will introduce the impact-oriented minting form including
                causes.
              </Text>
            </Paragraph>

            <Accordion animate={animate} multiple>
              <AccordionPanel
                margin="20px"
                label={<Text size="medium">artists mint artworks</Text>}
              >
                <Box background="#9a3c3c" height="middle" width="middle">
                  <Paragraph alignSelf="center" margin="12px">
                    <Text>Artists initiate the scope of impact.</Text>
                  </Paragraph>

                  <Image
                    src="./a_pseudo_banksy_mint.png"
                    width="400px"
                    height="360px"
                    margin="32px"
                  ></Image>

                  <Paragraph alignSelf="center" margin="12px">
                    <Text>
                      {" "}
                      NFT royalties of an artwork, partially dedicated to
                      empower cities, through combinations of causes and genres.
                    </Text>
                  </Paragraph>
                </Box>
              </AccordionPanel>

              <AccordionPanel
                margin="20px"
                label={
                  <Text size="medium"> {"&"} create topics for genres</Text>
                }
              >
                <Box background="#9a3c3c" height="middle" width="middle">
                  <Paragraph alignSelf="center" margin="12px">
                    <Text>
                      stateful.art treasury on 0xhabitat.org enables artists to
                      initiate artistic movements as topics.
                    </Text>
                    <Image
                      src="./create_new_community_in_habitat.png"
                      width="380px"
                      height="400px"
                      margin="20px"
                    ></Image>
                  </Paragraph>

                  <Paragraph alignSelf="center" margin="12px">
                    <Text>
                      {" "}
                      They can also include communication channels for those
                      communities.
                    </Text>
                  </Paragraph>
                </Box>
              </AccordionPanel>

              <AccordionPanel
                margin="20px"
                label={<Text size="medium">audiences vote via signalling</Text>}
              >
                <Box
                  background="#9a3c3c"
                  alignSelf="center"
                  height="middle"
                  width="middle"
                  margin="20px"
                >
                  <Paragraph alignSelf="center" margin="12px">
                    <Text>
                      members in those cities, that are as well audiences,
                      artists and residents of those cities; vote on which
                      artistic projects will get funding and be able to propose
                      new artists and projects from other cities and genres to
                      their communities.
                    </Text>
                  </Paragraph>

                  <Image
                    src="./jazz_elise_reggae_hamburg.png"
                    width="380px"
                    height="360px"
                    margin="32px"
                  ></Image>

                  <Paragraph alignSelf="center" margin="12px">
                    <Text>
                      When there is enough fund collected for those cities,
                      proposed and voted artists will be entitled for a
                      financial and community support for a future artist
                      residency.
                    </Text>
                  </Paragraph>
                </Box>
              </AccordionPanel>

              {/* <AccordionPanel
                    margin="20px"
                    label={<Text size="medium">collectors help making positive impact</Text>}
                  >
                    <Box background="#9a3c3c" alignSelf="center" height="middle" width="medium" margin="20px">
                      <Paragraph justify="center" margin="12px">
                        <Text > 
                                Collectors will be included on artistic movements of those cities and they'll be able to vote on artist residencies too.
                          </Text>
                      </Paragraph>
                
                  
                    </Box>
                  </AccordionPanel> */}
            </Accordion>
          </Box>
        ) : (
          <Box {...rest} pad="large" align="center" justify="center">
            <Heading size="small">roadmap:</Heading>

            <Paragraph alignSelf="center" margin="12px">
              <Text>
                initial implementation will cover dedicating partial resources
                to multiple artistic movement community, per-city.
              </Text>
            </Paragraph>
            <Paragraph alignSelf="center" margin="12px">
              <Text>
                a focus on voting for art residencies that'd be funded with
                those resources.
              </Text>
            </Paragraph>

            <Paragraph alignSelf="center" margin="12px">
              <Text>
                later will introduce local treasuries for activist movements,
                aka. causes of cities once royalty splitting mechanism is in
                place.
              </Text>
            </Paragraph>

            <Accordion animate={animate} multiple>
              <AccordionPanel
                margin="20px"
                label={<Text size="medium">artists mint artworks</Text>}
              >
                <Box background="#9a3c3c" height="middle" width="600px">
                  <Paragraph alignSelf="center" margin="12px">
                    <Text>they initiate the scope of impact.</Text>
                    <Text>
                      {" "}
                      NFT royalties of an artwork, partially dedicated to
                      empower cities, through combinations of causes and genres.
                    </Text>
                  </Paragraph>

                  <Image
                    src="./a_pseudo_banksy_mint.png"
                    width="582px"
                    height="576px"
                    margin="22px"
                    alignSelf="center"
                  ></Image>

                </Box>
              </AccordionPanel>

              <AccordionPanel
                margin="20px"
                label={
                  <Text size="medium"> {"&"} create topics for genres</Text>
                }
              >
                <Box background="#9a3c3c" height="middle" width="large">
                  <Paragraph alignSelf="center" margin="12px">
                    <Text>
                      stateful.art community on 0xhabitat.org, extended via city
                      treasuries; enables artists to initiate artistic movements
                      as topics.
                    </Text>
                    <Image
                      src="./create_new_community_in_habitat.png"
                      width="380px"
                      height="400px"
                      margin="20px"
                    ></Image>
                  </Paragraph>

                  <Paragraph alignSelf="center" margin="12px">
                    <Text>
                      {" "}
                      They can also include communication channels for those
                      communities.
                    </Text>
                  </Paragraph>
                </Box>
              </AccordionPanel>

              <AccordionPanel
                margin="10px"
                label={<Text size="medium">audiences vote via signalling</Text>}
              >
                <Box
                  background="#9a3c3c"
                  alignSelf="center"
                  height="middle"
                  width="large"
                  margin="20px"
                >
                  <Paragraph alignSelf="center" margin="12px">
                    <Text>
                      {" "}
                      audiences, artists/collectives from those cities propose
                      new artists and projects to their communities. those
                      artists and projects might be already residing in those
                      cities or not.
                    </Text>
                  </Paragraph>

                  <Image
                    src="./jazz_elise_reggae_hamburg.png"
                    width="692px"
                    height="576px"
                    margin="32px"
                  ></Image>

                  <Paragraph alignSelf="center" margin="12px">
                    <Text>
                      When there is enough fund collected for those cities,
                      proposed and voted artists will be entitled for a
                      financial and community support for a future artist
                      residency.{" "}
                    </Text>
                  </Paragraph>
                </Box>
              </AccordionPanel>

              <AccordionPanel
                margin="10px"
                label={
                  <Text size="medium">and .. community-based curation</Text>
                }
              >
                <Box
                  background="#9a3c3c"
                  alignSelf="center"
                  height="middle"
                  width="large"
                  margin="20px"
                >
                  <Paragraph alignSelf="center" margin="12px">
                    <Text>
                      {" "}
                      audiences, artists/collectives from those cities propose
                      new artists and projects to their communities. those
                      artists and projects might be already residing in those
                      cities or not.
                    </Text>
                  </Paragraph>

                  <Image
                    src="./jazz_elise_reggae_hamburg.png"
                    width="692px"
                    height="576px"
                    margin="32px"
                  ></Image>

                  <Paragraph alignSelf="center" margin="12px">
                    <Text>finally</Text>
                  </Paragraph>

                  <Paragraph alignSelf="center" margin="12px">
                    <Text>
                      When there is enough fund collected for those cities,
                      proposed and voted artists will be entitled for a
                      financial and community support for a future artist
                      residency.{" "}
                    </Text>
                  </Paragraph>
                </Box>
              </AccordionPanel>

              {/* <AccordionPanel
                    margin="20px"
                    label={<Text size="medium">collectors help making positive impact</Text>}
                  >
                    <Box background="#9a3c3c" alignSelf="center" height="middle" width="medium" margin="20px">
                      <Paragraph justify="center" margin="12px">
                        <Text > 
                                Collectors will be included on artistic movements of those cities and they'll be able to vote on artist residencies too.
                          </Text>
                      </Paragraph>
                
                  
                    </Box>
                  </AccordionPanel> */}
            </Accordion>
          </Box>
        )
      }
    </ResponsiveContext.Consumer>
  </Grommet>
);

// const MetamaskConnectButton = (props) => (
//   <Button hoverIndicator="red" onClick={() => {}} {...props}>
//     {({ disabled, hover, focus }) => (
//       <Box pad="small" direction="row" align="center" gap="small">
//         {focus ? (
//           <Text>connecting metamask..</Text>
//         ) : (
//           <>
//             <Image
//               src="https://i.imgur.com/zcBpfGM.png"
//               margin="4px"
//               width="32x"
//               height="32px"
//             />
//             <Text margin="8px" color={disabled}>
//               connect
//             </Text>
//           </>
//         )}
//       </Box>
//     )}
//   </Button>
// );

const DiscordButton = (props) => (
  <Button hoverIndicator="#2C2F33" onClick={() => {}} {...props} margin="20px">
    {({ disabled, hover, focus }) => (
      <Box pad="small" align="center" gap="small">
        <>
          <Anchor href="https://discord.gg/eheV9EcudR" target="_blank">
            <Box direction="row">
              <Image
                src="https://i.pinimg.com/736x/34/ea/20/34ea20e0747020c021677987211a6353.jpg"
                width="42x"
                height="42px"
              />
              <Text margin="6px" color={disabled}>
                join discord
              </Text>
            </Box>
          </Anchor>
        </>
      </Box>
    )}
  </Button>
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
    <Anchor href="#"
                target="_blank"
                color="white">paper</Anchor>|
  */}
        $START <br></br>
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
          href="https://miro.com/app/board/o9J_l3gy0-U=/?invite_link_id=475666759031"
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
          <Paragraph> the revolution will be minted</Paragraph>
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
            <Paragraph alignSelf="center">
              stateful.art is a open-sourced design-thinking project, aiming to
              create a context;<br></br>
              <br></br>
              where artists can include cities to build mutual empowerment and
              autonomy zones that are reflecting to localities' artistic and
              activist scenes. <br></br>
              <br></br>
              project is based on blockchain, to establish a resilient and
              censorship-free, democratic environment in order to secure the
              sustainability and diversity of future exchanges.
            </Paragraph>
          </Box>

          <Box justify="center" alignContent="center">
            <Paragraph>
              we will start with connecting artistic movements in music, aka.
              genres in multiple cities, enabling community-supported,
              transparent and hence, an open and cooperative art residencies of
              the future.
            </Paragraph>
          </Box>

          <DiscordButton />

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
         
              <Box direction="column"  alignSelf="center">
              <Text size="middle" alignSelf="center">Decentralised</Text>
              <Text size="middle" alignSelf="center">Autonomous {"&"} Artistic</Text>
              <Text size="middle" alignSelf="center"></Text>
              <Text size="middle" alignSelf="center">Organisations</Text>
            <br></br>
              <Text alignSelf="center"> at </Text>
              <Anchor
                href="https://0xhabitat.org/"
                target="_blank"
                color="white"
                alignSelf="center"
              >
                0xhabitat.org
              </Anchor>
              </Box>
            </Box>
          </Box>

          <Box justify="center" alignContent="center">
            <CaretUp color="red" />
          </Box>

          <GenreCardList />

          <Box justify="center" alignContent="center">
            <CaretDown color="green" />
          </Box>

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

            <ParticipantsAccordion />

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
