import React from 'react'
import ReactDOM from 'react-dom'

const Example = React.createClass({
  render() {
    return (
      <div>Hello World!</div>
    )
  }
})

ReactDOM.render(<Example />, document.getElementById("root"))
