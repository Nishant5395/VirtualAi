// import { Code2, FileText, Globe, ImageIcon, MessageSquare, Mic, MicOff, Paperclip, Presentation, Send, X, Zap } from 'lucide-react'
// import React, { useEffect, useState } from 'react'
// import sendMessage from '../features/sendMessage'
// import { useDispatch, useSelector } from 'react-redux'
// import { addMessage, setArtifacts, setIsLoading, setMessages } from '../redux/messageSlice'
// import { createConversation } from '../features/createConversation'
// import { addConversation, setConvTitle, setSelectedConversation } from '../redux/conversationSlice'
// import { updateConversation } from '../features/updateConversation'
// import { useRef } from 'react'


// function ChatInput() {
//   const [value, setValue] = useState("")
//   const [selectedAgent, setSelectedAgent] = useState("Auto")
//   const { selectedConversation } = useSelector(state => state.conversation)
//   const { messages, isLoading } = useSelector(state => state.message)
//   const [selectedFile, setSelectedFile] = useState(null)
//   const [listening, setListening] = useState(false)
//   const recognitionRef = useRef(null)
//   const fileRef = useRef(null)
//   const dispatch = useDispatch()


//   useEffect(() => {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
//     if (!SpeechRecognition) return;

//     const recognition = new SpeechRecognition()
//     recognition.lang = "en-US"
//     recognition.interimResults = true;
//     recognition.continuous = true;

//     recognition.onresult = (event) => {
//       let transcript = ""

//       for (let index = event.resultIndex; index < event.results.length; index++) {

//         transcript += event.results[index][0].transcript
//       }
//       setValue(transcript)
//     }

//     recognition.onend = () => {
//       setListening(false)
//     }

//     recognitionRef.current = recognition
//   }, [])

//   const toggleMic = () => {
//     if (!recognitionRef.current) {
//       alert("speech recognition not supported")
//     }
//     if (listening) {
//       recognitionRef.current.stop()
//       setListening(false)
//     } else {
//       recognitionRef.current.start()
//       setListening(true)
//     }

//   }








//   const handleSendMessage = async () => {
//     dispatch(setIsLoading(true))
//     let conversation = selectedConversation
//     if (!conversation) {
//       dispatch(setMessages([]))
//       const conv = await createConversation()
//       dispatch(setSelectedConversation(conv))

//       dispatch(addConversation(conv))
//       conversation = conv
//     }

//     if (conversation.title == "New Chat") {
//       await updateConversation({ id: conversation?._id, title: value.trim() })
//       dispatch(setConvTitle({ conversationId: conversation?._id, title: value.slice(0, 40) }))
//     }


//     console.log(selectedFile)
//     const formData = new FormData()
//     formData.append("prompt", value.trim())
//     formData.append("conversationId", conversation?._id)
//     formData.append("agent", selectedAgent.toLowerCase())
//     if (selectedFile) {
//       formData.append("file", selectedFile)
//     }



//     dispatch(addMessage({ role: "user", content: value.trim() }))
//     setValue("")
//     const data = await sendMessage(formData)
//     dispatch(setIsLoading(false))
//     setSelectedFile(null)
//     dispatch(setArtifacts(data.artifacts || []))
//     dispatch(addMessage({ role: "assistant", content: data?.answer, images: data?.images }))
//     console.log(data)
//   }

//   const agents = [
//     {
//       id: "auto",
//       icon: Zap,
//       label: "Auto"
//     },

//     {
//       id: "chat",
//       icon: MessageSquare,
//       label: "Chat"
//     },

//     {
//       id: "coding",
//       icon: Code2,
//       label: "Coding"
//     },

//     {
//       id: "pdf",
//       icon: FileText,
//       label: "PDF"
//     },

//     {
//       id: "ppt",
//       icon: Presentation,
//       label: "PPT"
//     },

//     {
//       id: "vision",
//       icon: ImageIcon,
//       label: "Vision"
//     },

//     {
//       id: "search",
//       icon: Globe,
//       label: "Search"
//     }

//   ]

