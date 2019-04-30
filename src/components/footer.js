import React from "react"
import styled from "styled-components"

const Footer = styled.div`
  width: 100%;
  text-align:center;
  margin: 100px auto 100px auto;

  color: #555555;
  font-size: 16px;
  font-family: 'Asap', sans-serif;
  letter-spacing: 1px;
`

const year = new Date().getFullYear()

export default () => (
  <Footer>© {year} Tim Liang</Footer>
)