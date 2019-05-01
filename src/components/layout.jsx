import React from "react"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"

import Footer from "./footer"
import NavBar from "./navBar"

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: Asap, sans-serif;
  }
`

export default ({ children, ...props }) => (
  <React.Fragment>
    <GlobalStyle />
    <NavBar focus={props.focus} />
    <Helmet>
      <title>Tim Liang</title>
    </Helmet>
    {children}
    <Footer />
  </React.Fragment>
)
