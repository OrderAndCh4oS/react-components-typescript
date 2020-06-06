import React from 'react'

import { Column, ContainerFullWidth, Row, styles, Text, Title } from '@orderandchaos/react-components-typescript'

const App = () => {
  return (
    <ContainerFullWidth className={styles.bc_lighterGrey}>
      <Row>
        <Column className={styles.col6}>
          <Title tag={'h1'}>Hello World</Title>
          <Text>Blah blah blah</Text>
        </Column>
        <Column className={styles.col6}>
          <Title tag={'h1'}>Second Column</Title>
          <Text>Blah blah blah</Text>
        </Column>
      </Row>
    </ContainerFullWidth>
  )
}

export default App
