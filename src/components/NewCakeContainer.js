import React,{useState} from 'react'
import { buyCake } from '../redux'
import { connect, Connect } from 'react-redux'

function CakeContainer(props) {
    const [number,setNumber]=useState(1);
  return (
    <div>
      <h2>New Cake Component {props.numOfCakes}</h2>
      <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)} />
      <button onClick={()=>props.buyCake(number)}>Add {number} Cakes</button>
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
        buyCake:(number)=>dispatch(buyCake(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchProps
)(CakeContainer)