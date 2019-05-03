import React from "react"
import styled from "styled-components"

const FadeIn = styled.div`
  opacity: 0;
  ${props => (props.didMount && `
    transition: opacity .2s ease-in;
    opacity: 1;
  `)}
`

class Animator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { didMount: false }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ didMount: true })
    }, 0)
  }

  render() {
    return (
      <FadeIn didMount={this.state.didMount}>
        {this.props.children}
      </FadeIn>
    )
  }
}

export default ({ children, ...props }) => (
  <Animator>
    {children}
  </Animator>
)
