import React from "react"
import styled, { createGlobalStyle } from "styled-components"

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
  max-width: 1200px;
  margin: auto;
`

export default () => (
  <React.Fragment>
    <GlobalStyle />
    <MainPage>
      <Navbar focus="About" />
      <TODO>
        <h1>TODO:</h1>
        <ul>
          <li>Fix mobile experience</li>
          <li>Fix assets not loading</li>
          <li>Write/layout about page</li>
          <li>Write/layout project pages</li>
          <li>Add more micro-interactions</li>
          <li>Finalize fonts</li>
          <li>Finalize spacing</li>
          <li>Finalize logos</li>
          <li>Clean up code</li>
          <li>Explore GraphQL</li>
        </ul>
      </TODO>
      <Footer />
    </MainPage>
  </React.Fragment>
)
