import React from "react";
import Button from "./Components/Buttons/Button";
import Container from "./Components/Layout/Container";
import List from "./Components/Layout/VStack";
import Grid from "./Components/Layout/Grid";
import Dividor from "./Components/Layout/Dividor";
import TabBar, { Tab } from "./Components/Navigation/TabBar";
import Screen from "./Components/Layout/Screen";
import VStack from "./Components/Layout/VStack";
import HStack from "./Components/Layout/HStack";
import Spacer from "./Components/Layout/Spacer";
import { filledArray } from "./generators";
import { data } from "./data";
import Logo from "./Components/Other/Logo";
import Paragraph from "./Components/Typography/Paragraph";
import {
  Title,
  Subtitle,
  Subheader,
  Header,
} from "./Components/Typography/Typography";
import Input from "./Components/Forms/Input";
import TextArea from "./Components/Forms/TextArea";
import Checkbox from "./Components/Forms/Checkbox";
import Dropdown from "./Components/Buttons/Dropdown";
import Icon from "./Components/Other/Icon";

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
          <Tab name="Test">
            <VStack noGap>
              <Container dark padding textCenter>
                Introducing Yext Hitchhikers A self-serve training platform and
                community of power users
              </Container>
              <HStack padding>
                <Icon iconType="chevron-left" />
                <Input leftIcon="search" placeholder="Search for anything" />
                <Button type="link">Sign In</Button>
                <Button type="link">Contact Us</Button>
                <Button type="primary">Get Started</Button>
              </HStack>
              <Dividor />
              <VStack padding="2xl" textCenter>
                <Title>
                  Add the world's best search experience to your website— for
                  free and in minutes.
                </Title>
                <Button type="primary">Try Answers for Free</Button>
              </VStack>
              <VStack alignment="center" textCenter dark padding="xl">
                <Header>
                  Join the 1000s of businesses worldwide who transformed their
                  websites with the Yext Official Answers Engine.
                </Header>
                <Subheader>
                  SEARCH BELOW TO GET THE OFFICIAL ANSWERS DIRECT FROM THE BRAND
                </Subheader>
                <Grid padding cols={3}>
                  <VStack background="white" padding hover>
                    <Logo>farmers.com</Logo>
                  </VStack>
                  <VStack background="white" padding hover>
                    <Logo>verizon.com</Logo>
                  </VStack>
                  <VStack background="white" padding hover>
                    <Logo>iha.com</Logo>
                  </VStack>
                  <VStack background="white" padding hover>
                    <Logo>campbellssoup.com</Logo>
                  </VStack>
                  <VStack background="white" padding hover>
                    <Logo>verizon.com</Logo>
                  </VStack>
                  <VStack background="white" padding hover>
                    <Logo>iha.com</Logo>
                  </VStack>
                </Grid>
              </VStack>
            </VStack>
          </Tab>
          <Tab name="Forms">
            <HStack alignment="top">
              <VStack padding>
                <Header>Input</Header>
                <Input label="Form Label" placeholder="Form Placeholder" />
                <Header>Text Area</Header>
                <TextArea label="Form Label" placeholder="Form Placeholder" />
                <Header>Search Bar</Header>
                <Input placeholder="Search..." leftIcon="search" />
              </VStack>
              <VStack padding>
                <Header>Select</Header>
                <Input label="Form Label" placeholder="Form Placeholder" />
                <Header>Checkbox</Header>
                <Checkbox label="Form Label" />
              </VStack>
            </HStack>
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
          <Tab name="Controls">
            <VStack padding>
              <Header>Buttons</Header>
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
              <Header>Dropdown</Header>
              <Dropdown />
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
              <Header>Navigation Bar</Header>
              <HStack>
                <HStack>
                  <div>Left Item 1</div>
                  <div>Left Item 2</div>
                </HStack>
                <Spacer />
                <HStack>
                  <div>Right Item 1</div>
                  <div>Right Item 2</div>
                </HStack>
              </HStack>
            </VStack>
          </Tab>
          <Tab name="Other">
            <VStack>
              <Header>Logo</Header>
              <Paragraph>
                Use the Logo Component to quickly add the logo of a company.
                This uses clearbit api to populate the logos.
              </Paragraph>
              <HStack>
                <Logo padding shadow border>
                  google.com
                </Logo>
                <Logo padding shadow border>
                  netflix.com
                </Logo>
                <Logo padding shadow border>
                  apple.com
                </Logo>
                <Logo padding shadow border>
                  microsoft.com
                </Logo>
              </HStack>
            </VStack>
          </Tab>
        </TabBar>
      </VStack>
    </Screen>
  );
}

export default App;
