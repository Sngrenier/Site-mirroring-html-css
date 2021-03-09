import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

// import styled from 'styled-components'




export default class Navbar extends Component {
    constructor() {
            super()
            this.state = {
            // toggleShow: false
        }
    
    }

    

    // toggleShowFunc = () => {
    //     this.setState( (prevState) => {
    //         return {
    //             toggleShow: !prevState.toggleShow
    //         }
    //     })
    // }

    handleSearch = () => {
        this.props.handleSearch(this.state.userInput)
    }

    handleClear = () => {
        this.setState({userInput: ''})
        this.props.handleSearch('')
    }


    render(){
        return(
            // <section className="navbar">
            // <div className="navbar-expand-sm px-sm-5">
            <nav className="navbar-expand-sm px-sm-5 navbar container-fluid search-bar">
                <ul className="navbar-nav align-items-center">
                
                <div className="nav-item home-icon">
                <Link to='/'>
                <img src="https://img.icons8.com/small/32/000000/home.png" alt='store' className="navbar-brand" />
                </Link>
                </div>

                <div className="nav-item search-container">
                    <li className="nav-item ml-5 nav-item">
                    <input className="input-btn"
                value={this.props.userInput}
                placeholder = {`Search`}
                onChange={(e) => this.props.handleChange(e)}
                />
                <div className="search-buttons">
                    <button className="clear-btn" onClick={this.props.postSearch}>Search</button> 
                    <button className="clear-btn" onClick={this.props.getCollection}>View All</button>
                </div>
                    </li>
                </div>
                
                <div className="nav-item brand-name">
                <li className="nav-item ml-5">
                    <h3 className="brand-name">MARBLE OAK</h3>
                </li>
                </div>

                <div className="nav-item profile-icon">
                <li className="nav-item ml-5">
                <Link to="/profile" className="ml-auto">
                <img src="https://img.icons8.com/plumpy/48/000000/user-female-circle.png" alt='profile' className="navbar-profile"/>
                </Link>
                </li>
                </div>

                <div className="nav-item greeting">
                <li className="nav-item ml-5">
                    <p className="nav-hello">Welcome!</p>
                    <Link to="/auth" className="ml-auto">
                    <button className="nav-login">LOGIN OR REGISTER</button>
                    </Link>
                </li>
                </div>

                <div className="nav-item tote-icon">
                <li className="nav-item ml-5">
                <Link to="/cart" className="ml-auto">
                <img src="https://img.icons8.com/ios/32/000000/shopping-bag--v1.png" alt='tote' className="navbar-tote"/>
                </Link>
                </li>
                </div>

                </ul>
                </nav>
               
        )
    }
}

// const NavWrapper = styled.nav`
// height: 100px;
// background: #737374;
// .nav-link{
//     color:var(--mainWhite) !important;
//     font-size: 1rem;
//     text-transform: capitalize;
// }
// .mr-2 {
//     color: var(--mainWhite)!important;
// }
// .nav-cart-btn {
//     color: var(--mainWhite) !important;
// }
// `

