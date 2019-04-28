import React from "react"
import styled from "styled-components"
import {createGlobalStyle} from "styled-components"
import Navbar from "../components/navBar"
import Footer from "../components/footer"

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

const MainPage = styled.div`
  max-width: 1400px;
  margin: auto;
`

export default () => (
  <React.Fragment>
    <GlobalStyle />
    <MainPage>
      <Navbar focus="About"/>
      <p>Filler Text</p>
      <Footer />
    </MainPage>
  </React.Fragment>
)