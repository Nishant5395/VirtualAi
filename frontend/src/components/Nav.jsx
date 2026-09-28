// import { MessageSquare } from 'lucide-react'
// import React from 'react'
// import { useSelector } from 'react-redux'

// function Nav() {
// const {selectedConversation}=useSelector(state=>state.conversation)
// const {messages}=useSelector(state=>state.message)
//   return (
// <>
//     {selectedConversation &&   <div className='h-14 flex items-center gap-2.5  px-5 border-b border-white/[0.06] bg-[#0d0f14]'>
//       <div className='flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20'>
//         <MessageSquare size={13} className="text-indigo-400"/>
//       </div>
//       <div className='text-[14px] font-semibold text-slate-100 tracking-tight'>
// {selectedConversation?.title || "New Chat"}
//       </div>
//       <div className='text-[10px] font-medium text-slate-600 bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded-full'>
//         {messages?.length} Messages
//       </div>
//     </div>}
//   </>
//   )
// }

// export default Nav


import { MessageSquare } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'

function Nav() {
  const { selectedConversation } = useSelector(state => state.conversation)
  const { messages } = useSelector(state => state.message)

  return (
    <>
      {selectedConversation && (
        <div className='sticky top-0 z-10 h-14 flex items-center gap-3 px-5 border-b border-white/[0.06] bg-[#0a0c10]/80 backdrop-blur-md'>
          <div className='relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/90 to-fuchsia-500/90 shrink-0 shadow-[0_2px_10px_-2px_rgba(168,85,247,0.5)]'>
            <MessageSquare size={13} className="text-white" />
            <span className='absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#0a0c10]' />
          </div>

          <div className='min-w-0 flex-1'>
            <div className='text-[14px] font-semibold text-slate-100 tracking-tight truncate'>
              {selectedConversation?.title || "New Chat"}
            </div>
          </div>

          <div className='flex items-center gap-1.5 text-[10.5px] font-medium text-slate-400 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full shrink-0'>
            <span className='w-1.5 h-1.5 rounded-full bg-gradient-to-br from-indigo-400 to-fuchsia-400' />
            {messages?.length || 0} {messages?.length === 1 ? "Message" : "Messages"}
          </div>
        </div>
      )}
    </>
  )
}

export default Nav