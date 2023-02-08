import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { FormControl, Input, InputLabel, Stack } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const StyledFullStack = styled(Stack)({
  width: "100%",
});

const StyledFullTextField = styled(FormControl)({
  width: "100%",
});

const StyledButton = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  cursor: "pointer",
  "&:hover": {
    background: "#262E32",
    color: "white",
  },
});

const GetAddressFromPuzzleHash = () => {
  const handleTransferClick = () => {};

  return (
    <StyledFullStack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      <StyledFullTextField variant="standard">
        <InputLabel htmlFor="component-simple">Address</InputLabel>
        <Input id="component-simple" placeholder="address" />
      </StyledFullTextField>
      <StyledButton onClick={handleTransferClick}>
        <ArrowDownwardIcon />
      </StyledButton>
      <StyledFullTextField variant="standard">
        <InputLabel htmlFor="component-simple">Puzzle Hash</InputLabel>
        <Input id="component-simple" value={"Puzzle Hash"} disabled />
      </StyledFullTextField>
    </StyledFullStack>
  );
};

export default GetAddressFromPuzzleHash;
