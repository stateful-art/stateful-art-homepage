import { Anchor, Box, Heading} from "grommet";
import React from "react";

export const LocalZines = () => {
  return (
    <Box alignSelf="center">
      <Box pad="medium">
        <Heading size="medium">
          local
          <Anchor href="https://en.wikipedia.org/wiki/Fanzine" target="_blank">
            {" "}
            zines{" "}
          </Anchor>
        </Heading>
        -- LocalZines is a project, containing an example initial. illustrative
        smart contract (
          <Anchor color="orange">
          here</Anchor>
          ).         around a collaborative and impactful NFT
        minting + fair marketplace scenario. details
        <Anchor
          href="https://www.interaction-design.org/literature/topics/wicked-problems"
          target="_blank"
        >
          @ github repo.
        </Anchor>{" "}
        {/* <LocalZineSlides/> */}
      </Box>
    </Box>
  );
};
