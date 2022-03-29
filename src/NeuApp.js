import {
  Anchor,
  Box,
  Grommet,
  Heading,
  Image,
  Paragraph,
  ResponsiveContext,
  Text,
} from "grommet";
import { CaretDown, CaretUp, Directions } from "grommet-icons";
import React from "react";
import { ModesInTabs } from "./components/commons/NeuTabsForAll";
import { NavBar } from "./components/commons/Navbar";
const theme = {
  global: {
    font: { family: "Open Sans", size: "18px", height: "20px" },
    background: { color: "#323001" },
  },
};

function NeuApp() {
  return (
    <Grommet theme={theme}>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
            <>
              <NavBar />
            </>
          ) : (
            <>
              <NavBar />

              <Box
                align="center"
                background="black"
                justify="center"
                direction="column"
              >
                <IntroTextHorizontal />

                <ModesInTabs />

                <Box justify="center" alignContent="center" size="large">
                  <Heading size="small" alignSelf="center">
                    <Box
                      direction="row"
                      pad="small"
                      gap="small"
                      alignSelf="center"
                      size="large"
                      marginTop="20%"
                    >
                      <Paragraph
                        alignSelf="start"
                        size="large"
                        textAlign="start"
                      >
                        <Anchor
                          color="pink"
                          background="yellow"
                          href="https://en.wikipedia.org/wiki/Expressionism"
                          target="_blank"
                        >
                          {" "}
                          an expressive{" "}
                        </Anchor>
                        & progressive art direction in decentralized{" "}
                        <Anchor
                          color="yellow"
                          background="yellow"
                          href="https://en.wikipedia.org/wiki/Decentralization"
                          target="_blank"
                        >
                          governance{" "}
                        </Anchor>
                        and{" "}
                        <Anchor
                          color="gray"
                          background="yellow"
                          href="https://en.wikipedia.org/wiki/Post-structuralism"
                          target="_blank"
                        >
                          tokenomics.{" "}
                        </Anchor>
                      </Paragraph>

                      <Paragraph alignSelf="start" size="large" textAlign="end">
                        $START a revolution; with love, peace, and creativity.
                        <Anchor
                          href="https://www.youtube.com/watch?v=LnmSSkNLYhs"
                          target="_blank"
                        >
                          {" "}
                          everyday {"& "}
                          everywhere,{" "}
                        </Anchor>
                        for the <Text size="large">21st century.</Text>
                      </Paragraph>
                    </Box>
                  </Heading>
                </Box>

                <DiscordButton />

                <Box justify="center" alignContent="center">
                  <CaretUp color="red" />
                </Box>

                <Box justify="center" alignContent="center">
                  <CaretDown color="yellow" />
                  <CaretDown color="yellow" />
                  <CaretDown color="yellow" />
                </Box>

                <FooterSection />
              </Box>
            </>
          )
        }
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

// const OnTheWall = () => (
//   <Grommet>
//     <Box>
//       <Image
//         src="./footer_wave_colored_sky.svg"
//         maxWidth="100%"
//         alt="#87ceeb, aka. sky blue"
//       ></Image>
//     </Box>

//     <ResponsiveContext.Consumer>
//       {(size) =>
//         size === "small" ? (
//           <>
//             <Heading size="xsmall" textAlign="center">
//               {" "}
//               a solidarity, <br></br>
//               on the wall"
//             </Heading>
//           </>
//         ) : (
//           <>
//             <Heading size="medium" textAlign="center">
//               {" "}
//               solidarity, on the wall
//             </Heading>
//           </>
//         )
//       }
//     </ResponsiveContext.Consumer>

//     <ResponsiveContext.Consumer>
//       {(size) =>
//         size === "small" ? (
//           <Box direction="column">
//             <Box
//               animation={{
//                 type: "slideUp",
//                 delay: 20,
//                 duration: 1000,
//               }}
//             >
//               <Image
//                 src="./a_pseudo_banksy_mint.png"
//                 width="464px"
//                 height="448px"
//                 margin="32px"
//               ></Image>
//             </Box>

//             {"     "}
//             <Anchor
//               color="orange"
//               alignSelf="center"
//               size="medium"
//               href="https://en.grafisch-studio.de/product-page/zeichnung-werknummer-799"
//               target="_blank"
//             >
//               a pseudo Banksy piece, anonymously and generously sharing all that
//               digital version of the wall atNFT will make
//             </Anchor>
//             <Box
//               animation={{
//                 type: "slideDown",
//                 delay: 20,
//                 duration: 1000,
//               }}
//             >
//               <Image
//                 src="./real_metaverse.png"
//                 width="464px"
//                 height="448px"
//                 margin="32px"
//               ></Image>
//             </Box>
//           </Box>
//         ) : (
//           <Box direction="row">
//             <Box
//               animation={{
//                 type: "slideUp",
//                 delay: 20,
//                 duration: 1000,
//               }}
//             >
//               <Image
//                 src="./a_pseudo_banksy_mint.png"
//                 width="576px"
//                 height="558px"
//                 margin="32px"
//               ></Image>
//             </Box>
//             <Box
//               animation={{
//                 type: "slideDown",
//                 delay: 20,
//                 duration: 1000,
//               }}
//             >
//               <Image
//                 src="./real_metaverse.png"
//                 width="576px"
//                 height="558px"
//                 margin="32px"
//               ></Image>
//             </Box>
//           </Box>
//         )
//       }
//     </ResponsiveContext.Consumer>

