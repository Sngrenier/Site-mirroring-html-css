


// export default class PopUp extends Component {


//     handleClick = () => {
//     this.props.toggle();
//     };


// render() {
//     return (
//     <div className="modal">
//         <div className="modal_content">
//         <span className="close" onClick={this.handleClick}>&times;</span>
//         <p>I'm A Pop Up!!!</p>
//     </div>
//     </div>
//     );
//     }
// }


// import React from 'react';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
 
// export default () => (
//   <Popup trigger={<button> Trigger</button>} position="right center">
//     <div>Popup content here !!</div>
//   </Popup>
// );

// import React, { Component } from "react";


// export default class PopUp extends Component {
//     constructor(props){
//         super(props)
//     }
//         state = { isOpen: false };

//     handleShowImage = () => {
//         this.setState({ isOpen: !this.state.isOpen });
//         console.log("clicked");
//     };

//     render() {
//          return (
//             <div>
//                 <button className="quick-view" onClick={this.handleShowImage}></button>
//                 {this.state.isOpen && (
//                 <dialog
//                     className="dialog"
//                     style={{ position: "absolute" }}
//                     open
//                     onClick={this.handleShowDialog}
//                 >
//                     <img
//                     className="image"
//                     src = {piece.image} alt={piece.name} width={200} height={260} mode="contain"
//                     onClick={this.handleShowImage}
//                     alt="no image"
//                     />
//                 </dialog>
//                 )}
//             </div>
//         );
//     }
// }