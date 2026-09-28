// import { Check, Copy, ExternalLink, FileX2, X } from 'lucide-react'
// import React from 'react'
// import { useState } from 'react'
// import Markdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
// function MessageBubble({ role, content, images }) {
//   const isUser = role === "user"
//   const [lightBox, setLightBox] = useState(null)
//   const [copiedCode, setCopiedCode] = useState("")

//   const copyCode = async (code) => {
//     await navigator.clipboard.writeText(code)
//     setCopiedCode(code)
//     setTimeout(() => {
//       setCopiedCode("")
//     }, 2000)
//   }


//   return (
//     <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
//       <div className={`w-fit max-w-[92vw] md:max-w-[72%]
//   px-4 py-2.5 rounded-2xl
//   break-words overflow-hidden
//   leading-relaxed
//         ${isUser
//           ? "bg-gradient-to-br from-indigo-500 to-violet-700 text-white rounded-tr-sm"
//           : " text-slate-200 rounded-tl-sm"
//         }`}>


//         {images.length > 0 && (
//           <div className='flex flex-wrap gap-3 mt-4'>
//             {images.map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 onClick={() => setLightBox(img)}
//                 loading="lazy"
//                 onError={(e) => e.currentTarget.remove()}
//                 className="w-40 h-28 rounded-xl object-cover border border-white/10 cursor-zoom-in hover:opacity-90 transition"

//               />
//             ))}
//           </div>
//         )}


//         <Markdown
//           remarkPlugins={[remarkGfm]}
//           components={{
//             h1: ({ children }) => (
//               <h1 className='text-2xl font-bold mt-5 mb-3'>{children}</h1>
//             ),
//             h2: ({ children }) => (
//               <h2 className='text-xl font-semibold mt-4 mb-2'>{children}</h2>
//             ),
//             h3: ({ children }) => (
//               <h3 className='text-lg font-semibold mt-3 mb-2'>{children}</h3>
//             ),
//             p: ({ children }) => (
//               <p className='mb-3 whitespace-pre-wrap break-words'>{children}</p>
//             ),
//             ul: ({ children }) => (
//               <ul className='list-disc pl-5 space-y-1 my-2'>{children}</ul>
//             ),
//             ol: ({ children }) => (
//               <ol className='list-decimal pl-5 space-y-1 my-2'>{children}</ol>
//             ),
//             table: ({ children }) => (
//               <div className='overflow-x-auto my-4'>
//                 <table className='min-w-full border border-white/10'>
//                   {children}
//                 </table>
//               </div>
//             ),
//             th: ({ children }) => (

//               <th className='border border-white/10 bg-white/5 px-3 py-2 text-left'>
//                 {children}
//               </th>

//             ),
//             td: ({ children }) => (

//               <td className='border border-white/10 px-3 py-2'>
//                 {children}
//               </td>

//             ),

//             a: ({ href, children }) => (

//               <a href={href}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-indigo-400 underline inline-flex items-center gap-1"
//               >
//                 {children}
//                 <ExternalLink size={14} />
//               </a>

//             ),
//             code: ({ className, children }) => {
//               const value = String(children).trim()
              

//               if (!className) {
//                 return (
//                   <code className='px-1.5 py-0.5 rounded bg-white/10 text-indigo-200'>
//                     {value}
//                   </code>
//                 )

//               }

//               const language = className.replace("language-", "")

//               return (
//                 <div className='my-4 overflow-hidden rounded-xl border border-white/10 bg-[#111318]'>
//                   <div className='flex items-center justify-between bg-[#1b1d24] border-b border-white/10 px-4 py-2'>
//                     <span className='uppercase text-xs text-slate-400'>
//                       {language}
//                     </span>
//                     <button className='flex items-center gap-1 text-xs' 
//                     onClick={() => copyCode(value)}>
//                       {
//                         copiedCode == value ?
//                           <>
//                             <Check size={14}/>
//                             Copied
//                           </> :
//                           <><Copy size={14} />Copy</>
//                       }
//                     </button>
//                   </div>


//                   <SyntaxHighlighter
//                     language={language}
//                     style={oneDark}
//                     wrapLongLines
//                     showLineNumbers
//                     customStyle={{
//                       margin: 0,
//                       padding: "16px",
//                       background: "#0d1117",
//                       fontSize: "13px",
//                     }}

//                   >
//                     {value}
//                   </SyntaxHighlighter>


//                 </div>
//               )
//             },
//           img:({src})=>{
//             if(!src)return null;
//             return (
//               <img
//                 src={src}
//                 onClick={() => setLightBox(src)}
//                 loading="lazy"
//                 onError={(e) => e.currentTarget.remove()}
//                 className="w-40 h-28 rounded-xl object-cover border border-white/10 cursor-zoom-in hover:opacity-90 transition"
//               />
//             )
//           }





//           }}
//         >
//           {content}
//         </Markdown>



//       </div>
//       {lightBox &&
//         <div className='fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6'>
//           <button
//             className='absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 rounded-full p-2'
//             onClick={() => setLightBox(null)}
//           >
//             <X />
//           </button>
//           <img
//             src={lightBox}
//             className="max-w-[90vw] max-h-[85vh] rounded-2xl border border-white/10 shadow-2xl object-contain"

//           />

//         </div>}
//     </div>
//   )
// }

// export default MessageBubble



import { Check, Copy, ExternalLink, FileX2, X } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

