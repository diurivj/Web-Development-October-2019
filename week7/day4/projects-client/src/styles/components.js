import styled from "styled-components";

//Navbar
export const StyledNavbar = styled.nav`
  width: 100vw;
  height: 80px;
  background-color: #595252;
  color: #f2f2f2;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
  top: 0;
  h1 {
    margin: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    width: 40%;
    margin: 0;
    align-items: center;
  }
  li {
    transition: 0.3s all ease;
  }
  li:hover {
    border: solid #f2f2f2;
    border-width: 0 0 2px 0;
  }
  a {
    color: #f2f2f2;
    text-decoration: none;
  }
  a:visited {
    color: #f2f2f2;
  }
`;

export const Carousel = styled.section`
  height: 45vh;
  width: 100vw;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-x: scroll;
  padding: 0 2rem;
  box-sizing: border-box;
  article {
    width: 30%;
    min-width: 300px;
    margin-right: 30px;
    background-color: #f2f2f2;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 10px;
  }
`;
