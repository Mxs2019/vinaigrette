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
import Header from "./Components/Header";
import Logo from "./Components/Logo";
import Paragraph from "./Components/Paragraph";

function App() {
  return (
    <Screen padding>
      <VStack>
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
            <VStack border shadow padding>
              <HStack>
                <Header>{i.name}</Header>
                <Spacer />
                <Logo size="sm">{i.logo}</Logo>
              </HStack>
              <Paragraph></Paragraph>
            </VStack>
          ))}
        </Grid>
        <TabBar>
          <Tab name="Buttons">
            <Grid>
              <Button>Button</Button>
              <Button size="lg">Large Button</Button>
              <Button size="sm">Small Button</Button>
              <Button type="primary">Button Primary</Button>
              <Button type="link">Button Link</Button>
            </Grid>
            <Dividor />
          </Tab>
          <Tab name="Links" />
        </TabBar>
      </VStack>
    </Screen>
  );
}

export default App;
