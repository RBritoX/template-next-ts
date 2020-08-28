---
name: 'organism'
description: 'Organism template'
message: 'Please enter the name of organism to be created'
root: './src/components/organisms'
output: '**/*'
ignore: []
---

# `{{ input | pascal }}/index.tsx`

```tsx
import React from 'react';

import * as S from './styles';

const {{ input | pascal }}: React.FC = (): JSX.Element => {
  return (
    <S.Container>
      <h1>{{ input | pascal }}</h1>
    </S.Container>
  );
};

export default {{ input | pascal }};

```

# `{{ input | pascal }}/styles.ts`

```ts
import styled from 'styled-components';

export const Container = styled.div``;

```

# `{{ input | pascal }}/{{ input | pascal }}.story.tsx`

```tsx
import React from 'react';
import { storiesOf } from '@storybook/react'

import {{ input | pascal }} from './index'

storiesOf('Atoms/{{ input | pascal }}', module).add('default', () => (
  <{{ input | pascal }} label='press'/>
));

```