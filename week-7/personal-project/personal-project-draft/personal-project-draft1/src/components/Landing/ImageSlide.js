import React, { Component } from 'react'
// import Slider from 'react-elastic-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
import {Link} from 'react-router-dom'
import './ImageSlide.css'

export default class ImageSlide extends Component {
//   state = {
//     items: [
//       {id: 1, img: {img.id[1]}},
//       {id: 2, title: 'item #2'},
//       {id: 3, title: 'item #3'}
//     ]
//   }

  render () {
    const settings =  {
        showArrows: false,
        showStatus: false,
        arrowsBlock: false,
        autoPlay: true,
        infiniteLoop: true,
        // AutoPlaySpeed: 500,
        interval: 8000,
        transitionTime: 500,
        stopOnHover:true,
        // enableMouseSwipe: true,
        // pagination: true,
        outerSpacing: 0,
        dynamicHeight: true,
        // wrap:true,
    }

    // const { items } = this.state;
    return (
        <section className="carousel">
        <div className="container-fluid slider">
            <Carousel {...settings}>
                
                <div>
                    <Link to="/productList" className="carousel-link">
                    <img 
                    className="img-slider carousel-link" 
                    src="https://media.restorationhardware.com/is/image/rhis/021221_Ski_H1_S2?wid=2000&fmt=jpeg&qlt=80" 
                    sizes="(max-width:320px)280px, (max-width:480px)440px, 800px"
                    alt="img" />
                    <div class="carousel-caption">
                        <h5>caption</h5>
                        <p>subcaption</p>
                    </div>
                    </Link>
                </div>

                <div>
                    <Link to="/productList" className="carousel-link">
                    {/* <h3>Shop Winter Throws</h3> */}
                    <img 
                    className="img-slider" 
                    src="https://media.restorationhardware.com/is/image/rhis/021221_Ski_H1_S5?wid=2000&fmt=jpeg&qlt=80" 
                    alt="img" />
                    <div class="carousel-caption">
                        <h5>caption</h5>
                        <p>subcaption</p>
                    </div>
                    </Link>
                </div>

                <div>
                    <Link to="/productList" className="carousel-link">
                    {/* <h3>Join the Club</h3> */}
                    <img 
                    className="img-slider" 
                    src="https://media.restorationhardware.com/is/image/rhis/021221_Ski_H1_S6?wid=2000&fmt=jpeg&qlt=80" 
                    alt="img" />
                    <div class="carousel-caption">
                        <h5>caption</h5>
                        <p>subcaption</p>
                    </div>
                    </Link>
                </div>
            </Carousel>
        </div>
        </section>
        )
    }
}

