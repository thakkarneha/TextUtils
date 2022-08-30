import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode}`}>
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/" style={{color:props.mode ==='dark'?'pink':'blue'}}>{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{color:props.mode ==='dark'?'white':'black'}}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{color:props.mode ==='dark'?'white':'black'}}>{props.aboutText}</Link>
            </li>

          </ul>
          <div className="flex ">
            <div className="btn btn-danger btn-space my-2 p-3 btn-rounded btn-icon" onClick={()=> (props.toggleMode('danger'))} style={{height:'10px',width:'20px',cursor:'pointer'}}></div>
          </div>   
                   <div className="btn btn-info btn-rounded btn-space my-2 p-3 btn-icon" onClick={()=> (props.toggleMode('info'))} style={{height:'10px',width:'20px',cursor:'pointer'}}></div>

            <div className="btn btn-warning btn-rounded btn-space my-2 p-3 btn-icon" onClick={()=> (props.toggleMode('warning'))} style={{height:'10px',width:'20px',cursor:'pointer'}}></div>
            <div className="btn btn-success btn-rounded btn-space my-2 p-3 btn-icon" onClick={()=> (props.toggleMode('success'))} style={{height:'10px',width:'20px',cursor:'pointer'}}></div>

          <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={()=> (props.toggleMode('null'))} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle mode</label>
</div>

        </div>
      </div>

    </nav>
  )
}

export default Navbar
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: 'TextUtils',
  aboutText: 'About'
}