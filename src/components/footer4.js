import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo1">
            <a 
            href="/" 
            className="navbar8-link-logo">
              <b>Rental</b>
              Outdoor
            </a>
          </div>
          <div className="footer4-links">
            <a
              href="/"
              className="thq-body-small"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="footer4-text16">Beranda</span>
                </Fragment>
              )}
            </a>
            <a
              href="/produk"
              className="thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="footer4-text18">Produk</span>
                </Fragment>
              )}
            </a>
            <a
              href="/harga"
              className="thq-body-small"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="footer4-text15">Harga</span>
                </Fragment>
              )}
            </a>
            <a
              href="/testimoni"
              className="thq-body-small"
            >
              {props.link4 ?? (
                <Fragment>
                  <span className="footer4-text19">Testimoni</span>
                </Fragment>
              )}
            </a>
            <a
              href="/kontak"
              className="thq-body-small"
            >
              {props.link5 ?? (
                <Fragment>
                  <span className="footer4-text14">Kontak</span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">© 2025 Rental Outdoor</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  link5: undefined,
  link3: undefined,
  link1: undefined,
  link2: undefined,
  link4: undefined,
  logoAlt: 'Logo',
  // logoSrc: '',
}

Footer4.propTypes = {
  link5: PropTypes.element,
  link3: PropTypes.element,
  link1: PropTypes.element,
  link2: PropTypes.element,
  link4: PropTypes.element,
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
}

export default Footer4
