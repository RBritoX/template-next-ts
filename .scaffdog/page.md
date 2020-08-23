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