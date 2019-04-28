import React from "react"
import styled from "styled-components"
import "../styles/fonts.css"

const Hamburger = styled.button`
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  :hover {
    opacity: 0.7;
  }

  // @media (min-width: 1000px) {
  //   display: none;
  // }
`

const HamburgerBox = styled.span`
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
`

const HamburgerInner = styled.span`
  top: 50%;
  margin-top: -2px;

  &, ::before, ::after {
    background-color: #000;

    width: 40px;
    height: 4px;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
    content: "";
    display: block;
  }

  top: auto;
  bottom: 0;
  transition-duration: 0.13s;
  transition-delay: 0.13s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

  ::after {
    top: -20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;
  }

  ::before {
    top -10px;
    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  ${props => props.active ? `
    transform: translate3d(0, -10px, 0) rotate(-45deg);
    transition-delay: 0.22s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

    ::after {
      top: 0;
      opacity: 0;
      transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;
    }

    ::before {
      top: 0;
      transform: rotate(-90deg);
      transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  `
  :""}
`
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isActive: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isActive: !state.isActive
    }));
  }

  render () {
    return (
      <Hamburger onClick={this.handleClick}>
        <HamburgerBox>
          <HamburgerInner active={this.state.isActive}/>
        </HamburgerBox>
      </Hamburger>
    )
  }
}