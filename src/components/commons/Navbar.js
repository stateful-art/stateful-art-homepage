import React from "react";

import { Anchor, Box, Header, Image, Menu, ResponsiveContext } from "grommet";
import { Add, Chat, Menu as MenuIcon } from "grommet-icons";

export const NavBar = () => (
  <Header background="red" pad="medium" height="xsmall">
    <Anchor
      href=""
      icon={<Image src="./logo.svg" style={{ maxWidth: "22%" }}></Image>}
    />
    <ResponsiveContext.Consumer>
      {(size) =>
        size === "small" ? (
          <Box justify="end">
            <Menu
              a11yTitle="Navigation Menu"
              dropProps={{
                align: { top: "bottom", right: "right" },
                color: "black",
                opacity: "medium",
              }}
              icon={<MenuIcon color="black" />}
              items={[
                {
                  label: (
                    <Box pad="small" background="">
                      Art of Peace
                    </Box>
                  ),
                  href: "https://demover.se",
                  color: "black"
                },
                {
                  label: <Box pad="small">Community</Box>,
                  color: "purple",

                  href: "",
                },
                {
                  label: <Box pad="small">StartDAO</Box>,
color: "red",
                  href: "https://app.dework.xyz/statefulart",
                },
                {
                  label: <Box pad="small">Twitter</Box>,
color: "#1DA1F2",
                  href: "https://twitter.com/statefulArt",
                },
              ]}
            />
          </Box>
        ) : (
          <Box justify="end" direction="row" gap="large">
            <Box
              background="yellow"
              pad="small"
              elevation="large"
              round="medium"
              flex="false"
            >
              <Anchor
                href="https://demover.se"
                label="Art of Peace"
                target={"_blank"}
                color="black"
                pad="small"
              />
            </Box>
            <Box background="black" pad="small" round="medium" flex="false">
              <Anchor
                href="https://discord.gg/EXN7Mta2wu"
                target="_blank"
                label="Community"
                color="white"
                icon={<Chat />}
              />
            </Box>
            <Box background="purple" pad="small" round="medium" flex="false">
              <Anchor
                href="https://app.dework.xyz/statefulart"
                target="_blank"
                label="#StartDAO"
                color="white"
                icon={<Add />}
              />
            </Box>

            <Box background="#1DA1F2" pad="small" round="medium" flex="false">
              <Anchor
                href="https://twitter.com/statefulArt"
                target={"_blank"}
                label="Twitter"
                color="white"
                pad="small"

              />
            </Box>
          </Box>
        )
      }
    </ResponsiveContext.Consumer>
  </Header>
  // </Grommet>
);

export default NavBar;
