import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0 2rem;
}

body,
html,
#root {
  height: 100%;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

a{
  color: red;
}

`;

export const Button = styled.button`
  background-color: ${props =>
    props.yolo === "info"
      ? "#31dafc"
      : props.yolo === "success"
      ? "green"
      : "crimson"};
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    opacity: 0.8;
  }
`;

export const Card = styled.article`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: whitesmoke;
  /* background-image: url(${props => props.img});
  background-position: center;
  background-size: cover; */
  padding: 1rem 2rem;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 1px 2px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  h2 {
    color: #232323;
  }
  div {
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    display: flex;
    height: 10%;
    width: calc(100% - 4rem);
    justify-content: space-around;
  }
  & a {
    text-decoration: none;
    font-weight: bold;
    color: rebeccapurple;
  }
  & a:hover {
    transform: scale(1.5);
  }
  
  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  
  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const StyledForm = styled.form`
  & label {
    display: block;
    color: goldenrod;
  }
`;

export default GlobalStyles;
