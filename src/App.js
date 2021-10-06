// import logo from './logo.svg';
// import './App.css';
import {
  Accordion,
  AccordionPanel,
  Anchor,
  Box,
  Button,
  Grommet,
  Heading,
  Image,
  Paragraph,
  ResponsiveContext,
  Text,
} from "grommet";
import {
  AddCircle,
  CaretDown,
  CaretUp,
  Directions,
  SubtractCircle,
} from "grommet-icons";
import React from "react";
// import { Router } from "react-router";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

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
                With a focus on voting on the cities for art residencies that'd
                be funded with those resources.
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
                label={
                  <Text size="medium">
                    audiences vote for art residencies
                  </Text>
                }
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
                       Audiences, that are as well residents of those
                      cities; vote on which artistic projects will get funding
                      and be able to propose artists and new projects.
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
                initial implementation will cover dedicating resources to
                multiple cities {"&"} genres.
              </Text>
            </Paragraph>
            <Paragraph alignSelf="center" margin="12px">
              <Text>
                With a focus on voting on the cities for art residencies that'd
                be funded with those resources.
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
                <Box background="#9a3c3c" height="middle" width="large">
                  <Paragraph alignSelf="center" margin="12px">
                    <Text>Artists initiate the scope of impact.</Text>
                  </Paragraph>

                  <Image
                    src="./a_pseudo_banksy_mint.png"
                    width="692px"
                    height="576px"
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
                <Box background="#9a3c3c" height="middle" width="large">
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
                label={
                  <Text size="medium">
                    audiences vote for funding art residencies
                  </Text>
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
                       Audiences, that are as well residents of those
                      cities; vote on which artistic projects will get funding
                      and be able to propose artists and new projects.
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
  <Button hoverIndicator="#2C2F33" onClick={() => {}} {...props}>
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
        at <Anchor
          href="https://0xhabitat.org/app/#habitat-community,0xbb2fe36ba4fb98a3b268a3d7ee872081ad0155376abbbb8cf91d97275ac8ec58"
          target="_blank"
          color="white"
        >
          <Image src="habitat_logo.png"
          width="80px"
          height="24px"></Image>
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
      </Box>

      <Box align="center" justify="center" margin="30p">
        <Text size="medium"> ~ contact@stateful.art ~</Text>
      </Box>
      <Box align="center" justify="center" margin="30p">
        <Paragraph> the revolution will be minted </Paragraph>
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
              stateful.art is an open-sourced design-thinking project, aiming to
              create a context;<br></br>
              <br></br>
              where artists can include cities to build mutual empowerment and
              autonomy zones that reflecting on localities' artistic and activist
              movements. For positive impact and future exchanges.
            </Paragraph>
          </Box>

          <Box justify="center" alignContent="center">
            <Paragraph>
              we will start with connecting artistic movements and genres in
              multiple cities, enabling community-supported, transparent and
              cooperative art residencies of the future.
            </Paragraph>
          </Box>

          <Box align="center" alignContent="center" justify="center">
            <Image
              src="./cities_bridged_by_genres.png"
              width="360px"
              height="300px"
              margin="20px"
            ></Image>

            <Box justify="center" alignContent="center">
              <CaretDown color="green" />
            </Box>

            <Box direction="row" justify="between">
              <Paragraph>
                ------<br></br>
                genres
                <br></br>
                ------
              </Paragraph>
              <Paragraph>
                ----------<br></br>
                {"<>"}cities{"<>"}
                <br></br>
                ----------
              </Paragraph>

              <Paragraph>
                -------<br></br>
                causes
                <br></br>
                -------
              </Paragraph>
            </Box>
            <Box justify="center" alignContent="center">
              <CaretUp color="red" />
            </Box>

            <Image
              src="./cities_bridged_by_causes.png"
              width="360px"
              height="300px"
              margin="20px"
            ></Image>

            <ParticipantsAccordion />
            <DiscordButton />

            <br></br>

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

            <Box justify="center" alignContent="center">
              <CaretUp color="red" />
            </Box>
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
