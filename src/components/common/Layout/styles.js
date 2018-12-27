import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Helvetica, sans-serif;
  }

  a {
    text-decoration: none;
  }

  input, select, textarea, button {
    &:focus {
      outline: none;
    }
  }
`
