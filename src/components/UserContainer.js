import React,{useEffect} from 'react'
import { fetchUsers } from '../redux'
import {connect} from 'react-redux'

function UserContainer({userData, fetchUsers}) {
    useEffect(()=>{
        fetchUsers()
    },[])
  return (
    // userData.loading ? (
    //     <h2>Loading</h2>
    // ) : userData.error ? (
    //     <h2>Error</h2>
    // ) : (
        <div>
            <h2>User List</h2>
            <div>
                Total length of Users
                {
                    userData.users.length
                }
            </div>
        </div>
    // )
  )
}

const mapStateToProps=(state)=>{
    return{
        userData: state.user
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        fetchUsers: ()=> dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)
