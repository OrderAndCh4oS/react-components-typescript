# @orderandchaos/react-components-typescript

> react components typescript

[![NPM](https://img.shields.io/npm/v/@orderandchaos/react-components-typescript.svg)](https://www.npmjs.com/package/@orderandchaos/react-components-typescript) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @orderandchaos/react-components-typescript
```

## Usage

```tsx
import React from 'react';
import {Column, ContainerFullWidth, Row, Title, Text} from "@orderandchaos/react-components-typescript";
import styles from "@orderandchaos/react-styles/dist/styles.module.css";

const App = () =>
    <ContainerFullWidth className={styles.bc_lighterGrey}>
        <Row>
            <Column columnClass={styles.col6}>
                <Title tag={'h1'}>Hello World</Title>
                <Text>Blah blah blah</Text>
            </Column>
            <Column columnClass={styles.col6}>
                <Title tag={'h1'}>Second Column</Title>
                <Text>Blah blah blah</Text>
            </Column>
        </Row>
    </ContainerFullWidth>
;

export default App;
```

## License

MIT © [sarcoma](https://github.com/sarcoma)
