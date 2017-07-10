import React, { Component } from 'react'
import { Link } from 'react-router'

export default class CustomLink extends Component {

  render() {

    const { to, text } = this.props

    return <Link className="custom-link" to={to}>
      {text}
      { this.props.children }
    </Link>
  }
}
