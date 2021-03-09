import React, { Component } from 'react'
import {storeProducts, detailProduct} from '../data'


const ProductContext = React.createContext()
//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        products: [], 
        detailProduct: detailProduct,
        cart: [],
        userInput: '',
        modalOpen: false,
        modalProduct:detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    //Mounting the new set of values
    componentDidMount() {
        this.setProducts()
    }

    //Getting new set of values instead of referencing the original values.
    setProducts = () => {
        let tempProducts = []
        storeProducts.forEach(item => {
            const singleItem= {...item}
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return{
                products: tempProducts
            }
        })
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id)
        return product
    }


    handleDetail = (id) =>{
        //console.log('hello from detail')
        const product = this.getItem(id)
        this.setState(()=> {
            return {detailProduct:product}
        })
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1
        const price = product.price
        product.total = price
    this.setState(()=> {
        return { 
            products: tempProducts, 
            cart:[...this.state.cart, product] 
        }
        //below is a callback function to the addToCart to add the $$ totals once the item is in the cart
    }, ()=> {this.addTotals()})
    }

    openModal = (id) => {
        const product = this.getItem(id)
        this.setState(()=> {
            return {
                modalProduct: product, 
                modalOpen: true}
        })
    }

    closeModal = () => {
        this.setState(()=> {
            return{
                modalOpen:false
            }
        })
    }

    increment = (id) => {
        //First get all the values from the cart off of state(remember that the cart is set to an empty array). This is an example of destructuring, and we're getting all the values from the cart off of the state 
        let tempCart = [...this.state.cart]
        //Now we need the specific product that's been selected. The find method works great here, and inside the find method, we are saying return if the item.id exactly equals the id we're passing in.
        const selectedProduct = tempCart.find((item) => item.id === id)
        //Next we'd be looking for the specific index of the item we're looking for
        const index = tempCart.indexOf(selectedProduct)
        //now we'll assign this selected product to a product variable. 
        const product = tempCart[index]
        //Now we have access to the specific product. But we haven't changed the position in the index yet. 
        product.count = product.count + 1
        product.total = product.count * product.price
        //Now we need to send this data back to the state
        this.setState(()=> {
            return{cart:[...tempCart]}
        }, ()=>{
            this.addTotals()
        })
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find((item) => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count = product.count - 1
        if(product.count === 0){
            this.removeItem(id)
            //make an itemCounter method to place here instead in order to keep the item in the cart
        } else{
            product.total = product.count * product.price
            this.setState(()=> {
                return{cart:[...tempCart]}
            }, ()=>{
                this.addTotals()
            })
        }
}
        

    removeItem = (id) => {
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]
        //use a filter method to filter out the item id. If the item id DOESNT match the item id clicked, then keep it in the cart. Therefore by default, if the remove item is clicked, the item SHOULD be removed from the cart.
        tempCart = tempCart.filter((item) => item.id !== id)
        //This gets us the item index of the tempProducts array
        const index = tempProducts.indexOf(this.getItem(id))
        //Now we know the exact product we're getting back is removedProduct
        let removedProduct = tempProducts[index]
        //Now we add the new data sets once we remove an itemized item from cart: 
        removedProduct.inCart = false
        removedProduct.count = 0
        removedProduct.total = 0
        
        //Finally we set the new updated state once the removed item is gone.
        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        }, () => {
            this.addTotals()
        })
    }

    clearCart = () => {
        this.setState(() => {
            return { cart: [] }
            //this will return an empty cart, but it won't reset the values, so the cart $$ totals will be wrong and you won't be able to add the same items to the cart again without additional functionality. 
        }, () => {
            this.setProducts()
            //Adding setProducts will reset the products back the to origninal state. Also important note that these are copies of the products, so we're never modifying the originals. Just a good practice to get into.
            this.addTotals()
            //Adding addTotals will reset the $$ totals. That way we aren't relying on the $$ totals only being updated when something is added to the cart. You want them to be updated both when something is added or removed.
        })
    }

    addTotals = () => {
        let subTotal = 0
        this.state.cart.map((item) => (subTotal += item.total))
        const tempTax = subTotal * 0.0875
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }


    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                handleSearch: this.handleSearch,
                handleChange:this.handleChange
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }


