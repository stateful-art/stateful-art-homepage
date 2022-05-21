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
import { ModesInTabsMobile } from "./components/commons/NeuTabsForMobile";

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
              <Box
                align="center"
                background="black"
                justify="center"
                direction="column"
              >
                <IntroTextVertical />
              </Box>
              <Box alignContent="center" background="black">
                <ModesInTabsMobile />

                <Paragraph
                  alignSelf="center"
                  size="large"
                  textAlign="center"
                  margin={"32px"}
                >
                  with base and fusion types; <br></br>
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
                  &
                  <Anchor
                    color="gray"
                    background="yellow"
                    href="https://decrypt.co/resources/tokenomics"
                    target="_blank"
                  >
                    {" "}
                    tokenomics.{" "}
                  </Anchor>{" "}
                  <br></br>
                  yielding mutually inclusive and expanding graph of a creative
                  civilisation<br></br> in space-time.{" "}
                </Paragraph>
                <CitiesUnionByGenresMobile />

                <Paragraph alignSelf="center" size="large" textAlign="center">
                  let's bridge cities; with love, peace, and creativity.
                  <Anchor
                    href="https://www.youtube.com/watch?v=LnmSSkNLYhs"
                    target="_blank"
                  >
                    {" "}
                    everyday {"& "}
                    everywhere,{" "}
                  </Anchor>
                  @ <Text size="large">21st century and forwards.</Text>
                </Paragraph>

                <Box margin={"small"} pad={"medium"}>
                  <DiscordButton props={{ size: "small" }} />

                  <Box alignSelf="center">
                    <Box justify="center" alignContent="center">
                      <CaretUp color="red" />
                    </Box>

                    <Box justify="center" alignContent="center">
                      <CaretDown color="yellow" />
                      <CaretDown color="yellow" />
                      <CaretDown color="yellow" />
                    </Box>
                  </Box>
                </Box>

                {/* let's get it started ~ Black Eyed Peas */}

                <Box alignSelf="center">
                  <iframe
                    width="420px"
                    height="360px"
                    src="https://www.youtube.com/embed/bp3qulwW88k"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  {/* <iframe
                  
                    src="https://www.youtube.com/embed/IKqV7DB8Iwg"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe> */}

                  {/* <iframe width="100%" height="272" src="https://www.youtube.com/embed/WpYeekQkAdc" title="Where is the Love - song by Black Eyed Peas" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                </Box>
              </Box>

              <FooterSectionMobile />
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
                {/* <CitiesUnionByGenres/> */}
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
                        alignSelf="center"
                        size="large"
                        textAlign="center"
                        margin={"32px"}
                      >
                        <Anchor
                          color="pink"
                          background="yellow"
                          href="https://en.wikipedia.org/wiki/Expressionism"
                          target="_blank"
                        >
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
                        &
                        <Anchor
                          color="gray"
                          background="yellow"
                          href="https://decrypt.co/resources/tokenomics"
                          target="_blank"
                        >
                          {" "}
                          tokenomics.{" "}
                        </Anchor>{" "}
                        <br></br>
                        <br></br>
                        we're illustrating and exploring the ever-expanding
                        graph of a creative civilisation, in space-time.{" "}
                      </Paragraph>

                      <Paragraph alignSelf="start" size="large" textAlign="end">
                        bridge cities; with love, peace, and creativity.
                        <Anchor
                          href="https://www.youtube.com/watch?v=LnmSSkNLYhs"
                          target="_blank"
                        >
                          {" "}
                          everyday {"& "}
                          everywhere,{" "}
                        </Anchor>
                        @ <Text size="large">21st century and forwards.</Text>
                        <DiscordButton />
                      </Paragraph>
                    </Box>
                  </Heading>
                </Box>

                <Text size="xlarge" margin={"0px"}>
                  {" "}
                  Introducing
                </Text>
                <Text size="xlarge" margin={"32px"}>
                  {" "}
                  Decentralized Artistic Organicities
                </Text>
        

                <Box direction="row" gap={"medium"}>
                  <iframe
                    title="hiphop-dao"
                    src=" https://app.dework.xyz/hiphop/"
                    height={"600px"}
                    width={"640px"}
                  />
                  <iframe
                    title="rock-dao"
                    src=" https://app.dework.xyz/rock"
                    height={"600px"}
                    width={"640px"}
                  />

                </Box>
                {/* <iframe
                  title="sphere-with-stripes"
                    src=" https://generated.space/sketch/stripe-sphere/"
                    height={"900px"}
                    width={"80%"}
                  /> */}

                <Box justify="center" alignContent="center" margin={"40px"}>
              
                  <Text size="xlarge" margin={"20px"}>
                    {" "}
                    What's next?
                  </Text>
                  <Text size="xlarge" margin={"20px"}>
                    {" "}
                    You decide!
                  </Text>
                </Box>
                <Box>
                  <iframe
                    width="720px"
                    height="540px"
                    src="https://www.youtube.com/embed/bp3qulwW88k"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  {/* let's get it started ~ Black Eyed Peas */}
                  {/* <iframe
                    width="720px"
                    height="480px"
                    src="https://www.youtube.com/embed/IKqV7DB8Iwg"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe> */}

                  {/* <iframe width="100%" height="272" src="https://www.youtube.com/embed/WpYeekQkAdc" title="Where is the Love - song by Black Eyed Peas" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
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
      margin={"40px"}
      animation={{
        type: "jiggle",
        delay: 20,
        duration: 1000,
      }}
    >
      <Image
        src="https://i.pinimg.com/736x/34/ea/20/34ea20e0747020c021677987211a6353.jpg"
        width="60x"
        height="60px"
      />

      <Text textAlign="center" size="large" marginTop="20">
        Join
        <br></br>Community
      </Text>
      <Image
        src="https://i.pinimg.com/736x/34/ea/20/34ea20e0747020c021677987211a6353.jpg"
        width="60x"
        height="60px"
      />
    </Box>{" "}
  </Anchor>
);

const FooterSectionMobile = () => (
  <>
    <Box direction="column" background={"black"}>
      <Box
        tag="footer"
        direction="row"
        justify="center"
        pad="small"
        gap="small"
        margin="medium"
        flex={true}
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

      <Box align="center" justify="center" margin="30px">
        <Text size="large" weight={"bolder"}>
          {" "}
          contact@stateful.art
        </Text>
      </Box>
      <Box align="center" justify="center" margin={"16px"}>
        <Anchor
          href="https://www.youtube.com/watch?v=QnJFhuOWgXg"
          target="_blank"
        >
          <Paragraph size="large" color={"white"}>
            {" "}
            the revolution will be minted
          </Paragraph>
        </Anchor>
        <Directions color="red" />

        <Text size="medium" weight={"bolder"}>
          {" "}
          © all rights acknowledged{" "}
        </Text>
      </Box>
    </Box>
  </>
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
      {/* 
      <Box align="center" justify="center" margin="30p" background="red">
        <Anchor
          href="https://trello.com/b/DzBmDMd9/statefulart"
          target="_blank"
          color="white"
        >
          {" "}
          <Text size="  large">project evolution</Text>
        </Anchor>
      </Box> */}

      <Box align="center" justify="center" margin="12px">
        <Text size="large" margin="20px">
          {" "}
          contact@stateful.art
        </Text>
      </Box>
      <Box align="center" justify="center" margin="16px">
        <Anchor
          href="https://www.youtube.com/watch?v=QnJFhuOWgXg"
          target="_blank"
        >
          <Paragraph size="large"> the revolution will be minted</Paragraph>
        </Anchor>
        <Box align="center" justify="center" margin="16px">
          <Directions color="red" />

          <Text size="medium" weight={"bolder"}>
            {" "}
            © all rights acknowledged{" "}
          </Text>
        </Box>
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

