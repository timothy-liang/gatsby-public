import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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
  background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto ${props => props.backgroundSize};
  // background-size: auto auto;


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

const ContentOverlay = styled(({backgroundColor, ...props}) =>
  <Link {...props} />
)`
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0;

  transition: opacity: 0s, background-color .2s;
  transition-timing-function: ease;
  background-color: ${props => convertHex(props.backgroundColor, 0)};

  text-decoration: none;

  overflow:hidden;

  :hover {
    cursor: pointer;
    background-color: ${props => convertHex(props.backgroundColor, 80)};
    opacity: 1;
    transition: opacity .4s;
  }
`

const color4 = "#BCB8B1"
const color1 = "#dfe6e9"
const color3 = "#463F3A"
const color2 = "#E56969"

const title1 = "Google";
const title2 = "Facebook";
const title3 = "Google";
const title4 = "Vanderbilt";

const subtitle1 = "Intern";
const subtitle2 = "Intern";
const subtitle3 = "Intern";
const subtitle4 = "Researcher & TA";

//FFE5D9 - peach    //BB8588 - unsaturated red
//F0B67F - orangish //ffdf9e - ig light yellow
//E56969 - ig red

const ContentTitle = styled.div`
  position: relative;
  top: 30%;
  left: 10%;
  color: white;
  font: Asap;
  font-size: 50px;
  letter-spacing: 2px;
`

const ContentSubTitle = styled.div`
  position: relative;
  top: 30%;
  left: 12%;
  color: white;
  font: Asap;
  font-size: 25px;
  letter-spacing: 1px;
`

const ContentDesc = props => (
  <React.Fragment>
    <ContentTitle>{props.title}</ContentTitle>
    <ContentSubTitle>{props.subtitle}</ContentSubTitle>
  </React.Fragment>
)

const makeContent = (color, image, imageSize, title, subtitle, to) => (
  <ContentBox backgroundColor={color} backgroundImage={image} backgroundSize={imageSize}>
    <ContentOverlay backgroundColor={color} to={to}>
      <ContentDesc title={title} subtitle={subtitle} />
    </ContentOverlay>
  </ContentBox>
)

const convertHex = (hex,opacity) => {
  hex = hex.replace('#','');
  let r = parseInt(hex.substring(0,2), 16);
  let g = parseInt(hex.substring(2,4), 16);
  let b = parseInt(hex.substring(4,6), 16);

  let result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
  return result;
}

export default () => (
  <ContentGrid>
    {makeContent(color1, "ads_logo.svg", "38%", title1, subtitle1, "/about/")}
    {makeContent(color2, "ig_logo_2.svg", "43%", title2, subtitle2, "/about/")}
    {makeContent(color3, "chrome_logo_2.svg", "32%", title3, subtitle3, "/about/")}
    {makeContent(color4, "vandy_logo.png", "35%", title4, subtitle4, "/about/")}
  </ContentGrid>
)