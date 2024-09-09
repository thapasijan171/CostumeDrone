import styled from "styled-components"

export const ContainerScene = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(38, 160, 218);
  background: radial-gradient(
    circle,
    rgba(38, 160, 218, 1) 49%,
    rgba(49, 71, 85, 1) 100%
  );
`
export const LinkToPortfolio = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  padding: 0.5rem;
  transform: translateX(-50%);

  color: white;
  font-size: 1rem;
  font-family: sans-serif;

  a {
    margin-left: 0.5rem;
    text-decoration: none;
    color: white;
    font-size: 1rem;
    font-family: sans-serif;
    font-style: bold;
    font-weight: 700;
  }
`
