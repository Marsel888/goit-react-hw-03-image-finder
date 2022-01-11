import React, { Component } from 'react'

export default class ImageGalleryItem extends Component {
  state = {
    modalImg: '',
  }

  click = (e) => {
    this.props.togleModal()

    this.props.modal(e.largeImageURL)
  }
  render() {
    const test = this.props.arrImages

    return test.map((img) => (
      <div key={img.id} onClick={() => this.click(img)}>
        <li className="ImageGalleryItem">
          <img
            src={img.webformatURL}
            alt=""
            className="ImageGalleryItem-image "
          />
        </li>
      </div>
    ))
  }
}
