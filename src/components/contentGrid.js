import React from "react"
import styled from "styled-components"

const ContentGrid = styled.div`
  background-color: LavenderBlush;
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, 500px);
  grid-template-rows: repeat(2, 500px);
  align-items: center;
  justify-content: center;
`

const ContentBox = styled.div`
  background-color: Gainsboro;

  border: 2px solid;
  border-color: HoneyDew;

  width:500px;
  height: 500px;

  font-size: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export default () => (
  <ContentGrid>
    <ContentBox>1</ContentBox>
    <ContentBox>2</ContentBox>
    <ContentBox>3</ContentBox>
    <ContentBox>4</ContentBox>
  </ContentGrid>
)