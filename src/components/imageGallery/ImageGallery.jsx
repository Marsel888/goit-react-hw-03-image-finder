import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

export default function ImageGallery({ arrImages, modal, togleModal }) {
  return (
    <>
      <ul className="ImageGallery">
        <ImageGalleryItem
          arrImages={arrImages}
          modal={modal}
          togleModal={togleModal}
        />
      </ul>
    </>
  )
}
