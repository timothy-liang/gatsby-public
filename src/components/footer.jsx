import React from "react"
import styled from "styled-components"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { MdMailOutline } from "react-icons/md"

const Copyright = styled.div`
  width: 100%;
  text-align:center;
  margin: 30px auto 50px auto;

  color: #555555;
  font-size: 16px;
  font-family: 'Asap', sans-serif;
  letter-spacing: 1px;
`

const SocialMedia = styled.div`
  margin-top: 30px;
  color: black;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`
const SocialMediaLink = styled.a`
  color: gray;

  :visited, focus, active {
    color: gray;
  }

  margin: 10px;
  font-size: 30px;

  @media (hover: hover) {
    :hover {
      color: black;
    }
  }
`

const year = new Date().getFullYear()

export default () => (
  <React.Fragment>
    <SocialMedia>
      <SocialMediaLink href="mailto:timothy.liang@vanderbilt.edu">
        <MdMailOutline />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.linkedin.com/in/timothy-liang-51980a143/">
        <FaLinkedinIn />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.instagram.com/possibly_tim/">
        <FaInstagram />
      </SocialMediaLink>
    </SocialMedia>
    <Copyright>
      {`© ${year} Tim Liang`}
    </Copyright>
  </React.Fragment>
)
