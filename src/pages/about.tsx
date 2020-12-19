import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Gas Tarifrechner" description="Gas Vergleich mit dem Tarifrechner" />}>
    <Content>
      <p>Ökostrompreise und Gas vergleichen</p>
    </Content>
  </Main>
);

export default About;
