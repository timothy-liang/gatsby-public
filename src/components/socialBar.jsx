import React from "react"
import styled from "styled-components"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { MdMailOutline } from "react-icons/md"

const SocialMediaBar = styled.div`
  color: black;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`
const SocialMediaLink = styled.a`
  color: gray;

  :visited {
    color: gray;
  }

  margin: 10px;
  font-size: 30px;

  transition: color 0.2s ease;

  @media (hover: hover) {
    :hover {
      color: black;
    }
  }
`

export default () => (
  <SocialMediaBar>
    <SocialMediaLink href="mailto:timothy.liang@vanderbilt.edu">
      <MdMailOutline />
    </SocialMediaLink>
    <SocialMediaLink href="https://www.linkedin.com/in/timothy-liang-51980a143/">
      <FaLinkedinIn />
    </SocialMediaLink>
    <SocialMediaLink href="https://www.instagram.com/possibly_tim/">
      <FaInstagram />
    </SocialMediaLink>
  </SocialMediaBar>
)
