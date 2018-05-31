import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="nabar-brand">
            <a className="navbar-item" href="http://bulma.io">
                {this.props.title}
            </a>
        </div>
      </nav>
    )
  }
}
