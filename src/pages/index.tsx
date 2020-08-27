import React from 'react';

import GlobalStyles from '../styles/global'

import Button from '../components/atoms/Button'

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <h1>Hello World!!!</h1>
      <Button label="Button" />
    </>
  );
};

export default Home;