import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { styled } from "@mui/system";
import React from "react";

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

interface IProps {
  handleClick: () => void;
}

const DemoArrowButton = ({ handleClick }: IProps) => {
  return (
    <StyledButton onClick={handleClick}>
      <ArrowDownwardIcon />
    </StyledButton>
  );
};

export default DemoArrowButton;