//   return (
//     <div className='w-full overflow-hidden px-3 md:px-5 py-4 border-t border-white/[0.06] bg-[#0d0f14]'>
//       <div className='flex flex-col gap-2 bg-white/[0.03] border border-white/[0.07] rounded-2xl px-4 pt-3.5 pb-3'>

//         <div className='flex w-[80%] gap-2 pr-2 flex-wrap'>
//           {agents.map((agent) => {
//             const isActive = selectedAgent === agent.label
//             const Icon = agent.icon
//             return (
//               <div
//                 onClick={() => setSelectedAgent(agent.label)}
//                 className={`
//             flex-shrink-0
//             cursor-pointer
//             inline-flex
//             items-center
//             gap-1.5
//             px-3
//             py-2
//             rounded-full
//             text-xs
//             font-medium
//             border
//             transition-all

//             ${isActive
//                     ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white border-transparent shadow-[0_1px_8px_rgba(99,102,241,.35)]"
//                     : "bg-white/[0.03] text-slate-400 border-white/[0.06] hover:bg-white/[0.07]"
//                   }
//           `}>

//                 <Icon size={14}
//                   className={
//                     isActive
//                       ? "text-white"
//                       : "text-slate-500"
//                   } />

//                 {agent.label}

//               </div>
//             )

//           })}
//         </div>

//         {
//           selectedFile && <div className='my-3'>

//             <div className='inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2'>
//               {
//                 selectedFile?.type === "application/pdf" ? <FileText size={16}

//                   className="text-red-400"
//                 /> : selectedFile.type.startsWith("image/") && <img src={URL.createObjectURL(selectedFile)} className="h-10 w-10 rounded-xl object-cover mt-3"
//                 />
//               }

//               <div>
//                 <p className='text-xs text-white'>
//                   {selectedFile?.name}
//                 </p>
//                 <p className='text-[10px] text-slate-500'>
//                   {Math.ceil(selectedFile.size)}KB
//                 </p>

//               </div>
//               <button className='ml-2' onClick={() => { setSelectedFile(null); fileRef.current.value = "" }}><X size={14} className='text-slate-500 hover:text-white' /></button>
//             </div>


//           </div>
//         }


//         <textarea
//           placeholder='Ask Anything...'
//           onChange={(e) => setValue(e.target.value)}
//           value={value}
//           className="w-full bg-transparent outline-none resize-none text-[14px] text-slate-200 placeholder:text-slate-600 leading-relaxed [scrollbar-width:none] [&::-webkit-scrollbar]:hidden disabled:opacity-50"
//           rows={3}
//         />
//         <div className='flex items-center justify-between'>
//           <div className='flex items-center gap-1'>

//             <input type="file" accept='.pdf,image/*' hidden ref={fileRef} onChange={(e) => {
//               const file = e.target.files[0]
//               if (file) {
//                 setSelectedFile(file)
//               }
//             }} />

//             <button className='flex items-center justify-center w-8 h-8 rounded-lg text-slate-600 hover:text-slate-400 hover:bg-white/[0.05] border border-transparent hover:border-white/[0.06] transition-all duration-150 bg-transparent cursor-pointer' onClick={() => fileRef.current.click()}>
//               <Paperclip size={16} />
//             </button>
//             <button
//               onClick={toggleMic}
//               className={`flex items-center justify-center w-8 h-8 rounded-lg  transition-all duration-150 cursor-pointer ${listening ?"bg-red-500 text-white":"text-slate-600 hover:bg-white/[0.05]" }`}>
//              {listening?<Mic size={16} />:<MicOff size={16}/>} 
//             </button>
//           </div>
//           <button
//             disabled={!value && isLoading}
//             onClick={handleSendMessage}
//             className={`flex items-center justify-center w-8 h-8 rounded-lg border-none cursor-pointer transition-all duration-150 ${value.trim() ? "bg-linear-to-br from-indigo-500 to-violet-700 hover:opacity-90 text-white" : "bg-white/[0.05] text-slate-600 cursor-not-allowed"}`}>
//           <Send size={15} />
//         </button>
//       </div>
//     </div>
//     </div >
//   )
// }

