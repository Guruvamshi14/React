
// There Are ways to create a React 1> Parcel 2> Vite 3> Webpack

import {user} from './data.js';
import React from 'react';
import createRoot from 'react-dom/client';

const root = createRoot(document.getElementById('#root'));
const h2 = React.createElement('h2', null, "Hello World");

console.log(h2);

root.render(h2);

// HRM => Hot Module Replacement 