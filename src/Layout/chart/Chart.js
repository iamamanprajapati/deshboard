import React from 'react';
import { render } from 'react-dom';
import LineDemo from './LineDemo';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const Chart = () => (
  <div style={styles}>
    <LineDemo/>
  </div>
);

export default Chart