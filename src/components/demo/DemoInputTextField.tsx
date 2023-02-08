import { FormControl, Input, InputLabel } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const StyledFullTextField = styled(FormControl)({
  width: "100%",
});

interface IProps {
  label: string;
  value: string;
  placeholder?: string;
  handleChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

const DemoInputTextField = ({
  label,
  value,
  placeholder,
  handleChange,
}: IProps) => {
  return (
    <StyledFullTextField variant="standard">
      <InputLabel htmlFor="component-simple" shrink>
        {label}
      </InputLabel>
      <Input
        id="component-simple"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </StyledFullTextField>
  );
};

export default DemoInputTextField;
