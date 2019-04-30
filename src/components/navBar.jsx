import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "../styles/fonts.css"
import Hamburger from "./hamburger"

const NavBar = styled.div`
  padding: 0px 20px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-color: white;
  z-index: 3;

  @media (min-width: 699px) {
    margin-bottom: 6%;
  }
`

const NavLink = styled(({ focused, ...props }) => <Link {...props} />)`
  background-color: White;

  display: inline-box;

  border: none;
  margin: 20px;
  padding: 2px 0px;

  font-family: Asap, sans-serif;
  font-size: 23px;
  letter-spacing: 1px;
  text-decoration: none;
  color: ${props => (props.focused ? "black" : "gray")};

  :hover {
    cursor: pointer;
  }

  @media (max-width: 699px) {
    display: none;
  }
`

const NavLogo = styled.div`
  margin: 20px;

  font-family: Asap, sans-serif;
  font-size: 23px;
  letter-spacing: 1px;
`

export default props => (
  <NavBar>
    <div>
      <NavLogo>TIM LIANG</NavLogo>
    </div>
    <div>
      <NavLink to="/" focused={props.focus === "Work"}>Work</NavLink>
      <NavLink to="/about/" focused={props.focus === "About"}>About</NavLink>
      <Hamburger />
    </div>
  </NavBar>
)