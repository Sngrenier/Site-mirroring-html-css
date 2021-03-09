import {Component} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'

class ProdHead extends Component {
    constructor() {
        super()
        this.state = {
        toggleShow: false
    }

}

toggleShowFunc = () => {
    this.setState( (prevState) => {
        return {
            toggleShow: !prevState.toggleShow
        }
    })
}

    render() {
    
    
    return ( <header className="container-fluid">
        <div className="product-header" >
        <nav className={`nav-bar ${this.state.toggleShow ? "show" : ""}`}>
            {/* need to add styling here to make this responsive - turn into a hamburger on small device */}
        <div className="category-names">
            <Link className="category-link" to='/productList'>
                <span>FULL COLLECTION</span>
            </Link>
            <Link className="category-link" to='/productList'>
                <span>TABLES</span>
            </Link>
            <Link className="category-link" to='/productList'>
                <span>SIDE CHAIRS</span>
            </Link>
            <Link className="category-link" to='/productList'>
                <span>THROWS</span>
            </Link>
            <Link className="category-link" to='/productList'>
                <span>PILLOWS</span>
            </Link>
            <Link className="category-link" to='/productList'>
                <span>FINISHINGS</span>
            </Link>
        </div>
        </nav>
                <span
                id="prod-btn"
                onClick={this.toggleShowFunc} 
                alt="menu-icon" 
                type="image" 
                > <i class="fas fa-bars"></i>
                </span>
        </div>
    </header>
    )
    }
}

export default ProdHead