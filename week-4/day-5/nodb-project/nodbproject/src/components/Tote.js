import React, {Component} from 'react'

export default class Tote extends Component {
    constructor(props){
        super(props)
    }


    render(){  
        console.log(this.props)
        const mappedCollection=this.props.tote.map((piece, index)=>{
            return(
            <section className="tote-bag"> 
                <div className="tote-item" key={index}>
                <img className="tote-img" src = {piece.image} alt={piece.name} width={100} height={120} />
                <h4> {piece.name} </h4>
                <h4> {piece.price} </h4>
                <h4> {piece.quantity} </h4>
                <div className="tote-update">
                <button className="update-btn" onClick={() => this.props.updateTote(piece.id, piece.quantity+1)}>+</button>
                <button className="update-btn" onClick={() => this.props.updateTote(piece.id, piece.quantity-1)}>-</button>
                <button className="update-btn" onClick = {() => this.props.deleteFromTote(piece.id)}>x</button>
                </div>
            </div>
            </section>)
            }
        )


        return(
            <div className="tote-bag">
                <div className="tote-title">
                <h5>TOTE</h5>  
                </div>
                <div className="tote-bag">
                    {mappedCollection}
                </div>
                <button className="tote-btn" onClick={() => this.props.emptyOrder()}>Check Out</button>
            </div>
        )
    }
}