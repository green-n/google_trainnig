import { onSnapshot, orderBy, query } from 'firebase/firestore'
import React, {useState,useEffect, useRef} from 'react'
import SendMessage from './messageSender'



const style = {
    main: `flex flex-col h-[90vh] bg-gray-200 mt-[1vh] shadow-xl border relative overflow-y-scroll mb-[9vh]`,
    
}

const Chat = () => {
    const scroll = useRef()

    const [messages,setMessages] = useState([])
   

    
  return (
    <>
    <main className={style.main}>

     

    </main >
    <SendMessage />
    
    </>
  )
}

export default Chat