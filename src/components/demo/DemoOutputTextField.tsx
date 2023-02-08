import { FormControl, Input, InputLabel } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const StyledFullTextField = styled(FormControl)({
  width: "100%",
});

interface IProps {
  label: string;
  value: string;
}

const DemoOutputTextField = ({ label, value }: IProps) => {
  return (
    <StyledFullTextField variant="standard">
      <InputLabel htmlFor="component-simple" shrink>
        {label}
      </InputLabel>
      <Input id="component-simple" value={value} disabled />
    </StyledFullTextField>
  );
};

export default DemoOutputTextField;
