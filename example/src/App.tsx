import React from "react";

import { Column, ContainerFullWidth, Row, styles, Text, Title, Button, RadioButton } from "@orderandchaos/react-components-typescript";

const App = () => {
  return (
    <ContainerFullWidth className={styles.bc_lighterGrey}>
      <Row>
        <Column columnClass={styles.col6}>
          <Title tag={"h1"}>Hello World</Title>
          <Text>Blah blah blah</Text>
        </Column>
        <Column columnClass={styles.col6}>
          <Title tag={"h1"}>Second Column</Title>
          <Text>Blah blah blah</Text>
          <Button>Click Me!</Button>
          <div>
            <RadioButton checked={false}>One</RadioButton>
            <RadioButton checked={true}>Two</RadioButton>
            <RadioButton checked={false}>Three</RadioButton>
          </div>
        </Column>
      </Row>
    </ContainerFullWidth>
  );
};

export default App;
