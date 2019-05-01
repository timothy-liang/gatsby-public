import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import Navbar from "../components/navBar"
import ContentGrid from "../components/contentGrid"
import Footer from "../components/footer"

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

const contentData = [
  {
    title: "Google",
    subtitle: "Intern",
    color: "#DFE6E9",
    image: "ads_logo.svg",
    imageSize: "38%",
    to: "/under_construction/",
  },
  {
    title: "Facebook",
    subtitle: "Intern",
    color: "#E56969",
    image: "ig_logo_2.svg",
    imageSize: "43%",
    to: "/under_construction/",
  },
  {
    title: "Google",
    subtitle: "Intern",
    color: "#463F3A",
    image: "chrome_logo_2.svg",
    imageSize: "32%",
    to: "/under_construction/",
  },
  {
    title: "Vanderbilt",
    subtitle: "Researcher & TA",
    color: "#BCB8B1",
    image: "vandy_logo.png",
    imageSize: "35%",
    to: "/under_construction",
  },
]

// FFE5D9 - peach    //BB8588 - unsaturated red
// F0B67F - orangish //ffdf9e - ig light yellow
// E56969 - ig red

export default () => (
  <React.Fragment>
    <GlobalStyle />
    <MainPage>
      <Navbar focus="Work" />
      <ContentGrid contentData={contentData} />
      <Footer />
    </MainPage>
  </React.Fragment>
)
