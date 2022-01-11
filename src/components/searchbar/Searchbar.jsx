import React, { Component } from 'react'

export default class Searchbar extends Component {
  state = {
    imageSeatch: '',
  }

  saveState = (event) => {
    this.setState({ imageSeatch: event.target.value })
  }

  importImage = (event) => {
    event.preventDefault()
    this.props.search(this.state.imageSeatch)
  }

  render() {
    return (
      <header className="Searchbar">
        <form className="form" onSubmit={this.importImage}>
          <button type="submit" className="Button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.saveState}
          />
        </form>
      </header>
    )
  }
}

// export default Searchbar;

// export default function Searchbar() {
//   return (
//     <header className="Searchbar">
//       <form className="form">
//         <button type="submit" className="Button">
//           <span className="button-label">Search</span>
//         </button>

//         <input
//           className="input"
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//         />
//       </form>
//     </header>
//   )
// }
