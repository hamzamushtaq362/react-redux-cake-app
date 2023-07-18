import React from 'react'
import { buyIceCream } from '../redux'
import { connect, Connect } from 'react-redux'

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Cake Component {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Add Cakes</button>
    </div>
  )
}

const mapStateToProps=(state)=>{
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchProps=(dispatch)=>{
    return {
        buyIceCream:()=>dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchProps
)(IceCreamContainer)