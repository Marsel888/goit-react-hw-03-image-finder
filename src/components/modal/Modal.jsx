import { createPortal } from 'react-dom'
import React, { Component } from 'react'

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      if ('Escape' === e.code) {
        this.props.togleModal()
      }
    })
  }

  render() {
    const modal = document.querySelector('#modal-root')

    return createPortal(
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.img} />
        </div>
      </div>,
      modal,
    )
  }
}
