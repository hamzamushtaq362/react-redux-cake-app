import React from 'react'
import { buyCake } from '../redux'
import { connect, Connect } from 'react-redux'

function CakeContainer(props) {
  return (
    <div>
      <h2>Cake Component {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Add Cakes</button>
    </div>
  )
}

const mapStateToProps=(state)=>{
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchProps=(dispatch)=>{
    return {
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchProps
)(CakeContainer)