import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import './reset.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Navbar from './components/Navbar/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart/Cart'
import Default from './components/Default'
import Modal from './components/Modal'
import Landing from './components/Landing/Landing'
import ProdHead from './components/ProdHead'
import Auth from './components/Auth/newAuth'
// import ImageSlide from './components/ImageSlide'


class App extends Component {
  render(){
  return (
    <React.Fragment>
      <Header />
      <Navbar />
      <ProdHead />

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/productList" component={ProductList} />
        <Route path="/auth" component={Auth} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal/>
    </React.Fragment>
    )
  }
}

export default App
