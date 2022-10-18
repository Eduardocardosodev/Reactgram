import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #121212;
    color: #fafafa;
  }
  a {
    color: #fafafa;
    text-decoration: none;
  }
  .active {
    font-weight: bold;
  }
  ul {
    list-style: none;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  label span {
    font-weight: bold;
    margin-bottom: 0.5em;
    color: #aaa;
    font-size: 0.7em;
  }
  input {
    background-color: #3b3b3b;
    color: #aaa;
    border: 1px solid #555;
    border-radius: 2px;
    padding: 10px 8px;
    outline: none;
    margin-bottom: 0.6em;
  }
  input::placeholder {
    color: #aaa;
  }
  .btn,
  button,
  input[type="submit"] {
    background-color: #0094f6;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 8px;
    font-weight: bold;
    cursor: pointer;
    opacity: 0.8;
    font-size: 1em;
  }
  input[type="submit"] {
    margin-top: 1em;
  }
  input:disabled {
    cursor: not-allowed;
    background-color: #000;
  }
  button:hover,
  input[type="submit"]:hover {
    opacity: 1;
  }
  .cancel-btn {
    background-color: #ccc;
  }
  .hide {
    display: none;
  }
`