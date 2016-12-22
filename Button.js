import React from 'react'


class Button extends React.Component {
    render() {
    let label = this.props.label
      label = "Click Me!"
    return (
      <div>
        <button title={label}>{label}</button>
      </div>
    )
  }
}

export default Button
