import { Card, Divider, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { ReactNode } from "react";

// styled

const StyledCard = styled(Card)({
  width: "500px",
});

const StyledStack = styled(Stack)({
  padding: "20px 20px 20px 20px",
});
const StyledTitleTypography = styled(Typography)({
  fontWeight: "900",
});
const StyledApiDescTypography = styled(Typography)({
  marginTop: "10px",
  padding: "5px 10px 5px 10px",
  background: "#262E32",
  color: "white",
  borderRadius: "3px",
  marginBottom: "30px",
});
const StyledDivider = styled(Divider)({
  marginTop: "5px",
  marginBottom: "5px",
});

interface IProps {
  title: string;
  apiDesc: string;
  demoNode: ReactNode;
}

const DemoCard = ({ title, apiDesc, demoNode }: IProps) => {
  return (
    <StyledCard>
      <StyledStack>
        <StyledTitleTypography variant="subtitle2">
          {title}
        </StyledTitleTypography>
        <StyledDivider />
        <StyledApiDescTypography variant="caption">
          {apiDesc}
        </StyledApiDescTypography>
        {demoNode}
      </StyledStack>
    </StyledCard>
  );
};

export default DemoCard;