function MessageBubble({ role, content, images }) {
  const isUser = role === "user"
  const [lightBox, setLightBox] = useState(null)
  const [copiedCode, setCopiedCode] = useState("")

  const copyCode = async (code) => {
    await navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => {
      setCopiedCode("")
    }, 2000)
  }

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`w-fit max-w-[92vw] md:max-w-[72%]
  px-4 py-2.5 rounded-2xl
  break-words overflow-hidden
  leading-relaxed
        ${isUser
            ? "bg-gradient-to-br from-indigo-500 to-fuchsia-600 text-white rounded-tr-sm shadow-[0_4px_20px_-8px_rgba(168,85,247,0.55)]"
            : "bg-white/[0.03] border border-white/[0.06] text-slate-200 rounded-tl-sm"
          }`}
      >
        {images.length > 0 && (
          <div className='flex flex-wrap gap-3 mt-4'>
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setLightBox(img)}
                loading="lazy"
                onError={(e) => e.currentTarget.remove()}
                className="w-40 h-28 rounded-xl object-cover border border-white/10 cursor-zoom-in hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
              />
            ))}
          </div>
        )}

        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className='text-2xl font-bold mt-5 mb-3 tracking-tight'>{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className='text-xl font-semibold mt-4 mb-2 tracking-tight'>{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className='text-lg font-semibold mt-3 mb-2 tracking-tight'>{children}</h3>
            ),
            p: ({ children }) => (
              <p className='mb-3 whitespace-pre-wrap break-words'>{children}</p>
            ),
            ul: ({ children }) => (
              <ul className='list-disc pl-5 space-y-1.5 my-2 marker:text-indigo-400/70'>{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className='list-decimal pl-5 space-y-1.5 my-2 marker:text-indigo-400/70 marker:font-medium'>{children}</ol>
            ),
            blockquote: ({ children }) => (
              <blockquote className='border-l-2 border-indigo-400/40 pl-3.5 my-3 text-slate-400 italic'>
                {children}
              </blockquote>
            ),
            hr: () => <hr className='my-4 border-white/10' />,
            table: ({ children }) => (
              <div className='overflow-x-auto my-4 rounded-xl border border-white/10'>
                <table className='min-w-full text-[13.5px]'>
                  {children}
                </table>
              </div>
            ),
            th: ({ children }) => (
              <th className='border-b border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-left font-semibold text-slate-200'>
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className='border-b border-white/[0.06] px-3.5 py-2.5 text-slate-300'>
                {children}
              </td>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-300 hover:text-indigo-200 underline decoration-indigo-400/30 hover:decoration-indigo-300 underline-offset-2 inline-flex items-center gap-1 transition-colors duration-150"
              >
                {children}
                <ExternalLink size={13} />
              </a>
            ),
            code: ({ className, children }) => {
              const value = String(children).trim()

              if (!className) {
                return (
                  <code className='px-1.5 py-0.5 rounded-md bg-indigo-500/[0.12] border border-indigo-500/[0.15] text-indigo-200 text-[0.9em] font-medium'>
                    {value}
                  </code>
                )
              }

              const language = className.replace("language-", "")

              return (
                <div className='my-4 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0f14] shadow-[0_8px_28px_-14px_rgba(0,0,0,0.6)]'>
                  <div className='flex items-center justify-between bg-white/[0.03] border-b border-white/[0.08] px-4 py-2.5'>
                    <span className='flex items-center gap-2 uppercase text-[11px] font-semibold tracking-wide text-slate-500'>
                      <span className='flex gap-1'>
                        <span className='w-2 h-2 rounded-full bg-red-500/60' />
                        <span className='w-2 h-2 rounded-full bg-yellow-500/60' />
                        <span className='w-2 h-2 rounded-full bg-green-500/60' />
                      </span>
                      {language}
                    </span>
                    <button
                      className='group flex items-center gap-1.5 text-[11.5px] font-medium text-slate-400 hover:text-slate-100 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.12] px-2.5 py-1 rounded-lg transition-all duration-150'
                      onClick={() => copyCode(value)}
                    >
                      {copiedCode == value ? (
                        <>
                          <Check size={13} className='text-emerald-400' />
                          <span className='text-emerald-400'>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} className='group-hover:scale-105 transition-transform' />
                          Copy
                        </>
                      )}
                    </button>
                  </div>

                  <SyntaxHighlighter
                    language={language}
                    style={oneDark}
                    wrapLongLines
                    showLineNumbers
                    customStyle={{
                      margin: 0,
                      padding: "16px",
                      background: "#0a0c10",
                      fontSize: "13px",
                    }}
                  >
                    {value}
                  </SyntaxHighlighter>
                </div>
              )
            },
            img: ({ src }) => {
              if (!src) return null;
              return (
                <img
                  src={src}
                  onClick={() => setLightBox(src)}
                  loading="lazy"
                  onError={(e) => e.currentTarget.remove()}
                  className="w-40 h-28 rounded-xl object-cover border border-white/10 cursor-zoom-in hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
                />
              )
            },
          }}
        >
          {content}
        </Markdown>
      </div>

      {lightBox && (
        <div className='fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-6 animate-mb-fade-in'>
          <button
            className='absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/15 rounded-full p-2 transition-colors duration-150 cursor-pointer'
            onClick={() => setLightBox(null)}
          >
            <X size={18} />
          </button>
          <img
            src={lightBox}
            className="max-w-[90vw] max-h-[85vh] rounded-2xl border border-white/10 shadow-2xl object-contain animate-mb-zoom-in"
          />
        </div>
      )}

      <style>{`
        @keyframes mb-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-mb-fade-in {
          animation: mb-fade-in 0.18s ease-out both;
        }
        @keyframes mb-zoom-in {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-mb-zoom-in {
          animation: mb-zoom-in 0.22s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>
    </div>
  )
}

export default MessageBubble