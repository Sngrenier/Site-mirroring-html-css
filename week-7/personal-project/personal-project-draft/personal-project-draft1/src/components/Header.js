import React, { Component } from 'react';
import Slider from 'react-elastic-carousel';
// import styled from 'styled-components'

export default class Header extends Component {

  render () {
    const settings =  {
    showArrows: false,
    arrowsBlock: false,
    enableAutoPlay: true,
    AutoPlaySpeed: 200,
    duration: 200,
    pauseOnHover: false,
    enableMouseSwipe: true,
    pagination: false
    }

    return (
        // <HeaderContainer>
        <div className="container-fluid">
            <div className="header-bar">
        <span></span>
        <Slider { ...settings }>
            <div className="promo">
            <p>FREE SHIPPING ON ANY U.S. ORDER  |  FREE RETURNS</p>
            </div>
            <div className="promo">
            <p>15% OFF SELECT PRODUCTS WITH CODE: SELECT15OFF</p>
            </div>
        </Slider>
        </div>
        </div>
        // </HeaderContainer>
    )
  }
}

// const HeaderContainer = styled.div`
// position: fixed;
// top:0;
// height: 30px;
// width: 100vw;
// background: #ffe0d7;
// display: flex;
// align-items: center;
// justify-content: center;
// text-align: center;
// line-height: 1rem;
// padding-top: 1%;
// }
// `
