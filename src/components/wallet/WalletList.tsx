import { Stack } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Hoogii from "./Hoogii";

const StyledStack = styled(Stack)({
  marginBottom: "10px",
  background: "white",
  padding: "20px 10px",
});

const WalletList = () => {
  return (
    <StyledStack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Hoogii />
    </StyledStack>
  );
};

export default WalletList;
