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

const year = new Date().getFullYear()

export default () => (
  <React.Fragment>
    <SocialBar />
    <Copyright>
      {`© ${year} Tim Liang`}
    </Copyright>
  </React.Fragment>
)
