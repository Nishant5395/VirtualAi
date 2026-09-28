// import React from 'react'
// import { AnimatePresence, motion } from "motion/react"
// import { Crown, X } from 'lucide-react'
// import { useSelector } from 'react-redux'
// import { createOrder } from '../features/createOrder'
// import { verifyPayment } from '../features/verifyPayment'
// function BillingDrawer({ open, onClose }) {

//     const { userData } = useSelector(state => state.user)

//     const handleUpgrade = async (plan) => {
//         try {
//             const data = await createOrder(plan)
//             const options = {
//                 key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//                 amount: data?.order?.amount,
//                 currency: data?.order?.currency,
//                 name: "VirtualAi",
//                 description: `${data?.plan?.name} Plan`,
//                 order_id: data?.order?.id,
//                 handler: async (response) => {
//                     try {
//                         const data = await verifyPayment(response)
//                         console.log(data)
//                     } catch (error) {
//                         console.log(error)
//                     }
//                 },
//                 theme: {
//                     color: "#4F46E5"
//                 }
//             }

//             const razorpay = new window.Razorpay(options)
//             razorpay.open()
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     return (
//         <AnimatePresence>
//             {open && <> <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: .5 }}
//                 exit={{ opacity: 0 }}
//                 onClick={onClose}
//                 className="fixed inset-0 bg-black z-40"
//             />
//                 <motion.div
//                     initial={{ x: "100%" }}
//                     animate={{ x: 0 }}
//                     exit={{ x: "100%" }}
//                     transition={{ duration: .25 }}
//                     className="fixed right-0 top-0 z-50 h-screen w-[380px] bg-[#0f1117] border-l border-white/10 shadow-2xl flex flex-col"

//                 >

//                     <div className='flex items-center justify-between p-5 border-b border-white/10'>
//                         <div>
//                             <div className='text-white text-lg font-semibold'>
//                                 Billing
//                             </div>
//                             <div className='text-slate-400 text-sm'>
//                                 Plans & Credits
//                             </div>
//                         </div>
//                         <button onClick={onClose} className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center"
//                         >
//                             <X size={18} className="text-slate-300" />
//                         </button>
//                     </div>


//                     <div className='p-5'>
//                         <div className='rounded-xl bg-white/[0.04] border border-white/10 p-4'>
//                             <div className='flex justify-between items-center'>
//                                 <div>
//                                     <p className='text-slate-400 text-sm'>
//                                         Current Plan
//                                     </p>
//                                     <h3 className='text-white text-xl font-bold'>
//                                         {userData?.plan || "free"}
//                                     </h3>
//                                 </div>
//                                 <Crown className='text-yellow-400' />
//                             </div>

//                             <div className='mt-5'>
//                                 <div className='flex justify-between text-xs text-slate-400 mb-2'>
//                                     <span>Credits</span>
//                                     <span>{userData.credits || 0}/{userData.totalCredits || 100}</span>
//                                 </div>

//                                 <div className='h-2 rounded-full bg-white/10 overflow-hidden'>
//                                     <div className="h-full bg-indigo-500 transition-all duration-500"
//                                         style={{
//                                             width: `${(
//                                                 (userData?.credits || 0) /
//                                                 (userData?.totalCredits || 1)
//                                             ) * 100
//                                                 }%`
//                                         }}
//                                     />
//                                 </div>


//                             </div>



//                         </div>
//                     </div>

//                     <div className='px-5 flex-1 overflow-auto space-y-4'>

//                         <div className='rounded-xl border border-white/10 p-4'>
//                             <h3 className='text-white font-semibold'>Starter Plan</h3>
//                             <p className='text-indigo-400 text-2xl font-bold mt-2'>₹199</p>
//                             <p className='text-slate-400 text-sm mt-1'>500 Credits</p>
//                             <button className='mt-4 w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 py-2 text-white' onClick={() => handleUpgrade("starter")}>Upgrade</button>
//                         </div>
//                         <div className='rounded-xl border border-white/10 p-4'>
//                             <h3 className='text-white font-semibold'>Pro Plan</h3>
//                             <p className='text-indigo-400 text-2xl font-bold mt-2'>₹499</p>
//                             <p className='text-slate-400 text-sm mt-1'>1000 Credits</p>
//                             <button className='mt-4 w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 py-2 text-white' onClick={() => handleUpgrade("pro")}>Upgrade</button>
//                         </div>
//                     </div>








//                 </motion.div>
//             </>
//             }

//         </AnimatePresence>
//     )
// }

// export default BillingDrawer



import React from 'react'
import { AnimatePresence, motion } from "motion/react"
import { Check, Crown, Sparkles, X, Zap } from 'lucide-react'
import { useSelector } from 'react-redux'
import { createOrder } from '../features/createOrder'
import { verifyPayment } from '../features/verifyPayment'

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: "₹199",
    credits: "500 Credits",
    icon: Zap,
    features: ["500 monthly credits", "Standard response speed", "Email support"],
    highlight: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "₹499",
    credits: "1000 Credits",
    icon: Crown,
    features: ["1000 monthly credits", "Priority response speed", "Priority support", "Early access to new agents"],
    highlight: true,
  },
]

