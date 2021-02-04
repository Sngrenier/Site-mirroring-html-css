import React, { Component } from 'react'
import Slider from 'infinite-react-carousel'

export default class Header extends Component {

render() {

    const settings =  {
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    autoplaySpeed: 20000,
    duration: 200,
    pauseOnHover: false,
    swipe: false
    }
    return (
        <div className="promo-bar">
        <span></span>
        <Slider { ...settings }>
            <div>
            <h2>FREE SHIPPING ON ANY U.S. ORDER  |  FREE RETURNS</h2>
            </div>
            <div>
            <h2>15% OFF SELECT PRODUCTS WITH CODE: SELECT15OFF</h2>
            </div>
        </Slider>
        </div>
        );
    }
}