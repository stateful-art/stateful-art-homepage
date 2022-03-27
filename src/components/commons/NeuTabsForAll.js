import { Anchor, Box, Image, Tab, Tabs } from "grommet";
import React from "react";
import { ArtDirectionPicasso } from "../../ArtDirectionPicasso";
import { ArtDirectionDaVinci } from "../../ArtDirectionDaVinci";

import { ArtDirectionKahlo } from "../../ArtDirectionKahlo";



export const ModesInTabs = () => {
  return (
    <Box justify="center" alignContent="center" size="xlarge">
      <Box alignSelf="center">
        <Tabs size="xlarge" gap="">
          <Tab title="da Vinci" size="large">
            <Box pad="medium" direction="column">
              <Box direction="row" alignSelf="center">
                <Image
                  src="https://spokenvision.com/wp-content/uploads/2017/03/Mona-Lisa-770x876.jpg"
                  width="292px"
                  height="360px"
            
                ></Image>
              </Box>
              <Box
                direction="row"
                alignSelf="center"
                pad="small"
                elevation="medium"
              >
                <Box pad="xsmall">
                  <Anchor
                    color="yellow"
                    href="https://en.wikipedia.org/wiki/Mona_Lisa"
                    target="_blank"
                    
                  >
                    Mona Lisa
                  </Anchor>
                </Box>
        
              </Box>
            </Box>
              <Box justify="center" alignContent="center" size="medium">
                  <ArtDirectionDaVinci direction={"row"} />
                </Box>
          </Tab>

          <Tab title="Kahlo" size="large">
            <Box pad="medium" direction="column">
              <Box direction="row" alignSelf="center">
                <Image
                  alt="Self-Portrait with Thorn Necklace and Hummingbird: Kahlo painted the self-portrait, which includes a black cat and a monkey, after her divorce from Diego Rivera and the end of her affair with photographer Nickolas Muray."
                  src="https://paintingandframe.com/uploadpic/frida_kahlo/big/self_portrait_with_necklace_of_thorns_1940.jpg"
                  width="292px"
                  height="360px"
             
                ></Image>
              </Box>
              <Box
                direction="column"
                alignSelf="center"
                pad="small"
                elevation="medium"
              >
                <Box pad="small" gap="medium">
                  <Anchor
                    color="yellow"
                    href="https://en.wikipedia.org/wiki/Self-Portrait_with_Thorn_Necklace_and_Hummingbird"
                    target="_blank"
                  >
                    Self-Portrait with Thorn Necklace and Hummingbird
                  </Anchor>
                </Box>

              </Box>
            </Box>

              <Box justify="center" alignContent="center" size="medium">
                  <ArtDirectionKahlo direction={"row"} />
                </Box>
          </Tab>
          <Tab title="Picasso" size="large" pad="small">
            <Box pad="medium" gap="small">
              <Image
                alt="Guernica: It is a large 1937 oil painting on canvas by Spanish artist Pablo Picasso. It is one of his best-known works, regarded by many art critics as the most moving and powerful anti-war painting in history"
                src="https://cdn.britannica.com/79/91479-050-24F98E12/Guernica-canvas-Pablo-Picasso-Madrid-Museo-Nacional-1937.jpg"
                width="800px"
                height="360px"
               
              ></Image>

              <Box
                direction="column"
                alignSelf="center"
                elevation="medium"
              >
                <Box direction="row" alignSelf="center" pad="small">
                  <Box pad="xxsmall">
                    <Anchor
                      href="https://en.wikipedia.org/wiki/Guernica_(Picasso)"
                      target="_blank"
                      color="yellow"
                    >
                      Guernica
                    </Anchor>
                  </Box>
            
                </Box>
              </Box>
                <Box justify="center" alignContent="center" size="medium">
                  <ArtDirectionPicasso direction={"row"} />
                </Box>
            </Box>
          </Tab>
        </Tabs>
      </Box>
    </Box>
  );
};
