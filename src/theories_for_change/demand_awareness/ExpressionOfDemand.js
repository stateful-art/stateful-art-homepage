import { Box, Grid } from "grommet";
import React from "react";

export const ExpressionOfDemandWeb = () => {
  return (
    <>
      <Grid
        rows={["small", "medium"]}
        columns={["large", "large"]}
        gap="small"
        areas={[
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "nav", start: [0, 1], end: [0, 1] },
          { name: "main", start: [1, 1], end: [1, 1] },
        ]}
      >
        <Box gridArea="header" background="black">
         
        </Box>
        <Box gridArea="nav" background="#fb6b23">
        </Box>
        <Box gridArea="main" 
      
        justify="center">
        </Box>
      </Grid>
    </>
  );
};
