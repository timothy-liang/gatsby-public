import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
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

// const NavButtonWrapper = styled.div`
//   background-color: White;

//   border: none;
//   border-bottom 1px solid Black;
//   margin: 20px;
//   padding: 2px 0px;

//   font-family: Lato;
//   font-size: 20px;

//   &:hover {
//     cursor: pointer;
//   }
// `

// const NavButton = (props) => (
//   <NavButtonWrapper>
//     <Link to={props.to}>{props.text}</Link>
//   </NavButtonWrapper>
// )

const NavLink = styled(props =>
  <Link {...props} />
)`
  background-color: White;

  display: inline-box;

  border: none;
  border-bottom 1px solid Black;
  margin: 20px;
  padding: 2px 0px;

  font-family: Lato;
  font-size: 20px;
  text-decoration: none;

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
      <NavLogo>TIM LIANG</NavLogo>
    </NavCluster>

    <NavCluster>
      <NavLink to="/">Work</NavLink>
      <NavLink to="/">About</NavLink>
      <NavLink to="/">Résumé</NavLink>
    </NavCluster>

  </NavBar>
)