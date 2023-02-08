import { Height } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { styled } from "@mui/system";
import "./App.css";
import { DemoCard, NavSidebar } from "./components/demo";
import ApiMethod from "./constants/ApiMethod";

const StyledFullStack = styled(Stack)({
  width: "100vw",
  height: "100vh",
});

const StyledLeftDiv = styled("div")({
  flex: 1,
  height: "100%",
  overflowY: "auto",
});

const StyledFullLeftStack = styled(Stack)({
  padding: "20px",
});

const StyledRightDiv = styled("div")({
  flex: 3,
  height: "100%",
  overflowY: "auto",
});

const StyledFullRightStack = styled(Stack)({
  padding: "20px",
});

function App() {
  return (
    <StyledFullStack
      className="App"
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      <StyledLeftDiv>
        <StyledFullLeftStack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-end"
        >
          <NavSidebar items={ApiMethod} />
        </StyledFullLeftStack>
      </StyledLeftDiv>
      <StyledRightDiv>
        <StyledFullRightStack
          direction="column"
          spacing={2}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {ApiMethod.map((method) => (
            <DemoCard
              id={method.id}
              title={method.title}
              apiDesc={method.apiDesc}
              demoNode={method.node}
            />
          ))}
        </StyledFullRightStack>
      </StyledRightDiv>
    </StyledFullStack>
  );
}

export default App;
