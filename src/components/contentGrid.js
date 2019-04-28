import React from "react"
import styled from "styled-components"

const ContentGrid = styled.div`
  // background-color: LavenderBlush;

  max-width: 1200px;
  margin: 0px auto;

  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, 500px);
  grid-template-rows: repeat(2, 400px);
  align-items: center;
  justify-content: center;
`

const ContentBox = styled.div`
  background-color: ${props => props.backgroundColor};

  width:500px;
  height: 400px;
  border-radius: 3px;
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.1);
  font-size: 15px;
  font-family: Asap, sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
`

const color1 = "#463F3A"
const color2 = "#BCB8B1"
// const color3 = "#F4F3EE"
const color3 = "#FFD289"
const color4 = "#E0AFA0"

export default () => (
  <ContentGrid>
    <ContentBox backgroundColor={color1}></ContentBox>
    <ContentBox backgroundColor={color2}></ContentBox>
    <ContentBox backgroundColor={color3}></ContentBox>
    <ContentBox backgroundColor={color4}></ContentBox>
  </ContentGrid>
)