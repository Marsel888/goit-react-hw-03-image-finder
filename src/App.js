import reactDom from 'react-dom'
import React from 'react'
import { Component } from 'react/cjs/react.production.min'
import Searchbar from './components/searchbar/Searchbar'
import ImageGallery from './components/imageGallery/ImageGallery'
import { images } from './PixabayApi'
import Button from './components/button/Button'
import Spiner from './components/Spiner/spiner'
import Modal from './components/modal/Modal'

class App extends Component {
  state = {
    page: 1,
    name: null,
    images: [],
    search: '',
    load: false,
    modalImg: false,
    imgModal: '',
  }

  async componentDidMount() {}

  saveSearch = (search) => {
    this.setState({ search })
  }

  nextImg = () => {
    this.setState((state) => ({ page: state.page + 1 }))
  }
  modal = (modalImg) => {
    this.setState({ imgModal: modalImg })
  }
  togleModal = () => {
    this.setState({ modal: !this.state.modal })
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.setState({ images: [] })
    }

    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.setState({ load: true })
      try {
        await images(this.state.search, this.state.page)
          .then((data) =>
            this.setState((state) => ({
              images: [...state.images, ...data.hits],
            })),
          )
          .finally(() => this.setState({ load: false }))
      } catch {}
    }
  }

  render() {
    const { load, images, modal, imgModal } = this.state
    return (
      <>
        {' '}
        <Searchbar search={this.saveSearch} />
        {load && <Spiner />}
        <ImageGallery
          arrImages={images}
          modal={this.modal}
          togleModal={this.togleModal}
        />
        {modal && <Modal img={imgModal} togleModal={this.togleModal} />}
        {images.length ? <Button nextImg={this.nextImg} /> : ''}
      </>
    )
  }
}

export default App
