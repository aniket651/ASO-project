import React from 'react'

export default function Header(){
    return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:'#071361'}}>
        <div className="container-fluid container-fluid" style={{backgroundColor:'#071361'}}>
          <a className="navbar-brand" style={{color:'white'}} href="/" ><b><i>Academy</i></b><br/><i>Support Central</i></a>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse container-fluid" id="navbarSupportedContent" >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item" >
                  <a className="nav-link active" aria-current="page" href="/" style={{color:"white"}}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" style={{color:"white"}}>Sku Validate</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" style={{color:"white"}}>Sku Radial Validate</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" style={{color:"white"}}>Sku Search</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" style={{color:"white"}}>Inventory Lookup</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" style={{color:"white"}}>Contact Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" style={{color:"white"}}><b>Logout</b></a>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    )
}