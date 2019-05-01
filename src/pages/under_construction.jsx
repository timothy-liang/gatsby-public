import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Link } from "gatsby"

import Navbar from "../components/navBar"
import Footer from "../components/footer"
import "../styles/fonts.css"

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

const MainPage = styled.div`
  // max-width: 1400px;
  margin: auto;
`

const TODO = styled.div`
  width: 195px;
  margin: 20vh auto 10vh auto;
  font-family: Asap, sans-serif;
  font-size: 20px;
  letter-spacing: 1px;
`

export default () => (
  <React.Fragment>
    <GlobalStyle />
    <MainPage>
      <TODO>
        Under construction.
        <br />
        <Link style={{ color: "gray" }} to="/">Return.</Link>
      </TODO>
      <Footer />
    </MainPage>
  </React.Fragment>
)
