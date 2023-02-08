import { Stack } from "@mui/material";
import { styled } from "@mui/system";
import React, { PropsWithChildren } from "react";

const StyledFullStack = styled(Stack)({
  width: "100%",
});

const DemoCardContent = ({ children }: PropsWithChildren) => {
  return (
    <StyledFullStack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      {children}
    </StyledFullStack>
  );
};

export default DemoCardContent;
