import { Stack } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import "./App.css";
import { DemoCard } from "./components/demo";
import ApiMethod from "./constants/ApiMethod";

const StyledFullDiv = styled("div")({
  width: "100vw",
  height: "100vh",
  overflowY: "auto",
});

const StyledFullStack = styled(Stack)({
  width: "100%",
  marginTop: "20px",
  marginBottom: "20px",
});

function App() {
  return (
    <StyledFullDiv className="App">
      <StyledFullStack
        direction="column"
        spacing={2}
        justifyContent="flex-start"
        alignItems="center"
      >
        {ApiMethod.map((api) => (
          <DemoCard
            title={api.title}
            apiDesc={api.apiDesc}
            demoNode={<api.node />}
          />
        ))}
      </StyledFullStack>
    </StyledFullDiv>
  );
}

export default App;
