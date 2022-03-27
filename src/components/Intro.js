import { Box, Grid, ResponsiveContext, Anchor } from "grommet";
import React from "react";
import {
  LogoBig,
  LogoSmall,
  PostStructuralImg,
} from "../components/commons/MultimediaContent";
import { TopWords } from "../what_how_when_where/slogans/PunchLines";
// const theme = {
//   global: {
//     font: {
//       family: "Open Sans",
//       size: "18px",
//       height: "20px",
//       color: "#bac",
//     },
//     background: { color: "##7ac304" },
//   },
// };

export const IntroBig = () => {
  return (
    <>
      <Grid
        border="bottom"
        alignSelf="stretch"
        rows={["small", "medium"]}
        columns={["large", "large"]}
        gap="small"
        style={{ maxWidth: "100%" }}
        areas={[
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "main", start: [0, 1], end: [0, 1] },
          // { name: "main", start: [1, 1], end: [1, 1] },
        ]}
      >
        <Box gridArea="header" background="black" alignSelf="center">
          <LogoBig />
        </Box>
        {/* <Box gridArea="main" background="black">
          <TopWords/>
        </Box> */}
        {/* <Box
          gridArea="main"
          background="url('./orange-conn.svg')"
          justify="center"
        >
          <PostStructuralImg />
          {"     "}
           <Box background="black" width="large">
            <Anchor
              color="green"
              alignSelf="center"
              background="black"
              size="medium"
              href="https://en.grafisch-studio.de/product-page/zeichnung-werknummer-799"
              target="_blank"
            >
              Berliner artist Ryn Shaparenko's work; {"<\\"}
            </Anchor>
            interpreted and resonated as an expression for restoration via
            progressive decentralisation.
          </Box> 
        </Box> */}
      </Grid>
    </>
  );
};

export const IntroSmall = () => {
  return (
    <>
      <Grid
        rows={["medium", "medium"]}
        columns={["medium", "small"]}
        gap="small"
        areas={[
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "nav", start: [0, 1], end: [0, 1] },
          { name: "main", start: [1, 1], end: [1, 1] },
        ]}
      >
        <Box gridArea="nav" background="#fb6b23">
          <TopWords />
        </Box>

        <Box
          gridArea="main"
          background="url('./orange-conn.svg')"
          justify="end"
        >
          <PostStructuralImg />
        </Box>
      </Grid>
    </>
  );
};
