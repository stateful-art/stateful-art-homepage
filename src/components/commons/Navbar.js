import React from "react";

import { Anchor, Box, Header, Image, Menu, ResponsiveContext } from "grommet";
import { Chat, Menu as MenuIcon } from "grommet-icons";

export const NavBar = () => (
  <Header background="red" pad="medium" height="xsmall">
    <Anchor
      href="https://tools.grommet.io/"
      icon={<Image src="./logo.svg" style={{ maxWidth: "22%" }}></Image>}
    />
    <ResponsiveContext.Consumer>
      {(size) =>
        size === "small" ? (
          <Box justify="end">
            <Menu
              a11yTitle="Navigation Menu"
              dropProps={{ align: { top: "bottom", right: "right" } }}
              icon={<MenuIcon color="black" />}
              items={[
                {
                  label: (
                    <Box pad="small" background="">
                      about
                    </Box>
                  ),
                  href: "#",
                },
                {
                  label: <Box pad="small">manifest</Box>,
                  href: "#",
                },
                {
                  label: <Box pad="small">projects</Box>,

                  href: "#",
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
                label="community"
                color="white"
                icon={<Chat />}
              />
            </Box>

            <Box background="purple" pad="small" round="medium" flex="false">
              <Anchor
                href="https://app.dework.xyz/statefulart"
                target={"_blank"}
                label="StartDAO"
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
