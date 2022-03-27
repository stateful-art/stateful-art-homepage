import {
  Anchor,
  Box,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Image,
  Paragraph,
  Text,
  Tip,
} from "grommet";
import { Aggregate, Attraction } from "grommet-icons";
import React from "react";

export const ArtDirectionPicasso = (direction) => {
  return (
    <>
      <Box
        alignSelf="center"
        marginTop="20px"
        justify="center"
        // alignContent="center"
        direction="column"
      >
        <Box
          direction="row"
          pad="small"
          gap="small"
          alignSelf="center"
          size="xlarge"
          textAlign=""
          marginTop="20%"
        ></Box>
      </Box>
      <Box direction={{ direction }}>
        <Cubist />
        <Punk />
        <HipHop />

        <StreetArt />
      </Box>

      <Box
        direction="row"
        alignSelf="start"
        animation={{
          type: "fadeIn",
          delay: 20,
          duration: 1000,
        }}
      >
        <ElectronicMusic />
        <Reggae/>
        <Rock />
        <Box
          animation={{
            type: "pulse",
            delay: 120,
            duration: 1000,
          }}
        >
          <CallForAction />
        </Box>
      </Box>
    </>
  );
};

const StreetArt = () => {
  return (
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
      <Card height="small" margin="small" width="small" background="light-1">
        <CardHeader alignSelf="center" pad="small">
          <Text size="large" weight="bolder">
            $STREET
          </Text>
        </CardHeader>
        <CardBody pad="small" background="red">
          <Anchor href="" target="_blank" color="white">
            <Box alignSelf="center">
              <Image
                src="./street_art_by_bona.jpeg"
                width="100%"
                height="100%"
              ></Image>
            </Box>
          </Anchor>
        </CardBody>
        <CardFooter pad={{ horizontal: "small" }} background="light-2">
          <Text size="large" weight="bold">
            @ 2 cities
          </Text>
          <Attraction />
        </CardFooter>
      </Card>
    </Tip>
  );
};
const CallForAction = () => {
  return (
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
            come'n visit discord channel!
          </Text>
          <Text size="small" alignSelf="center" textAlign="center">
            initiate an artistic community in your city!
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
          <Aggregate size="medium" weight="medium"></Aggregate>
        </CardHeader>
        <CardBody background="white">
          <Anchor href="https://discord.gg/eheV9EcudR" target="_blank">
            <Paragraph textAlign="center">
              {"<"} express yourself! {">"}
              <br></br>
              <br></br>
              start an artistic community in your city
            </Paragraph>
          </Anchor>
        </CardBody>
      </Card>
    </Tip>
  );
};
const Rock = () => {
  return (
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
      <Card height="small" margin="small" width="small" background="light-1">
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
        <CardBody pad="small" background="black">
          <Anchor
            href="https://0xhabitat.org/app/#habitat-community,0x58dac8cfce8db55de5ee3b16a27461a41cf074b0f1a04d73661846dfa2dccd95"
            target="_blank"
            color="white"
          >
            <Box>
              <Image
                src="./rock.jpeg"
                maxWidth="10%"
                maxHeight="10%"
                style={{
                  marginTop: "0px",
                  marginBottom: "100px",
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
  );
};

const Cubist = () => {
  return (
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
          <Text weight="bold">
            where it'll first start, who knows? well, you do!
          </Text>
        </Box>
      }
      dropProps={{ align: { left: "right" } }}
    >
      <Card height="small" margin="small" width="small" background="light-1">
        <CardHeader alignSelf="center" pad="small">
          <Text size="large" weight="bolder">
            $CUBIST
          </Text>
        </CardHeader>
        <CardBody pad="small" background="red">
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
        </CardFooter>
      </Card>
    </Tip>
  );
};

const Punk = () => {
  return (
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
      <Card height="small" margin="small" width="small" background="light-1">
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
                width="100px"
                height="80px"
                style={{
                  marginLeft: "22px",
                  marginRight: "36px",
                  marginTop: "px",
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
  );
};

const Reggae = () => {
  return (
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
      <Card height="small" margin="small" width="small" background="light-1">
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
        </CardFooter>
      </Card>
    </Tip>
  );
};

const Jazz = () => {
  return (
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
          <Text weight="bold">
            where it'll first start, who knows? well, you do!
          </Text>
        </Box>
      }
      dropProps={{ align: { left: "right" } }}
    >
      <Card height="small" margin="small" width="small" background="light-1">
        <CardHeader alignSelf="center" pad="small">
          <Text size="large" weight="bolder">
            $JAZZ
          </Text>
        </CardHeader>
        <CardBody pad="small" background="black">
          <Box alignSelf="center">
            <Image
              src="./jazz.png"
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
        </CardFooter>
      </Card>
    </Tip>
  );
};

const HipHop = () => {
  return (
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
        >
          <Text weight="bold">Berlin, Hamburg, Istanbul, Los Angeles</Text>
        </Box>
      }
      dropProps={{ align: { left: "right" } }}
    >
      <Card height="small" margin="small" width="small" background="light-1">
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
  );
};

const ElectronicMusic = () => {
  return (
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
      <Card height="small" margin="small" width="small" background="light-1">
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
                src="./electronic_music.png"
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
        </CardFooter>
      </Card>
    </Tip>
  );
};

const PoliticalArt = () => {
  return (
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
            @ no cities yet. so start one ;)
          </Text>
        </Box>
      }
      dropProps={{ align: { left: "right" } }}
    >
      <Card height="small" margin="small" width="small" background="light-1">
        <CardHeader
          alignSelf="center"
          pad="small"
          background="light-1"
          color="white"
        >
          <Text size="large" weight="bolder">
            $POLITICAL
          </Text>
        </CardHeader>
        <CardBody pad="small" background="black">
          <Anchor href="" target="_blank" color="white">
            <Box>
              <Image
                src="./political_art.png"
                width="160px"
                height="100px"
              ></Image>
            </Box>
          </Anchor>
        </CardBody>
        <CardFooter pad={{ horizontal: "small" }} background="light-2">
          <Text size="large" weight="bold">
            @ no cities yet
          </Text>

          <Attraction />
        </CardFooter>
      </Card>
    </Tip>
  );
};

const Pop = () => {
  return (
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
      <Card height="small" margin="small" width="small" background="light-1">
        <CardHeader
          alignSelf="center"
          pad="small"
          background="light-1"
          color="white"
        >
          <Text size="large" weight="bolder">
            $POP
          </Text>
        </CardHeader>
        <CardBody pad="small" background="purple">
          <Anchor href="" target="_blank" color="white">
            <Box>
              <Image src="./pop_art.jpeg" width="180px" height="120px"></Image>
            </Box>
          </Anchor>
        </CardBody>
        <CardFooter pad={{ horizontal: "small" }} background="light-2">
          <Text size="large" weight="bold">
            @ no cities yet
          </Text>

          <Attraction />
        </CardFooter>
      </Card>
    </Tip>
  );
};
