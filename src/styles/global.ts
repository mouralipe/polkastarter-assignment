import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;

    --gray-50: #F5F8FA;
    --gray-100: #8D9FBD;
    --gray-200: #6F819F;
    --gray-700: #1B2332;

    --blue-200: #6B81E7;
    --blue-400: #2D3F8A;
    --blue-800: #17213F;
    --blue-900: #222D4E;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: var(--gray-700);
    color: var(--white);
  }

  body, input, button {
    font: 0.875rem Inter, sans-serif;
  }

  button {
    cursor: pointer;
  }
`
