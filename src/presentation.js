// Import React
import React from 'react';
import styled from 'styled-components';

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Image
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
// Import preloader
import preloader from 'spectacle/lib/utils/preloader';
// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
    sixth: '#000'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const CustomHeading = styled.h1`
font-size: ${(props) => !props.size? '1.5em' : props.size};
color: theme.sixth;
`;

const images = {
  react: require("./assets/react-logo.png"),
  ux1: require("./assets/ux1.png"),
  ux2: require("./assets/ux2.png"),
  ux3: require("./assets/ux3.png"),
  ux4: require("./assets/ux4.png")
}

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress={'bar'}
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            UX Flow
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            and why we need this any ways...
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <CustomHeading>
            The Problem
          </CustomHeading>
          <List>
            <ListItem>No one is doing UX really</ListItem>
            <ListItem>Developers starting without design</ListItem>
            <ListItem>The quality of the design</ListItem>
            <ListItem>The time to deliver fixes</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
            <CustomHeading>
              Ux Flow Now
            </CustomHeading>
          <Appear order={2}>
            <Image src={images.ux1} height={590} />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="sixth">
          <CustomHeading>
            ECM 2.0 team vs Other team
          </CustomHeading>
          <Appear order={2}>
            <Image src={images.ux2} height={590} />
          </Appear>
        </Slide>
        <Slide transition={[
          'fade',
          (transitioning, forward) => {
            const angle = forward ? -180 : 180;
            return {
              transform: `
          translate3d(0%, ${transitioning ? 100 : 0}%, 0)
          rotate(${transitioning ? angle : 0}deg)
        `,
              backgroundColor: transitioning ? theme.primary : theme.primary
            };
          }
        ]} bgColor="primary" textColor="sixth">
          <CustomHeading>
            Ux Flow With UX DEV
          </CustomHeading>
          <Image src={images.ux3} height={590} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="sixth">
            <CustomHeading>
              is there a <Text textColor="tertiary" bold>better</Text> way? 🤔
            </CustomHeading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="sixth">
            <CustomHeading>
              Ux Flow Proposition
            </CustomHeading>
          <Appear order={2}>
            <Image src={images.ux4} height={590} />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <CustomHeading size={'2em'}>
            Thank You!
          </CustomHeading>
        </Slide>
      </Deck>
    );
  }
}
