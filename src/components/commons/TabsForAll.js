import {
    Anchor,
    Box,
    Heading,
    Tab,
    Tabs,
  } from "grommet";
import { Image } from "grommet-icons";
  import React from "react";
  
export const CoreValues = () => {
  return (
    <Box justify="center" alignContent="center" size="large">
      <Box alignSelf="center">
        <Tabs size="large">
          <Tab title={
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
          } size="large">
            <Box pad="medium">
              <Heading size="medium">
                local
                <Anchor
                  href="https://en.wikipedia.org/wiki/Fanzine"
                  target="_blank"
                >
                  {" "}
                     zines{" "}
                </Anchor>
              </Heading>
              -- LocalZines is a project, containing an example initial.
              illustrative smart contract (here). around a collaborative
              and impactful NFT minting + fair marketplace scenario. details
              <Anchor
                href="https://github.com/stateful-art/local-zines"
                target="_blank"
              >
                @ github repo.
              </Anchor>{" "}
              {/* <LocalZineSlides/> */}
            </Box>
          </Tab>

          <Tab title="manifest/tl;br" size="large">
            <Box pad="medium">
              {/* <Manifest /> */}
            </Box>
          </Tab>
          <Tab title="design principles" size="large">
            <Box pad="medium">
              {/* <DesignPrinciples /> */}
            </Box>
          </Tab>
        </Tabs>
      </Box>
    </Box>
  );
};
