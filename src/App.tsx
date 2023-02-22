import { DemoCard, NavSidebar } from "@/components/demo";
import ApiMethod from "@/constants/ApiMethod";
import Provider from "@/providers/Providers";
import { Height } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { styled } from "@mui/system";
import init from "@yutin1987/yuumi_rs";
import "./App.css";

const StyledFullStack = styled(Stack)({
  width: "100vw",
  height: "100vh",
});

const StyledLeftDiv = styled("div")({
  width: "200px",
  height: "100%",
  overflowY: "auto",
  background: "#F5F5F5",
});

const StyledRightDiv = styled("div")({
  flex: 1,
  height: "100%",
  overflowY: "auto",
});

const StyledFullRightStack = styled(Stack)({
  padding: "20px",
});

function App() {
  init().then();

  return (
    <Provider>
      <StyledFullStack
        className="App"
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <StyledLeftDiv>
          <NavSidebar items={ApiMethod} />
        </StyledLeftDiv>
        <StyledRightDiv>
          <StyledFullRightStack
            direction="column"
            spacing={2}
            justifyContent="flex-start"
            alignItems="center"
          >
            {ApiMethod.map((methodSection) =>
              methodSection.methods.map((method) => (
                <DemoCard
                  id={method.id}
                  title={method.title}
                  apiDesc={method.apiDesc}
                  demoNode={method.node}
                />
              ))
            )}
          </StyledFullRightStack>
        </StyledRightDiv>
      </StyledFullStack>
    </Provider>
  );
}

export default App;
