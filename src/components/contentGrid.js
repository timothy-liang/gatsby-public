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

const color4 = "#BCB8B1"
const color1 = "#dfe6e9"
const color3 = "#463F3A"
const color2 = "#E56969"
//FFE5D9 - peach    //BB8588 - unsaturated red
//F0B67F - orangish //ffdf9e - ig light yellow
//E56969 - ig red

export default () => (
  <ContentGrid>
    <ContentBox backgroundColor={color1}>
      <img src="ads_logo.svg" alt="Google Ads" style={{width:"30%"}} />
    </ContentBox>
    <ContentBox backgroundColor={color2}>
      <img src="ig_logo_2.svg" alt="Instagram" style={{width:"30%", filter:"invert(100%)"}}/>
    </ContentBox>
    <ContentBox backgroundColor={color3}>
      <img src="chrome_logo_2.svg" alt="Google Chrome" style={{width:"30%"}}/>
    </ContentBox>
    <ContentBox backgroundColor={color4}>
      <img src="vandy_logo.png" alt="Vanderbilt" style={{width:"30%"}}/>
    </ContentBox>
  </ContentGrid>
)