function BillingDrawer({ open, onClose }) {
  const { userData } = useSelector(state => state.user)

  const handleUpgrade = async (plan) => {
    try {
      const data = await createOrder(plan)
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data?.order?.amount,
        currency: data?.order?.currency,
        name: "VirtualAi",
        description: `${data?.plan?.name} Plan`,
        order_id: data?.order?.id,
        handler: async (response) => {
          try {
            const data = await verifyPayment(response)
            console.log(data)
          } catch (error) {
            console.log(error)
          }
        },
        theme: {
          color: "#6366F1"
        }
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error) {
      console.log(error)
    }
  }

  const creditPct = Math.min(
    100,
    ((userData?.credits || 0) / (userData?.totalCredits || 1)) * 100
  )

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 z-50 h-screen w-[380px] bg-[#0a0c10] border-l border-white/[0.07] shadow-[-16px_0_48px_-12px_rgba(0,0,0,0.6)] flex flex-col"
          >
            <div className='flex items-center justify-between p-5 border-b border-white/[0.07]'>
              <div>
                <div className='text-white text-lg font-semibold tracking-tight'>
                  Billing
                </div>
                <div className='text-slate-500 text-[13px]'>
                  Plans & Credits
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] flex items-center justify-center transition-colors duration-150 cursor-pointer"
              >
                <X size={17} className="text-slate-400" />
              </button>
            </div>

            <div className='p-5'>
              <div className='relative rounded-2xl bg-gradient-to-br from-indigo-500/[0.08] to-fuchsia-500/[0.06] border border-white/[0.08] p-4 overflow-hidden'>
                <div className='pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-indigo-500/10 blur-2xl' />

                <div className='relative flex justify-between items-start'>
                  <div>
                    <p className='text-slate-500 text-[12.5px]'>Current Plan</p>
                    <h3 className='text-white text-xl font-bold capitalize mt-0.5'>
                      {userData?.plan || "free"}
                    </h3>
                  </div>
                  <div className='w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 border border-yellow-400/20 flex items-center justify-center'>
                    <Crown className='text-yellow-400' size={17} />
                  </div>
                </div>

                <div className='relative mt-5'>
                  <div className='flex justify-between text-[11.5px] text-slate-500 mb-1.5'>
                    <span className='font-medium'>Credits</span>
                    <span className='text-slate-300 font-semibold'>
                      {userData?.credits || 0}
                      <span className='text-slate-600 font-normal'>/{userData?.totalCredits || 100}</span>
                    </span>
                  </div>

                  <div className='h-2 rounded-full bg-white/[0.06] overflow-hidden'>
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 transition-all duration-500"
                      style={{ width: `${creditPct}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='px-5 pb-2 text-[11px] font-semibold uppercase tracking-widest text-slate-600'>
              Upgrade Plan
            </div>

            <div className='px-5 pb-5 flex-1 overflow-auto space-y-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
              {PLANS.map((plan) => {
                const Icon = plan.icon
                return (
                  <div
                    key={plan.id}
                    className={`relative rounded-2xl p-4 transition-colors duration-150
                      ${plan.highlight
                        ? "border border-indigo-500/30 bg-gradient-to-br from-indigo-500/[0.08] to-fuchsia-500/[0.05] shadow-[0_8px_28px_-14px_rgba(168,85,247,0.5)]"
                        : "border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.035]"
                      }`}
                  >
                    {plan.highlight && (
                      <span className='absolute -top-2.5 right-4 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-white bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-2.5 py-0.5 rounded-full shadow-[0_2px_8px_-2px_rgba(168,85,247,0.6)]'>
                        <Sparkles size={10} />
                        Popular
                      </span>
                    )}

                    <div className='flex items-center gap-2.5'>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${plan.highlight ? "bg-gradient-to-br from-indigo-500 to-fuchsia-500" : "bg-white/[0.06]"}`}>
                        <Icon size={15} className={plan.highlight ? "text-white" : "text-slate-400"} />
                      </div>
                      <h3 className='text-white font-semibold text-[14.5px]'>{plan.name}</h3>
                    </div>

                    <div className='flex items-baseline gap-1.5 mt-3'>
                      <p className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-fuchsia-300 text-[26px] font-bold'>
                        {plan.price}
                      </p>
                      <span className='text-slate-500 text-[12px]'>/ month</span>
                    </div>
                    <p className='text-slate-500 text-[12.5px] mt-0.5'>{plan.credits}</p>

                    <ul className='mt-3.5 space-y-1.5'>
                      {plan.features.map((feat) => (
                        <li key={feat} className='flex items-center gap-2 text-[12.5px] text-slate-400'>
                          <Check size={13} className='text-indigo-400 shrink-0' />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`mt-4 w-full rounded-xl py-2.5 text-[13.5px] font-medium cursor-pointer border-none transition-all duration-150 active:scale-[0.98]
                        ${plan.highlight
                          ? "bg-gradient-to-br from-indigo-500 to-fuchsia-600 hover:opacity-90 text-white shadow-[0_4px_16px_-4px_rgba(168,85,247,0.5)]"
                          : "bg-white/[0.06] hover:bg-white/[0.1] text-slate-100"
                        }`}
                      onClick={() => handleUpgrade(plan.id)}
                    >
                      Upgrade to {plan.name}
                    </button>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default BillingDrawer