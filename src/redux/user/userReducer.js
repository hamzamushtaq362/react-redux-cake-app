import {
    FETCH_USER_REQUSEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from './userActionType'

const initialState={
    loading:false,
    users:[],
    error:''
}

const userReducer=(state= initialState,action)=>{
    switch(action.type){
        case FETCH_USER_REQUSEST: return{
            ...state,
            loading: true
        }
        case FETCH_USER_SUCCESS: return{
            ...state,
            loading:false,
            users: action.payload,
            error: ''
        }
        case FETCH_USER_FAILURE: return{
            ...state,
            loading:false,
            users: [],
            error: action.payload
        }
        default :return state
    }
}

export default userReducer