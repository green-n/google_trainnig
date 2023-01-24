import React from 'react'
import { auth } from '../firebase'
import { Navigate } from 'react-router'

const style = {
    button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`
}


const Logout = () => {

    
  return (
    <button onClick={()=>{auth.signOut()}} className={style.button}>LogOut</button>
  )
}
export default Logout