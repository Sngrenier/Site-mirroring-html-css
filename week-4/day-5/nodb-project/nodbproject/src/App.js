import './reset.css'
import './App.css'

import React, {Component} from 'react'
import axios from 'axios'

// import data from './data'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ProdHead from './components/ProdHead'
import Collection from './components/Collection'
import Tote from './components/Tote'
// import PopUp from './components/PopUp'
// import Product from './components/Product.js'
// import collectionData from './collection.json'
// import collectionData from 'json!../collection.json'

class App extends Component {
  constructor(){
    super()

    this.state={
      collection: [],
      userInput: '',
      tote: [],
      isOpen: false,
    }
    this.postSearch=this.postSearch.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }

  componentDidMount(){
    this.getCollection()
  }


  getCollection = () => {
    axios.get(`/api/collection`)
    .then(res => {
      this.setState({
        collection: res.data
      })
    }).catch( err => console.log(err))
  }

  postSearch = () => {
    axios.get(`/api/collection/${this.state.userInput}`)
    .then(res => {
      console.log(res.data)
      this.setState({
        collection: res.data,
        userInput: ''
      })
      console.log(this.state.userInput)
    }).catch(err => console.log(err))
  }

  addToTote = (piece) => {
    // console.log(itemName)
    axios.post(`/api/tote`, {piece})
    .then( res => {
    this.setState({
        tote: res.data
    })
  }).catch(err => console.log(err))
  }

 getTote = () => {
    axios.get(`/api/tote`)
    .then(res => {
      this.setState({
        tote: res.data
      })
    }).catch(err => console.log(err))
}

deleteFromTote = (id) => {
  axios.delete(`/api/tote/${id}`)
  .then(res => {
    console.log(res.data)
    this.setState({
      tote: res.data
    })
  }).catch(err => console.log(err))
}

updateTote = (id, quantity) => {
  axios.put(`/api/tote/${id}`, {quantity})
  .then(res => {
    this.setState({
      tote: res.data
    })
  }).catch(err => console.log(err))
}

emptyOrder = () => {
  axios.post(`/api/order`)
  .then(res => {
    this.setState({
      tote: []
    })
  })
  .catch(err => console.log(err))
}



handleChange = (e) =>{
  this.setState({userInput:e.target.value})
  console.log(this.state.userInput)
}

  handleSearch =(val) =>{
    this.setState({
      userInput: val
    })
  }

  handleShowImage = () => {
    this.setState({ isOpen: !this.state.isOpen })
      console.log("clicked")
  }
  
  // togglePop = () => {
  //   this.setState({
  //     popUpSeen: !this.state.seen
  //   })
  // }

 
//   addToTote = (piece) => {
//     // console.log(itemName)
//   if(!this.state.tote.includes(piece)){
//     this.setState({
//       tote: [...this.state.tote, piece]
//     })
//   }
// }

//   deleteTote = () => {
//     this.setState({
//       tote: []
//     })
//   }

  render(){
    // console.log(this.state.data)
  return (
    <div className="app">
      <Header />
      <SearchBar 
      postSearch={this.postSearch}
      handleSearch={this.handleSearch}
      handleChange={this.handleChange}
      userInput={this.state.userInput}
      getCollection={this.getCollection}
      />
      <ProdHead />
      <div className="catalogue">
      <div>
      <Collection 
        pieces={this.state.collection} 
        addToTote={this.addToTote} 
        handleShowImage={this.state.handleShowImage}
        />
      {/* <PopUp />   */}
      </div>
      <div className="myTote">
      <Tote  
        tote={this.state.tote}
        deleteFromTote={this.deleteFromTote}
        updateTote={this.updateTote}
        emptyOrder={this.emptyOrder}
        />
      </div>
    </div>
    </div>
  );
}
}

export default App;
