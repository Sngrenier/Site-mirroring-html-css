import React from 'react'

// const Collection = props => {
//     return <div className="look-book">
//         <div>{props.collection.product}</div>
//     </div>
// }
// export default Collection

const Collection = (props) => {
    // console.log(props)
        // const filteredCollection=props.pieces.filter(piece=>piece.name.toUpperCase().includes(props.search.toUpperCase()))
        console.log(props)
        let mappedCollection = []
        if(props.pieces) {
            mappedCollection=props.pieces.map((piece, index)=>{
                return <section className="product-item" key={index}>
                    <img className="img" src = {piece.image} alt={piece.name} width={200} height={260} mode="contain" onClick= {(e)=> props.addToTote(piece)} />
                    <h4> {piece.name} </h4>
                    <h4> {piece.price} </h4>
                    <h4> {piece.color} </h4>
                    <h6> {piece.size} </h6>
                    <button className="quick-view">Quick View</button>
                    {/* <button className="quick-view" style={{ position: "absolute" }} open onClick={props.handleShowImage}><img className="img" src = {piece.image} alt={piece.name} width={300} height={380} alt="no image"/>
                    </button> */}
                </section>
            })
        }
        
    return(
            <div className="lookBook">{mappedCollection}</div>   
    )
}
export default Collection


