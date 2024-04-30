import React, { useState } from 'react';
import './navBar.css';

function NavBar() {
  const [imageUser, setImageUser] = useState('/images/image.png');

  return (
    <div className='container-fluid'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/report">
              <img src="/images/logo.png" alt="logo infraAlerta" width={100} height={100} />
            </a>

            <div className="collapse navbar-collapse" id="navbarToggle">
              <div className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <form className="form-inline my-2 my-lg-0 ml-3">
                    <input className="form-control mr-sm-2 search" id="search" type="search" placeholder="&#xF002; Buscar                     &#xF0CA;" aria-label="Search" />
                  </form>
              </div>
            </div>

            <div className="collapse navbar-collapse ml-auto text-right justify-content-end">
            <img src={imageUser} alt="foto do usuário" width={80} height={80}/>
            </div>
        </nav>
    </div>
  );
}

export default NavBar;