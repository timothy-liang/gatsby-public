import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "../styles/fonts.css"
import Hamburger from "./hamburger"

const NavBar = styled.div`
  width: 100vw;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-color: white;
  z-index: 3;

  @media (min-width: 699px) {
    margin-bottom: 2%;
  }

  @media (max-width: 699px) {
    margin-bottom: -2vw;
  }
`

const NavLink = styled(({ focused, ...props }) => <Link {...props} />)`
  background-color: White;

  display: inline-box;

  border: none;
  margin: 20px;
  padding: 2px 0px;

  font-family: inherit;
  font-size: 23px;
  letter-spacing: 1px;
  text-decoration: none;
  color: ${props => (props.focused ? "black" : "gray")};

  transition: color 0.2s ease;

  :hover {
    cursor: pointer;
    color: black;
  }

  @media (max-width: 699px) {
    display: none;
  }
`

const NavLogo = styled(props => <Link {...props} />)`
  margin: 20px;
  display: inline-box;

  font-family: inherit;
  font-size: 23px;
  letter-spacing: 1px;
  text-decoration: none;
  color: black;
`

export default props => (
  <NavBar>
    <div>
      <NavLogo to="/">TIM LIANG</NavLogo>
    </div>
    <div>
      <NavLink to="/" focused={props.focus === "Work"}>Work</NavLink>
      <NavLink to="/under_construction/" focused={props.focus === "About"}>About</NavLink>
      <Hamburger />
    </div>
  </NavBar>
)
