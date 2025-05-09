import { createRoot } from "react-dom/client";
import React from "react"
import App from './App'

console.log(App);

const root = createRoot(document.querySelector('#root'));

root.render(<App/>)