// export default ChatInput


import { Code2, FileText, Globe, ImageIcon, MessageSquare, Mic, MicOff, Paperclip, Presentation, Send, X, Zap } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import sendMessage from '../features/sendMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage, setArtifacts, setIsLoading, setMessages } from '../redux/messageSlice'
import { createConversation } from '../features/createConversation'
import { addConversation, setConvTitle, setSelectedConversation } from '../redux/conversationSlice'
import { updateConversation } from '../features/updateConversation'
import { useRef } from 'react'

function ChatInput() {
  const [value, setValue] = useState("")
  const [selectedAgent, setSelectedAgent] = useState("Auto")
  const { selectedConversation } = useSelector(state => state.conversation)
  const { messages, isLoading } = useSelector(state => state.message)
  const [selectedFile, setSelectedFile] = useState(null)
  const [listening, setListening] = useState(false)
  const recognitionRef = useRef(null)
  const fileRef = useRef(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition()
    recognition.lang = "en-US"
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onresult = (event) => {
      let transcript = ""

      for (let index = event.resultIndex; index < event.results.length; index++) {
        transcript += event.results[index][0].transcript
      }
      setValue(transcript)
    }

    recognition.onend = () => {
      setListening(false)
    }

    recognitionRef.current = recognition
  }, [])

  const toggleMic = () => {
    if (!recognitionRef.current) {
      alert("speech recognition not supported")
    }
    if (listening) {
      recognitionRef.current.stop()
      setListening(false)
    } else {
      recognitionRef.current.start()
      setListening(true)
    }
  }

  const handleSendMessage = async () => {
    dispatch(setIsLoading(true))
    let conversation = selectedConversation
    if (!conversation) {
      dispatch(setMessages([]))
      const conv = await createConversation()
      dispatch(setSelectedConversation(conv))

      dispatch(addConversation(conv))
      conversation = conv
    }

    if (conversation.title == "New Chat") {
      await updateConversation({ id: conversation?._id, title: value.trim() })
      dispatch(setConvTitle({ conversationId: conversation?._id, title: value.slice(0, 40) }))
    }

    const formData = new FormData()
    formData.append("prompt", value.trim())
    formData.append("conversationId", conversation?._id)
    formData.append("agent", selectedAgent.toLowerCase())
    if (selectedFile) {
      formData.append("file", selectedFile)
    }

    dispatch(addMessage({ role: "user", content: value.trim() }))
    setValue("")
    const data = await sendMessage(formData)
    dispatch(setIsLoading(false))
    setSelectedFile(null)
    dispatch(setArtifacts(data.artifacts || []))
    dispatch(addMessage({ role: "assistant", content: data?.answer, images: data?.images }))
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (value.trim() && !isLoading) handleSendMessage()
    }
  }

  const agents = [
    { id: "auto", icon: Zap, label: "Auto" },
    { id: "chat", icon: MessageSquare, label: "Chat" },
    { id: "coding", icon: Code2, label: "Coding" },
    { id: "pdf", icon: FileText, label: "PDF" },
    { id: "ppt", icon: Presentation, label: "PPT" },
    { id: "vision", icon: ImageIcon, label: "Vision" },
    { id: "search", icon: Globe, label: "Search" },
  ]

  const canSend = value.trim().length > 0 && !isLoading

  return (
    <div className='w-full overflow-hidden px-3 md:px-5 py-4 border-t border-white/[0.06] bg-[#0a0c10]'>
      <div className='relative w-full'>
        {/* soft focus glow behind the input card */}
        <div className='pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-fuchsia-500/0 focus-within:from-indigo-500/20 focus-within:to-fuchsia-500/20 transition-all duration-300 blur-md -z-10' />

        <div className='flex flex-col gap-2.5 bg-white/[0.035] backdrop-blur-sm border border-white/[0.08] rounded-2xl px-4 pt-3.5 pb-3 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.5)] focus-within:border-white/[0.16] transition-colors duration-200'>

          <div className='flex gap-1.5 overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
            {agents.map((agent) => {
              const isActive = selectedAgent === agent.label
              const Icon = agent.icon
              return (
                <div
                  key={agent.id}
                  onClick={() => setSelectedAgent(agent.label)}
                  className={`
                    shrink-0 cursor-pointer inline-flex items-center gap-1.5
                    px-3 py-1.5 rounded-full text-[12px] font-medium border
                    transition-all duration-150 select-none
                    ${isActive
                      ? "bg-gradient-to-r from-indigo-500 to-fuchsia-600 text-white border-transparent shadow-[0_2px_12px_-3px_rgba(168,85,247,0.5)]"
                      : "bg-white/[0.03] text-slate-400 border-white/[0.06] hover:bg-white/[0.07] hover:text-slate-200 hover:border-white/[0.1]"
                    }
                  `}
                >
                  <Icon size={13} className={isActive ? "text-white" : "text-slate-500"} />
                  {agent.label}
                </div>
              )
            })}
          </div>

          {selectedFile && (
            <div className='inline-flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2 w-fit max-w-full'>
              {selectedFile?.type === "application/pdf" ? (
                <div className='shrink-0 w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center'>
                  <FileText size={16} className="text-red-400" />
                </div>
              ) : (
                selectedFile.type.startsWith("image/") && (
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    className="h-9 w-9 rounded-lg object-cover shrink-0"
                  />
                )
              )}

              <div className='min-w-0'>
                <p className='text-[12.5px] font-medium text-slate-200 truncate max-w-[180px]'>
                  {selectedFile?.name}
                </p>
                <p className='text-[10.5px] text-slate-500'>
                  {Math.ceil(selectedFile.size / 1024)}KB
                </p>
              </div>

              <button
                className='ml-1 shrink-0 w-5 h-5 flex items-center justify-center rounded-full hover:bg-white/[0.08] transition-colors duration-150'
                onClick={() => { setSelectedFile(null); fileRef.current.value = "" }}
              >
                <X size={13} className='text-slate-500 hover:text-white' />
              </button>
            </div>
          )}

          <textarea
            placeholder='Ask Anything...'
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            value={value}
            className="w-full bg-transparent outline-none resize-none text-[14.5px] text-slate-200 placeholder:text-slate-600 leading-relaxed [scrollbar-width:none] [&::-webkit-scrollbar]:hidden disabled:opacity-50"
            rows={3}
          />

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-1'>
              <input
                type="file"
                accept='.pdf,image/*'
                hidden
                ref={fileRef}
                onChange={(e) => {
                  const file = e.target.files[0]
                  if (file) {
                    setSelectedFile(file)
                  }
                }}
              />

              <button
                className='flex items-center justify-center w-8 h-8 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all duration-150 bg-transparent cursor-pointer'
                onClick={() => fileRef.current.click()}
              >
                <Paperclip size={16} />
              </button>

              <button
                onClick={toggleMic}
                className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-150 cursor-pointer ${listening
                    ? "bg-red-500 text-white shadow-[0_2px_12px_-3px_rgba(239,68,68,0.6)] animate-mic-pulse"
                    : "text-slate-500 hover:text-slate-200 hover:bg-white/[0.06]"
                  }`}
              >
                {listening ? <Mic size={16} /> : <MicOff size={16} />}
              </button>
            </div>

            <button
              disabled={!canSend}
              onClick={handleSendMessage}
              className={`flex items-center justify-center w-9 h-9 rounded-xl border-none cursor-pointer transition-all duration-150 active:scale-[0.94] ${canSend
                  ? "bg-gradient-to-br from-indigo-500 to-fuchsia-600 hover:opacity-90 text-white shadow-[0_4px_16px_-4px_rgba(168,85,247,0.55)]"
                  : "bg-white/[0.05] text-slate-600 cursor-not-allowed"
                }`}
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes mic-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(239,68,68,0.45); }
          50% { box-shadow: 0 0 0 6px rgba(239,68,68,0); }
        }
        .animate-mic-pulse {
          animation: mic-pulse 1.6s ease-out infinite;
        }
      `}</style>
    </div>
  )
}

export default ChatInput
