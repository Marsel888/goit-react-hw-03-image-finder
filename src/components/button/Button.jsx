export default function Button({ nextImg }) {
  return (
    <button
      onClick={nextImg}
      className="Button"
      style={{ margin: '10px 750px', height: '35px' }}
    >
      Load more
    </button>
  )
}
