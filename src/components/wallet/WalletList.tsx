import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Hoogii from "./Hoogii";

const StyledStack = styled(Stack)({
  marginBottom: "10px",
  borderBottom: "1px solid #C6C6C6",
  paddingBottom: "20px",
});

const StyledTypography = styled(Typography)({
  color: "#444444",
});

const WalletList = () => {
  return (
    <StyledStack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <StyledTypography variant="caption">Wallet List</StyledTypography>
      <Hoogii />
    </StyledStack>
  );
};

export default WalletList;