const IntroTextVertical = () => {
  return (
    <Box direction="column" size="large" margin="16px">
      <Box size="medium">
        <Paragraph textAlign="center" size="large">
          stateful
          <Text color="yellow" size="large">
            .
          </Text>
          <Text color="red" size="large">
            art
          </Text>{" "}
          is an open-sourced <br></br>
          design-thinking project;<br></br>
          providing context and efforts<br></br>
          on building cooperations <br></br>
          to achieve a prolonged, unique vision:
          <br></br>
          <br></br>
          <Text alignContent="center">
            <Anchor
              size="large"
              href="https://en.wikipedia.org/wiki/World_peace"
              target="_blank"
              color="#98bdff"
            >
              World Peace
            </Anchor>{" "}
          </Text>
          <Anchor
            href="https://www.counterpunch.org/2015/08/21/the-russell-einstein-peace-manifesto-of-1955/"
            target="_blank"
            color="#98bdff"
          ></Anchor>
        </Paragraph>
      </Box>

      <Box size="medium">
        <Paragraph size="large" textAlign="center">
          initiating creative exchange and solidarity networks between cities on{" "}
          <Anchor
            color="yellow"
            href="https://en.wikipedia.org/wiki/Blockchain"
            target="_blank"
          >
            blockchain
          </Anchor>
          .<br></br>
          this is our restoration, <br></br> one that is peaceful & movemental.
        </Paragraph>
      </Box>
      <Box size="medium">
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
    </Box>
  );
};

// const CitiesUnionByGenres = () => {
//   return (
//     <>
//       <Image
//         src="cities_bridged_by_genres.png"
//         width="600x"
//         height="400px"
//         margin={"40px"}
//       />
//       ;
//     </>
//   );
// };

const CitiesUnionByGenresMobile = () => {
  return (
    <>
      <Image
        alignSelf="center"
        src="cities_bridged_by_genres.png"
        width="360px"
        height="280px"
        margin={"40px"}
      />
      ;
    </>
  );
};

export default NeuApp;
