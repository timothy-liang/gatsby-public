import React from "react"
import styled from "styled-components"
import "../styles/fonts.css"

const NavBar = styled.div`
  background-color: AliceBlue;

  margin: 0;
  padding: 0px 20px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`

const NavCluster = styled.div`
  background-color: Azure;

  padding: 20px;
`

const NavButton = styled.button`
  background-color: White;

  border: none;
  border-bottom 1px solid Black;
  margin: 20px;
  padding: 2px 0px;

  font-family: Lato;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`

const NavLogo = styled.div`
  margin: 20px;

  font-family: Lato;
  font-size: 30px;
`

export default () => (
  <NavBar>

    {/* <NavCluster>
      <NavButton>Work</NavButton>
    </NavCluster> */}

    <NavCluster>
      <NavLogo>Tim Liang</NavLogo>
    </NavCluster>

    <NavCluster>
      <NavButton>Work</NavButton>
      <NavButton>About</NavButton>
      <NavButton>Resume</NavButton>
    </NavCluster>

  </NavBar>
)