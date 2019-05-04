import React from "react"
import styled from "styled-components"
import SocialBar from "./socialBar"

const Copyright = styled.div`
  width: 100%;
  text-align:center;
  margin: 30px auto 50px auto;

  color: #555555;
  font-size: 16px;
  font-family: inherit;
  letter-spacing: 1px;
`

const Footer = styled.div`
  margin-top: 30px;
`

const year = new Date().getFullYear()

export default () => (
  <Footer>
    <SocialBar />
    <Copyright>
      {`© ${year} Tim Liang`}
    </Copyright>
  </Footer>
)
