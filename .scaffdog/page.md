---
name: 'page'
description: 'Page template'
message: 'Please enter the name of page to be created'
root: './src/pages'
output: '**/*'
ignore: []
---

# `{{ input | pascal }}.tsx`

```tsx
import React from 'react';

const {{ input | pascal }}: React.FC = (): JSX.Element => (
    <h1>{{ input | pascal }}</h1>
  );

export default {{ input | pascal }};

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