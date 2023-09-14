import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import { useState } from 'react';
import logo from './logo.png';
import '../Styles/NavBar.css'


const NavBarLayout= () => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const[modal,setModal] = useState(false)

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  
  const modalhandler = () => {
    setModal(true)

  }
  const closeModal = () => {
    setModal(false)
  }

  
  return (

<div>
    <nav className="navbar navbar-expand-lg bg-success ">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          <img src={logo} alt='' style={{ width: '50px', height: '35px' }} />GreenHubNews
        </Link>
            <button className="navbar-toggler" 
                type="button"
                onClick={handleToggle}
                data-bs-toggle="collapse" 
                aria-expanded={isNavOpen} 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
             </button>
        <div className={`collapse navbar-collapse${isNavOpen ? ' show' : ''}`} >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item .text-warning-emphasis">
              <NavLink className="nav-link  text-light" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/blog">Articles</NavLink>
            </li>
               <div>
                  <button className="btn btn-warning rounded-circle" onClick={modalhandler} >Account</button>
               </div>
          </ul>
        </div>
       

      </div>
    </nav>
    {modal && (
        <div
          className={`modal fade show`}
          tabIndex="-1"
          role="dialog"
          style={{ display: 'block' }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login/Register</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label className="form-check-label">Check me out</label>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )
}


  </div>
  );
};

export default NavBarLayout