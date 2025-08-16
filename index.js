import app from './src/my-application/index.js'

import pkg from 'lodash';

const { random } = pkg;

app()

console.log('Absolutely random number', random(0, 55));
