import React, {Component} from 'react'

class SearchBar extends Component {
    constructor (){
        super()

        this.state = {
           
        }

        // this.handleSearch=this.handleSearch.bind(this)
        // this.handleClear=this.handleClear.bind(this)
        // this.handleChange=this.handleChange.bind(this)
    }

    // handleChange = (val) =>{
    //     this.setState({userInput:val})
    //     console.log(this.state.userInput)
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
            <div className="search-bar">
                <div className="search-buttons">
                <input className="input-btn"
                value={this.props.userInput}
                placeholder = {`Search`}
                onChange={(e) => this.props.handleChange(e)}
                />
                
                    <button className="clear-btn" onClick={this.props.postSearch}>Search</button>
                    <button className="clear-btn" onClick={this.props.getCollection}>View All</button>
                </div>
                <div className="brand-name">
                    <h1>BISOUS ET CACHEMIRE</h1>
                    {/* <h1>CAFE ET CACHEMIRE</h1> */}
                </div>
                <div className="greeting">
                    <h3>Hello Gorgeous!</h3>
                    <h4>LOGIN OR REGISTER</h4>
                </div>
                <div className="tote-icon">
                    <img src = "https://pngimage.net/wp-content/uploads/2018/06/sacola-de-compras-icon-png-1.png" height="45" width="40"></img>
                </div>

            </div>
        )
    }
}
export default SearchBar