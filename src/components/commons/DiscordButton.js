import {
    Anchor,
    Box,
    Image,
    Text,
  } from "grommet";
  import React from "react";
    

export const DiscordButton = (props) => (
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
          Community
        </Text>
        <Image
          src="https://i.pinimg.com/736x/34/ea/20/34ea20e0747020c021677987211a6353.jpg"
          width="60x"
          height="60px"
        />
      </Box>{" "}
    </Anchor>
  );