import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const makeRGBA = (hex, opacity) => {
  const r = parseInt(hex.substring(1, 3), 16)
  const g = parseInt(hex.substring(3, 5), 16)
  const b = parseInt(hex.substring(5, 7), 16)
  return `rgba(${r},${g},${b},${opacity})`
}

const ContentGrid = styled.div`
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

  width:500px;
  height: 400px;
  border-radius: 3px;
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.08);

  font-size: 15px;
  font-family: Asap, sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
`

const ContentOverlay = styled(({ backgroundColor, ...props }) => <Link {...props} />)`
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0;
  border-radius: 3px;

  transition: opacity 0s, background-color .2s;
  transition-timing-function: ease;
  background-color: ${props => makeRGBA(props.backgroundColor, 0)};

  text-decoration: none;

  overflow:hidden;

  :hover {
    cursor: pointer;
    background-color: ${props => makeRGBA(props.backgroundColor, 0.93)};
    opacity: 1;
    transition: opacity .4s;
  }
`

const ContentTitle = styled.div`
  position: relative;
  top: 30%;
  left: 10%;
  color: white;
  font: Asap, sans-serif;
  font-size: 50px;
  letter-spacing: 2px;
`

const ContentSubTitle = styled.div`
  position: relative;
  top: 30%;
  left: 12%;
  color: white;
  font: Asap, sans-serif;
  font-size: 25px;
  letter-spacing: 1px;
`

const ContentDesc = props => (
  <React.Fragment>
    <ContentTitle>{props.title}</ContentTitle>
    <ContentSubTitle>{props.subtitle}</ContentSubTitle>
  </React.Fragment>
)

const makeContent = contentData => (
  <ContentBox
    backgroundColor={contentData.color}
    backgroundImage={contentData.image}
    backgroundSize={contentData.imageSize}
  >
    <ContentOverlay backgroundColor={contentData.color} to={contentData.to}>
      <ContentDesc title={contentData.title} subtitle={contentData.subtitle} />
    </ContentOverlay>
  </ContentBox>
)

export default props => (
  <ContentGrid>
    {props.contentData.map(data => makeContent(data))}
  </ContentGrid>
)
