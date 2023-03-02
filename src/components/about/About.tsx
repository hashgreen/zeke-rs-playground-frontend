import { Stack, Typography } from "@mui/material";
import React from "react";

import { styled } from "@mui/system";

const StyledStack = styled(Stack)({
  borderBottom: "1px solid #C6C6C6",
  paddingTop: "20px",
  paddingBottom: "20px",
});

const StyledNameTypography = styled(Typography)({
  color: "#0d70c1",
});

const StyledTypography = styled(Typography)({
  color: "#686868",
});

const About = () => {
  return (
    <StyledStack
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      spacing={1}
    >
      <StyledNameTypography fontWeight="500">ZEKE</StyledNameTypography>
      <StyledTypography fontWeight="500">API DEMO</StyledTypography>
    </StyledStack>
  );
};

export default About;
