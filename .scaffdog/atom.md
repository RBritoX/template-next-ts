---
name: 'atom'
description: 'Atom template'
message: 'Please enter the name of atom to be created'
root: './src/components/atoms'
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