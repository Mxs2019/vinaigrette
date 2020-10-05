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

function App() {
  return (
    <Screen padding>
      <VStack>
        <Title>Tab Bar</Title>
        <TabBar>
          <Tab name="Buttons">
            <HStack>
              <VStack>
                <Button>Button</Button>
                <Button size="lg">Large Button</Button>
                <Button size="sm">Small Button</Button>
                <Button type="primary">Button Primary</Button>
                <Button type="link">Button Link</Button>
              </VStack>
              <VStack>
                <Button>Button</Button>
                <Button size="lg">Large Button</Button>
                <Button size="sm">Small Button</Button>
                <Button type="primary">Button Primary</Button>
                <Button type="link">Button Link</Button>
              </VStack>
            </HStack>
          </Tab>
          <Tab name="Links">Links </Tab>
          <Tab name="Accordians" />
        </TabBar>

        <Title>Deployment Options</Title>
        <Subheader>
          This experience doesn't appear to have a front-end. Choose an option
          below:
        </Subheader>
        <VStack border padding>
          <Header>Create with Yext Pages (Recommended)</Header>
          <Paragraph placeholderRows={5} />
          <HStack>
            <Spacer />
            <Button>Create Pages Site</Button>
            <Spacer />
          </HStack>
        </VStack>
        <VStack border padding>
          <Header>Build using Javascript SDK (Advanced)</Header>
          <Paragraph placeholderRows={5} />
          <HStack>
            <Spacer />
            <Button>Create Pages Site</Button>
            <Spacer />
          </HStack>
        </VStack>
        <Title>Account Resources</Title>

        <HStack border padding>
          <div>Left</div>
          <div>Left</div>
          <div>Left</div>
          <Spacer />
          <div>Left</div>
          <div>Riight</div>
        </HStack>
        <HStack border padding>
          <div>Left</div>
          <div>Left</div>
          <div>Left</div>
          <Spacer />
          <div>Left</div>
          <div>Riight</div>
        </HStack>
        <Grid cols={3}>
          {data.integrationOptions.map((i) => (
            <VStack border shadow padding hover>
              <HStack alignment="center">
                <Logo size="md">{i.logo}</Logo>
                <VStack>
                  <Header>{i.name}</Header>
                  <Paragraph />
                </VStack>
              </HStack>
            </VStack>
          ))}
        </Grid>
      </VStack>
    </Screen>
  );
}

export default App;
