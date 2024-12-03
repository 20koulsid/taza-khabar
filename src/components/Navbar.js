import React, { Component } from 'react'


export class Navbar extends Component {

  handleOnClick = (button) => {
    button.preventDefault(); // Prevent the default form submission behavior
    alert('Search button clicked!');
  };

  render() {
    return (
        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid collapse navbar-collapse   ">
                <a className="navbar-brand fs-1 " href="/">TazaKhabar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">Home</a>
                    </li>
                </ul>
                <form className="form-inline outline-none" style={{display:'flex'}}>
                  <input className="form-control  mx-2 "  type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-primary " onClick={this.handleOnClick} type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
  }
}

export default Navbar

