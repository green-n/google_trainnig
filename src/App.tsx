import React from 'react';
import LogInPage from './pages/logInPage';
import {Routes,Link, Navigate, Route, Await} from 'react-router-dom'
import ChatPage from './pages/ChatPage';
import { auth } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

function App() {
  const [checkUser] = useAuthState(auth);
  console.log(checkUser)
  return (
    <div className="App">
       <Routes>
          <Route path='/' element={checkUser?<Navigate to="/chat"/>:<LogInPage/>}/>
          <Route path='/chat' element={checkUser?<ChatPage/>:<Navigate to="/"/>}/>
       </Routes>
    </div>
  );
}

export default App;
