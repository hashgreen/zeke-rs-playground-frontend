import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const StyledContent = styled(Stack)({
  background: "white",
  padding: "10px",
  borderRadius: "5px",
});
const StyledLink = styled("a")({
  textDecoration: "none",
  "&:visited": {
    color: "inherit",
  },
});
const StyledTypography = styled(Typography)({
  color: "#0d70c1",
  "&:hover": {
    color: "#15d38d",
  },
});

interface IItemProps {
  id: string;
  title: string;
}

const NavSidebarItem = ({ id, title }: IItemProps) => {
  return (
    <StyledLink href={`#${id}`}>
      <StyledTypography variant="caption">{title}</StyledTypography>
    </StyledLink>
  );
};

interface IProps {
  items: IItemProps[];
}

const NavSidebar = ({ items }: IProps) => {
  return (
    <StyledContent>
      {items.map((item) => (
        <NavSidebarItem id={item.id} title={item.title} />
      ))}
    </StyledContent>
  );
};

export default NavSidebar;
