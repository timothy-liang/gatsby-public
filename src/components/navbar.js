import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "../styles/fonts.css"
import Hamburger from "../components/hamburger"

const NavBar = styled.div`
  // background-color: AliceBlue;

  margin-bottom: 50px;
  padding: 0px 20px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`

const NavCluster = styled.div`
  // background-color: Azure;
`

const NavLink = styled(({focused, ...props}) =>
  <Link {...props} />
)`
  background-color: White;

  display: inline-box;

  border: none;
  // border-bottom 1px solid Black;
  margin: 20px;
  padding: 2px 0px;

  font-family: Lato;
  font-size: 23px;
  text-decoration: none;
  color: ${props => props.focused ? "black" : "gray" };

  :hover {
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`

const NavLogo = styled.div`
  margin: 20px;

  font-family: Lato;
  font-size: 23px;
`

export default props => (
  <NavBar>

    {/* <NavCluster>
      <NavButton>Work</NavButton>
    </NavCluster> */}

    <NavCluster>
      <NavLogo>TIM LIANG</NavLogo>
    </NavCluster>

    <NavCluster>
      <NavLink to="/" focused={props.focus === "Work"}>Work</NavLink>
      <NavLink to="/about/" focused={props.focus === "About"}>About</NavLink>
      {/* <NavLink to="/">Résumé</NavLink> */}
      <Hamburger active={true}/>
    </NavCluster>

  </NavBar>
)