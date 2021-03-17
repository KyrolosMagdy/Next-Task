import React, { useEffect, useState } from 'react';

const NavBar = () => {
  const [isOnMobile, setIsOnMobile] = useState(false);
  const [isToggleOpen, setIsToggleButton] = useState(false);

  const handleWindowResize = () => {
    if (typeof window != undefined) {
      const isMobile = window.innerWidth >= 320 && window.innerWidth <= 1024;
      // update state
      setIsOnMobile(isMobile);
    }
  };

  useEffect(() => {
    handleWindowResize();
  });

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light text-white"
        style={{
          backgroundColor: '#48c788',
          position: 'fixed',
          width: '100%',
          zIndex: '100',
        }}
      >
        <div
          className={`${!isToggleOpen && 'd-none'}`}
          style={{
            backgroundColor: 'rgba(0,0,0,0.25)',
            position: 'fixed',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: 100,
          }}
        ></div>

        <div className={`toggleWindow ${isToggleOpen && 'open'}`}>
          <div className="toggleAreaWrapper">
            <div className="bottunContainer">
              <button
                className="xButtonWrapper"
                onClick={() => setIsToggleButton(!isToggleOpen)}
              >
                <h3 className="xButton"> &#10005; </h3>
              </button>
            </div>
            <div
              style={{
                height: '30%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <a
                href="https://kyrolosmagdy.github.io/Myportofolio/"
                className="MyBrand"
              >
                {' '}
                More About Kyrolos{' '}
              </a>
              <p className="menuContent h12">
                I Really love this test, unfortunately there is no other pages
                to visit
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="d-flex">
            <a className="navbar-brand text-white" href="#">
              Navbar
            </a>{' '}
            <form className={` ${isOnMobile ? 'd-flex' : 'd-none'}`}>
              <div className="input-group d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search League or Team"
                  aria-label="Search"
                  style={{ borderRadius: '1rem' }}
                />
              </div>
            </form>
            <button
              className="navbar-toggler"
              style={{ padding: '4px', marginLeft: '1rem' }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
              onClick={() => setIsToggleButton(!isToggleOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          {!isOnMobile && (
            <div
              className="collapse navbar-collapse d-flex justify-content-end"
              id="navbarSupportedContent"
            >
              <a
                style={{ fontWeight: 'bold', textDecoration: 'none' }}
                href="https://kyrolosmagdy.github.io/Myportofolio/"
              >
                <h4
                  style={{
                    color: '#48c788',
                    backgroundColor: 'white',
                    padding: '6px 12px',
                    borderRadius: '10px',
                  }}
                >
                  {' '}
                  More About Me{' '}
                </h4>
              </a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
