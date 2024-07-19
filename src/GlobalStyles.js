import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #e5f6f2;
  }

  .main-container {
    max-width: 1224px;
    margin: 0 auto;
    padding: 20px;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Arial', sans-serif;
    color: #333333;
  }

  input, button, select, textarea {
    font-family: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: #00897b;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
  }

  button:hover {
    background-color: #00796b;
  }

  .dashboard {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

export default GlobalStyle;
