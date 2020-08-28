import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from '~/components'

storiesOf('Atoms/Button', module).add('default', () => (
  <Button label='press'/>
));
