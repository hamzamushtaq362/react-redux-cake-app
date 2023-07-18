import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux';

const HookCakeContainer = () => {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Cake Component {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Add Cakes</button>
        </div>
    )
}

export default HookCakeContainer
