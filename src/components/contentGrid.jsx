import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import AnimateLoad from "./animate"

const ContentGrid = styled.div`
  width: 90%;
  max-width: 1050px;
  margin: auto;
  margin-top: 5px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const ContentBox = styled.div`
  background-color: ${props => props.backgroundColor};
  background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto ${props => props.backgroundSize};

  @media (min-width: 699px) {
    width: 500px;
    height: 400px;
    margin: 8px;
  }

  @media (max-width: 699px) {
    width: 90vw;
    height: 72vw;
    margin: 2vw auto;
  }

  border-radius: 3px;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.03);

  font-size: 15px;
  font-family: Asap, sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
`
const makeRGBA = (hex, opacity) => {
  const r = parseInt(hex.substring(1, 3), 16)
  const g = parseInt(hex.substring(3, 5), 16)
  const b = parseInt(hex.substring(5, 7), 16)
  return `rgba(${r},${g},${b},${opacity})`
}

const ContentOverlay = styled(({ backgroundColor, hoverIndex, ...props }) => <Link {...props} />)`
  width: 100%;
  height: 100%;
  opacity: 0;
  border-radius: 3px;

  transition: opacity .2s, background-color .2s;
  transition-timing-function: ease;
  background-color: ${props => makeRGBA(props.backgroundColor, 0)};

  text-decoration: none;

  overflow:hidden;

  @media (hover: hover) {
    :hover {
      cursor: pointer;
      background-color: ${props => makeRGBA(props.backgroundColor, 0.93)};
      opacity: 1;
      transition: opacity .4s;
    }
  }

  @media (hover: none) {
  ${props => (props.index === props.hoverIndex && `
      cursor: pointer;
      background-color: ${makeRGBA(props.backgroundColor, 0.93)};
      opacity: 1;
      transition: opacity .4s;
    `
  )}
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

const makeContent = (contentData, index, hoverIndex) => (
  <ContentBox
    key={index}
    backgroundColor={contentData.color}
    backgroundImage={contentData.image}
    backgroundSize={contentData.imageSize}
  >
    <ContentOverlay
      backgroundColor={contentData.color}
      to={contentData.to}
      hoverIndex={hoverIndex}
      index={index}
    >
      <ContentDesc title={contentData.title} subtitle={contentData.subtitle} />
    </ContentOverlay>
  </ContentBox>
)

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hoverIndex: 0 }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll(event) {
    const pos = window.pageYOffset
    const break1 = 50
    const break2 = 300
    const break3 = 550
    let newHoverIndex = 0
    if (pos > break3) {
      newHoverIndex = 3
    } else if (pos > break2) {
      newHoverIndex = 2
    } else if (pos > break1) {
      newHoverIndex = 1
    }
    if (this.state.hoverIndex !== newHoverIndex) {
      this.setState({ hoverIndex: newHoverIndex })
    }
  }

  render() {
    return (
      <AnimateLoad>
        <ContentGrid>
          {this.props.contentData.map((data, index) => makeContent(
            data, index, this.state.hoverIndex,
          ))}
        </ContentGrid>
      </AnimateLoad>
    )
  }
}
