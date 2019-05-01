import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "../styles/fonts.css"

const TODO = styled.div`
  width: 195px;
  margin: 20vh auto 10vh auto;
  font-family: Asap, sans-serif;
  font-size: 20px;
  letter-spacing: 1px;
`

export default () => (
  <Layout focus="About">
    <TODO>
        Under construction.
      <br />
      <Link style={{ color: "gray" }} to="/">Return.</Link>
    </TODO>
  </Layout>
)
