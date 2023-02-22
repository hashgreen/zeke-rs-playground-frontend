import { HoogiiContext } from "@/providers";
import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useContext, useMemo } from "react";

const StyledStack = styled(Stack)({
  color: "black",
  cursor: "pointer",
  background: "#6DFFCB",
  borderRadius: "5px",
  width: "100%",
});

const StyledNameTypography = styled(Typography)({});
const StyledContentTypography = styled(Typography)({});

const Hoogii = () => {
  const { address, connect, isConnected } = useContext(HoogiiContext);

  const shortAddress = useMemo<string>(
    () =>
      address.length > 10
        ? `${address.slice(0, 5)}...${address.slice(-5)}`
        : address,
    [address]
  );

  const handleClick = () => {
    if (isConnected) return;
    connect();
  };

  return (
    <StyledStack
      onClick={handleClick}
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <StyledNameTypography color="inherit" variant="caption">
        Hoogii
      </StyledNameTypography>
      <StyledContentTypography color="inherit" variant="caption">
        {isConnected ? shortAddress : "connect"}
      </StyledContentTypography>
    </StyledStack>
  );
};

export default Hoogii;