//     <Box>
//       <Image
//         src="./footer_wave_colored_orange.svg"
//         maxWidth="100%"
//         alt="orange"
//       ></Image>
//     </Box>

//   </Grommet>
// );

const DiscordButton = (props) => (
  <Anchor href="https://discord.gg/EXN7Mta2wu" target="_blank" color="black">
    <Box
      size="small"
      direction="row"
      justify="center"
      pad="medium"
      gap="medium"
      flex={true}
      background="#5865F2"
      round="large"
      animation={{
        type: "jiggle",
        delay: 20,
        duration: 1000,
      }}
    >
      <Text size="large" marginTop="20">
        community
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
      ></Box>

      <Box
        tag="footer"
        direction="row"
        justify="center"
        pad="small"
        gap="small"
        //flex={true}
        background="black"
      ></Box>

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

      <Box align="center" justify="center" margin="30p" background="red">
        <Anchor
          href="https://trello.com/b/DzBmDMd9/statefulart"
          target="_blank"
          color="white"
        >
          {" "}
          <Text size="  large">project evolution</Text>
        </Anchor>
      </Box>

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

const IntroTextHorizontal = () => {
  return (
    <>
      <Box direction="column"></Box>
      <Box direction="row" size="large">
        <Box size="medium" margin="12px">
          <Paragraph textAlign="start" size="large">
            stateful
            <Text color="yellow" size="large">
              .
            </Text>
            <Text color="red" size="large">
              art
            </Text>{" "}
            is an open-sourced design-thinking project; providing context and
            efforts on building cooperations to achieve a prolonged, unique
            vision.
            <Anchor
              href="https://www.counterpunch.org/2015/08/21/the-russell-einstein-peace-manifesto-of-1955/"
              target="_blank"
              color="#98bdff"
            ></Anchor>
          </Paragraph>
        </Box>

        <Box size="medium" margin="12px">
          <Paragraph size="large" textAlign="end">
            initiating creative exchange and solidarity networks between cities
            on{" "}
            <Anchor
              color="yellow"
              href="https://en.wikipedia.org/wiki/Blockchain"
              target="_blank"
            >
              blockchain
            </Anchor>
            .<br></br>
            this is our restoration, one that is <br></br>
            peaceful & movemental.
          </Paragraph>
        </Box>
      </Box>

      <Box pad="medium" direction="column">
        <Box pad="small" alignSelf="center">
          <Anchor
            size="large"
            href="https://en.wikipedia.org/wiki/World_peace"
            target="_blank"
            color="#98bdff"
          >
            <strong>"World Peace"</strong>
          </Anchor>
        </Box>
        <Box gap="medium" direction="row" alignSelf="center">
          <Box>
            <Anchor
              href="https://www.youtube.com/watch?v=AR9BwHSO0_8"
              target="_blank"
            >
              {"<"} manifested {">"}
            </Anchor>
          </Box>
          <Box>
            <Anchor
              gap
              href="https://www.youtube.com/watch?v=aaFZJ_ymueA"
              target="_blank"
            >
              {"<"} re-visited {">"}
            </Anchor>
          </Box>
        </Box>

        <Paragraph textAlign="center" size="large">
          as an artwork itself, stateful
          <Text color="yellow" size="large">
            .
          </Text>
          <Text color="red" size="large">
            art
          </Text>{" "}
          comes in multi-states & blends, in the scales of expression and
          reflections:
        </Paragraph>
      </Box>
    </>
  );
};

// const IntroTextVertical = () => {
//   return (
//     <Box direction="column" size="large">
//       <Box size="medium">
//         <Paragraph textAlign="center" size="large">
//           stateful
//           <Text color="yellow" size="large">
//             .
//           </Text>
//           <Text color="red" size="large">
//             art
//           </Text>{" "}
//           is a design-thinking project; <br></br>providing context, tooling and
//           efforts on <br></br>building cooperations to achieve <br></br> a
//           prolonged, unique vision.
//         </Paragraph>
//       </Box>

//       <Box size="medium">
//         <Paragraph size="large" textAlign="center">
//           initiating future exchanges and solidarity networks on the{" "}
//           <Anchor color="#AA99FF" href="https://ethereum.org/en/">
//             ethereum
//           </Anchor>{" "}
//           <Anchor
//             color="yellow"
//             href="https://en.wikipedia.org/wiki/Blockchain"
//           >
//             blockchain
//           </Anchor>
//           <br></br>
//           this is an exploratory restoration, <br></br>one that is quite
//           movemental.
//         </Paragraph>
//       </Box>
//     </Box>
//   );
// };

export default NeuApp;
