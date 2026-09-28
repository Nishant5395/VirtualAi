// import React, { useEffect, useRef } from 'react'
// import { useSelector } from 'react-redux'
// import MessageBubble from './MessageBubble'
// import LoadingAnimation from './LoadingAnimation'

// function MessageList() {
//     const {selectedConversation}=useSelector(state=>state.conversation)
//     const {messages,isLoading}=useSelector(state=>state.message)
//     const bottemRef=useRef(null)
   
//    useEffect(()=>{
//        requestAnimationFrame(()=>{
//         bottemRef?.current?.scrollIntoView({
//           behavior:"smooth",
//           block:"end"
//         })
//        })
//    },[messages?.length,isLoading])


//   return (
//     <div className='flex-1 overflow-y-auto px-6 py-6 space-y-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
      
//       {messages.length==0 || !selectedConversation ?(
//         <div className="h-full flex flex-col items-center justify-center gap-4 text-center">
//            <div className='flex flex-col gap-1.5'>
//                <h1 className='text-[20px] font-semibold text-slate-200 tracking-tight'>VirtualAi</h1>
//                <p className='text-[15px] font-semibold text-slate-400 tracking-tight'>How can I help you?</p>
//                <p className='text-[13px] text-slate-600 max-w-[260px] leading-relaxed'>Ask me anything — code, ideas, explanations, or just a quick question.</p>
//            </div>
//            <div className='flex flex-wrap justify-center gap-2 mt-1'>
//             {["Write a Netflix clone", "Explain Redis", "Build a dashboard"].map((s)=>(
//               <button className='text-[12px] text-slate-400 bg-white/[0.04] border border-white/[0.07] px-3.5 py-1.5 rounded-lg hover:bg-white/[0.08] hover:text-slate-200 transition-colors duration-150 cursor-pointer'>
//                 {s}
//               </button>
//             ))}
//            </div>
//         </div>
//       ):
//       <div className='space-y-5'>

//         {messages?.map((msg,i)=>(
//             <div>
//                <MessageBubble role={msg?.role} content={msg?.content} images={msg.images || []} /> 
//             </div>
//         ))}

//         {isLoading && <LoadingAnimation/>}

        
//       </div>
//       }
//       <div ref={bottemRef}/>
//     </div>
//   )
// }

// export default MessageList

import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import MessageBubble from './MessageBubble'
import LoadingAnimation from './LoadingAnimation'

const SUGGESTIONS = [
  {
    title: 'Clone a product',
    subtitle: 'Build a Netflix-style streaming UI',
    icon: '🎬',
  },
  {
    title: 'Learn a concept',
    subtitle: 'Break down how Redis works',
    icon: '⚡',
  },
  {
    title: 'Ship a dashboard',
    subtitle: 'Design an analytics dashboard',
    icon: '📊',
  },
  {
    title: 'Debug something',
    subtitle: 'Find and fix a tricky bug',
    icon: '🛠️',
  },
]

function MessageList() {
  const { selectedConversation } = useSelector((state) => state.conversation)
  const { messages, isLoading } = useSelector((state) => state.message)
  const bottomRef = useRef(null)

  useEffect(() => {
    requestAnimationFrame(() => {
      bottomRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })
    })
  }, [messages?.length, isLoading])

  const isEmpty = messages.length === 0 || !selectedConversation

  return (
    <div className="relative flex-1 overflow-y-auto px-6 py-6 space-y-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {/* subtle ambient glow behind content */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-64 bg-gradient-to-b from-indigo-500/[0.06] via-transparent to-transparent -z-10" />

      {isEmpty ? (
        <div className="h-full flex flex-col items-center justify-center gap-8 text-center animate-ml-fade-up">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-14 h-14 flex items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/25 via-fuchsia-500/15 to-transparent blur-md animate-ml-pulse" />
              <span className="absolute inset-0 rounded-full border border-white/[0.08]" />
              <span className="absolute inset-[5px] rounded-full border border-white/[0.06]" />
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500/90 to-fuchsia-500/90 shadow-[0_4px_20px_-4px_rgba(168,85,247,0.65)] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none">
                  <path
                    d="M12 3l2.2 5.6L20 10.8l-5.8 2.2L12 19l-2.2-6-5.8-2.2 5.8-2.2L12 3z"
                    fill="white"
                    fillOpacity="0.95"
                  />
                </svg>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <h1 className="text-[21px] font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400">
                VirtualAi
              </h1>
              <p className="text-[13px] font-medium tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-slate-300 to-fuchsia-300">
                How can I help you?
              </p>
              <p className="text-[14px] text-slate-400 max-w-[300px] leading-relaxed mt-0.5">
                Your <span className="text-slate-300 font-medium">ideas</span>, <span className="text-slate-300 font-medium">questions</span>, and half-finished thoughts —{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-fuchsia-300 font-medium">
                  all welcome here
                </span>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-[420px]">
            {SUGGESTIONS.map((s, idx) => (
              <button
                key={s.title}
                style={{ animationDelay: `${idx * 60}ms` }}
                className="group flex items-center gap-3 text-left bg-white/[0.025] border border-white/[0.06] px-3.5 py-2.5 rounded-xl
                           hover:bg-white/[0.05] hover:border-white/[0.1]
                           active:scale-[0.98] transition-all duration-200 ease-out cursor-pointer animate-ml-fade-up"
              >
                <span className="shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.05] flex items-center justify-center text-[13px]
                                  group-hover:scale-105 transition-transform duration-200">
                  {s.icon}
                </span>
                <span className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-[12.5px] font-semibold tracking-tight text-slate-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-fuchsia-300 transition-all truncate">
                    {s.title}
                  </span>
                  <span className="text-[11px] text-slate-500 group-hover:text-slate-400 transition-colors truncate">
                    {s.subtitle}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          {messages?.map((msg, i) => (
            <div
              key={msg?.id ?? i}
              className="animate-ml-fade-up"
              style={{ animationDelay: `${Math.min(i, 6) * 35}ms` }}
            >
              <MessageBubble role={msg?.role} content={msg?.content} images={msg.images || []} />
            </div>
          ))}

          {isLoading && (
            <div className="animate-ml-fade-up">
              <LoadingAnimation />
            </div>
          )}
        </div>
      )}

      <div ref={bottomRef} />

      {/* local keyframes — no extra deps / tailwind config changes required */}
      <style>{`
        @keyframes ml-fade-up {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-ml-fade-up {
          animation: ml-fade-up 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes ml-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
        .animate-ml-pulse {
          animation: ml-pulse 2.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default MessageList