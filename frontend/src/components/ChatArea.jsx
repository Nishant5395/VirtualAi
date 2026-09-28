// import React, { useEffect } from 'react'
// import Nav from './Nav'
// import MessageList from './MessageList'
// import ChatInput from './ChatInput'
// import { useDispatch, useSelector } from 'react-redux'
// import getMessages from '../features/getMessages'
// import { setArtifacts, setMessages } from '../redux/messageSlice'

// function ChatArea() {
//   const {selectedConversation}=useSelector(state=>state.conversation)
//   const dispatch=useDispatch()
//   useEffect(()=>{
//   const getMesg=async () => {
    
//     if(selectedConversation){
//       if(selectedConversation.title=="New Chat")return;
// const data=await getMessages(selectedConversation?._id)
// console.log(data)
//       dispatch(setMessages(data))
//       const latestArtifactMessage=[...data].reverse().find(msg=>msg.artifacts && msg.artifacts.length>0)
//       dispatch(setArtifacts(latestArtifactMessage?.artifacts || []))
//     }
    
//   }

//   getMesg()
//   },[selectedConversation?._id])
//   return (
//     <div className='flex-1 flex flex-col min-w-0'>
//       <Nav/>
//       <MessageList/>
//       <ChatInput/>
//     </div>
//   )
// }

// export default ChatArea


import React, { useEffect } from 'react'
import Nav from './Nav'
import MessageList from './MessageList'
import ChatInput from './ChatInput'
import { useDispatch, useSelector } from 'react-redux'
import getMessages from '../features/getMessages'
import { setArtifacts, setMessages } from '../redux/messageSlice'

function ChatArea() {
  const { selectedConversation } = useSelector(state => state.conversation)
  const dispatch = useDispatch()

  useEffect(() => {
    const getMesg = async () => {
      if (selectedConversation) {
        if (selectedConversation.title == "New Chat") return;

        const data = await getMessages(selectedConversation?._id)
        dispatch(setMessages(data))

        const latestArtifactMessage = [...data].reverse().find(msg => msg.artifacts && msg.artifacts.length > 0)
        dispatch(setArtifacts(latestArtifactMessage?.artifacts || []))
      }
    }

    getMesg()
  }, [selectedConversation?._id])

  return (
    <div className='relative flex-1 flex flex-col min-w-0 bg-[#0a0c10] overflow-hidden'>
      {/* ambient background glow, shared across the whole chat area */}
      <div className='pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-indigo-500/[0.05] via-fuchsia-500/[0.02] to-transparent -z-10' />

      <Nav />
      <MessageList />
      <ChatInput />
    </div>
  )
}

export default ChatArea