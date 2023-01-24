import React from 'react'
import {signInWithGoogle} from '../firebase'

const LogInPage = () => {
  return (
    <div>
        <div>
            <button onClick={()=>signInWithGoogle()}>Google auth</button>
        </div>
    </div>
  )
}

export default LogInPage