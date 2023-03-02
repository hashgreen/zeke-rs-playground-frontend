import { About } from "@/components/about";
import { WalletList } from "@/components/wallet";
import { IApiMethodSectionProps } from "@/constants/ApiMethod";
import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const StyledContent = styled(Stack)({
  padding: "20px",
});

const StyledSection = styled(Stack)({});
const StyledSectionContent = styled(Stack)({
  paddingLeft: "5px",
});

const StyledTitleTypography = styled(Typography)({
  color: "black",
});

const StyledLink = styled("a")({
  textDecoration: "none",
  "&:visited": {
    color: "inherit",
  },
});

const StyledMethodTypography = styled(Typography)({
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
      <StyledMethodTypography variant="caption">{title}</StyledMethodTypography>
    </StyledLink>
  );
};

const NavSidebarSection = ({ title, methods }: IApiMethodSectionProps) => {
  return (
    <StyledSection spacing={1}>
      <StyledTitleTypography>{title}</StyledTitleTypography>
      <StyledSectionContent>
        {methods.map((method) => (
          <NavSidebarItem key={method.id} id={method.id} title={method.title} />
        ))}
      </StyledSectionContent>
    </StyledSection>
  );
};

interface IProps {
  items: IApiMethodSectionProps[];
}

const NavSidebar = ({ items }: IProps) => {
  return (
    <div>
      <About />
      <StyledContent>
        <WalletList />
        {items.map((item) => (
          <NavSidebarSection
            key={item.id}
            id={item.id}
            title={item.title}
            methods={item.methods}
          />
        ))}
      </StyledContent>
    </div>
  );
};

export default NavSidebar;
