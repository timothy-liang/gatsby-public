import React from "react"
import styled from "styled-components"
import {createGlobalStyle} from "styled-components"
import Navbar from "../components/navbar"

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

export default () => (
  <React.Fragment>
    <GlobalStyle />
    <Navbar />
  </React.Fragment>
)