import React from "react";
import Button from "./Components/Button";
import Container from "./Components/Container";
import List from "./Components/VStack";
import Grid from "./Components/Grid";
import Dividor from "./Components/Dividor";
import TabBar, { Tab } from "./Components/TabBar";
import Screen from "./Components/Screen";
import VStack from "./Components/VStack";
import HStack from "./Components/HStack";
import Spacer from "./Components/Spacer";
import { filledArray } from "./generators";
import { data } from "./data";
import Logo from "./Components/Logo";
import Paragraph from "./Components/Paragraph";
import { Title, Subtitle, Subheader, Header } from "./Components/Typography";
import Input from "./Components/Input";

function App() {
  const items = filledArray(8, (index) => (
    <Container hover padding shadow border textCenter>
      Item {index + 1}
    </Container>
  ));
  return (
    <Screen padding>
      <VStack>
        <Title>Vinaigrette</Title>
        <Paragraph>
          Vinaigrette is a react library that is purpose built around
          Wireframing. We believe that the often it's necessary for wireframes
          to use real data and real code is the best way to do that. Vinaigrette
          makes it easy for developers who know React to easily wireframe
          potential solutions.
        </Paragraph>
        <TabBar>
          <Tab name="Forms">
            <VStack padding>
              <Header>Input</Header>
              <Input label="Form Label" placeholder="Form Placeholder" />
              <Header>Select</Header>
              <Input label="Form Label" placeholder="Form Placeholder" />
              <Header>Checkbox</Header>
              <Input label="Form Label" placeholder="Form Placeholder" />
            </VStack>
          </Tab>
          <Tab name="Layout">
            <VStack padding>
              <Header>Container</Header>
              <Container border padding>
                This is a container
              </Container>
              <Header>Dividor</Header>
              <Paragraph>Here are a three dividors</Paragraph>
              <Dividor />
              <Dividor />
              <Dividor />

              <Header>Grid</Header>
              <Grid>{items}</Grid>
              <Header>HStack</Header>
              <HStack>{items}</HStack>
              <Header>VStack</Header>
              <VStack>{items}</VStack>
            </VStack>
          </Tab>
          <Tab name="Buttons">
            <VStack padding>
              <HStack alignment="top">
                <Button>Regular Button</Button>
                <Button type="primary">Primary Button</Button>
                <Button type="link">Link Button</Button>
              </HStack>
              <HStack>
                <Button size="sm">Small Button</Button>
                <Button size="sm" type="primary">
                  Small Primary Button
                </Button>
                <Button size="sm" type="link">
                  Small Link Button
                </Button>
              </HStack>
              <HStack>
                <Button size="lg">Large Button</Button>
                <Button size="lg" type="primary">
                  Large Primary Button
                </Button>
                <Button size="lg" type="link">
                  Large Link Button
                </Button>
              </HStack>
            </VStack>
          </Tab>
          <Tab name="Typography">
            <VStack padding>
              <Title>Title</Title>
              <Subtitle>Subtitle</Subtitle>
              <Header>Header</Header>
              <Subheader>Subheader</Subheader>
              <Paragraph />
            </VStack>
          </Tab>
          <Tab name="Navigation">
            <VStack padding>
              <Header>TabBar</Header>
              <TabBar background padding>
                {filledArray(10, (index) => (
                  <Tab name={`Tab ${index + 1}`}>Tab {index + 1} Contentes</Tab>
                ))}
              </TabBar>
            </VStack>
          </Tab>
        </TabBar>
      </VStack>
    </Screen>
  );
}

export default App;
