// // import { signInWithPopup } from 'firebase/auth'
// // import React from 'react'
// // import { auth, googleProvider } from '../../utils/firebase'
// // import api from '../../utils/axios'
// // import { FcGoogle } from "react-icons/fc";
// // import { useDispatch, useSelector } from 'react-redux';
// // import { setUserdata } from '../redux/userSlice';
// // import SideBar from '../components/SideBar';
// // import ChatArea from '../components/ChatArea';
// // import Artifact from '../components/Artifact';

// // function Home() {
// //     const {userData}=useSelector(state=>state.user)
// //     const dispatch=useDispatch()
// //     const handleLogin = async (token) => {
// //         try {
// //             const { data } = await api.post("/api/auth/login", { token })
// //             dispatch(setUserdata(data))
// //         } catch (error) {
// //             console.log(error)
// //         }
// //     }


// //     const googleLogin = async () => {
// //         const data = await signInWithPopup(auth, googleProvider)
// //         const token = await data.user.getIdToken()
// //         console.log(token)
// //         await handleLogin(token)
// //         console.log(data)
// //     }
// //     return (
// //         <div className='h-screen  flex bg-[#0d0f14] text-white overflow-hidden'>

// // <SideBar/>
// // <ChatArea/>
// // <Artifact/>




// // {!userData &&   <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur'>
// //                 <div className='w-[340px] bg-[#13151c] border border-white/[0.08] rounded-2xl p-7 flex flex-col gap-5'>
// //                     <div className='flex flex-col gap-1'>
// //                         <h2 className='text-[17px] font-semibold text-slate-100 tracking-tight'>Welcome to VirtualAI</h2>
// //                         <p className='text-[13px] text-slate-500'>Please login to continue using the app.</p>
// //                     </div>

// //                     <button className='w-full flex items-center justify-center gap-3 py-[11px] rounded-xl text-sm font-medium text-black/90 bg-white hover:bg-gray-200  transition-all duration-150 cursor-pointer' onClick={googleLogin}>
// //                         <FcGoogle size={15} />
// //                         Continue With Google
// //                     </button>
// //                 </div>
// //             </div>}
          
// //         </div>
// //     )
// // }

// // export default Home


// import { signInWithPopup } from 'firebase/auth'
// import React from 'react'
// import { auth, googleProvider } from '../../utils/firebase'
// import api from '../../utils/axios'
// import { FcGoogle } from "react-icons/fc";
// import { useDispatch, useSelector } from 'react-redux';
// import { setUserdata } from '../redux/userSlice';
// import SideBar from '../components/SideBar';
// import ChatArea from '../components/ChatArea';
// import Artifact from '../components/Artifact';
// import { AnimatePresence, motion } from "motion/react"

// function Home() {
//   const { userData } = useSelector(state => state.user)
//   const dispatch = useDispatch()

//   const handleLogin = async (token) => {
//     try {
//       const { data } = await api.post("/api/auth/login", { token })
//       dispatch(setUserdata(data))
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const googleLogin = async () => {
//     const data = await signInWithPopup(auth, googleProvider)
//     const token = await data.user.getIdToken()
//     await handleLogin(token)
//   }

//   return (
//     <div className='relative h-screen flex bg-[#0a0c10] text-white overflow-hidden'>
//       <SideBar />
//       <ChatArea />
//       <Artifact />

//       <AnimatePresence>
//         {!userData && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md'
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 12, scale: 0.97 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
//               className='relative w-[360px] bg-[#0d0f14] border border-white/[0.08] rounded-2xl p-7 flex flex-col gap-6 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.7)] overflow-hidden'
//             >
//               {/* ambient glow */}
//               <div className='pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-indigo-500/15 blur-3xl' />
//               <div className='pointer-events-none absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-fuchsia-500/10 blur-3xl' />

//               <div className='relative flex flex-col items-center text-center gap-3'>
//                 <div className='w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/90 to-fuchsia-500/90 shadow-[0_4px_20px_-4px_rgba(168,85,247,0.6)] flex items-center justify-center'>
//                   <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
//                     <path
//                       d="M12 3l2.2 5.6L20 10.8l-5.8 2.2L12 19l-2.2-6-5.8-2.2 5.8-2.2L12 3z"
//                       fill="white"
//                       fillOpacity="0.95"
//                     />
//                   </svg>
//                 </div>

//                 <div className='flex flex-col gap-1'>
//                   <h2 className='text-[18px] font-semibold text-slate-100 tracking-tight'>
//                     Welcome to VirtualAi
//                   </h2>
//                   <p className='text-[13px] text-slate-500 max-w-[260px]'>
//                     Sign in to save your conversations and pick up right where you left off.
//                   </p>
//                 </div>
//               </div>

//               <button
//                 className='relative w-full flex items-center justify-center gap-3 py-[11px] rounded-xl text-sm font-medium text-black/90 bg-white hover:bg-slate-100 active:scale-[0.98] shadow-[0_2px_12px_-4px_rgba(255,255,255,0.15)] transition-all duration-150 cursor-pointer'
//                 onClick={googleLogin}
//               >
//                 <FcGoogle size={17} />
//                 Continue With Google
//               </button>

//               <p className='relative text-center text-[11px] text-slate-600 -mt-2'>
//                 By continuing, you agree to our Terms & Privacy Policy.
//               </p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

// export default Home

import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, googleProvider } from '../../utils/firebase'
import api from '../../utils/axios'
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { setUserdata } from '../redux/userSlice';
import SideBar from '../components/SideBar';
import ChatArea from '../components/ChatArea';
import Artifact from '../components/Artifact';

const AUTH_ERROR_MESSAGES = {
    "auth/email-already-in-use": "This email is already registered. Try logging in instead.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/weak-password": "Password should be at least 6 characters.",
    "auth/user-not-found": "No account found with this email.",
    "auth/wrong-password": "Incorrect password. Please try again.",
    "auth/invalid-credential": "Invalid email or password.",
    "auth/missing-password": "Please enter a password.",
    "auth/too-many-requests": "Too many attempts. Please wait a moment and try again.",
}

function Home() {
    const { userData } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [mode, setMode] = useState("login") // "login" | "signup"
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [info, setInfo] = useState("")

    const handleLogin = async (token) => {
        try {
            const { data } = await api.post("/api/auth/login", { token })
            dispatch(setUserdata(data))
        } catch (error) {
            console.log(error)
            setError("Login failed. Please try again.")
        }
    }

    const googleLogin = async () => {
        try {
            setError("")
            setLoading(true)
            const data = await signInWithPopup(auth, googleProvider)
            const token = await data.user.getIdToken()
            await handleLogin(token)
        } catch (error) {
            console.log(error)
            if (error?.code !== "auth/popup-closed-by-user") {
                setError("Google sign-in failed. Please try again.")
            }
        } finally {
            setLoading(false)
        }
    }

    const resetFormState = () => {
        setError("")
        setInfo("")
        setPassword("")
        setConfirmPassword("")
    }

    const switchMode = (nextMode) => {
        setMode(nextMode)
        resetFormState()
    }

    const handleEmailAuth = async (e) => {
        e.preventDefault()
        setError("")
        setInfo("")

        if (!email.trim() || !password) {
            setError("Please fill in all fields.")
            return
        }

        if (mode === "signup") {
            if (!name.trim()) {
                setError("Please enter your name.")
                return
            }
            if (password.length < 6) {
                setError("Password should be at least 6 characters.")
                return
            }
            if (password !== confirmPassword) {
                setError("Passwords do not match.")
                return
            }
        }

        setLoading(true)
        try {
            let userCredential
            if (mode === "signup") {
                userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password)
                await updateProfile(userCredential.user, { displayName: name.trim() })
            } else {
                userCredential = await signInWithEmailAndPassword(auth, email.trim(), password)
            }
            const token = await userCredential.user.getIdToken()
            await handleLogin(token)
        } catch (error) {
            console.log(error)
            setError(AUTH_ERROR_MESSAGES[error?.code] || "Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    const handleForgotPassword = async () => {
        setError("")
        setInfo("")
        if (!email.trim()) {
            setError("Enter your email above first, then click Forgot password.")
            return
        }
        try {
            setLoading(true)
            await sendPasswordResetEmail(auth, email.trim())
            setInfo("Password reset email sent. Check your inbox.")
        } catch (error) {
            console.log(error)
            setError(AUTH_ERROR_MESSAGES[error?.code] || "Could not send reset email. Check the address and try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='h-screen  flex bg-[#0d0f14] text-white overflow-hidden'>

            <SideBar />
            <ChatArea />
            <Artifact />

            {!userData &&
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur p-4'>
                    <div className='w-full max-w-[360px] max-h-[92vh] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-[#13151c] border border-white/[0.08] rounded-2xl p-7 flex flex-col gap-5'>
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-[17px] font-semibold text-slate-100 tracking-tight'>
                                {mode === "login" ? "Welcome back" : "Create your account"}
                            </h2>
                            <p className='text-[13px] text-slate-500'>
                                {mode === "login" ? "Login to continue using VirtualAI." : "Sign up to start using VirtualAI."}
                            </p>
                        </div>

                        <button
                            type='button'
                            disabled={loading}
                            className='w-full flex items-center justify-center gap-3 py-[11px] rounded-xl text-sm font-medium text-black/90 bg-white hover:bg-gray-200 transition-all duration-150 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed'
                            onClick={googleLogin}
                        >
                            <FcGoogle size={15} />
                            Continue With Google
                        </button>

                        <div className='flex items-center gap-3'>
                            <div className='flex-1 h-px bg-white/[0.08]' />
                            <span className='text-[10.5px] font-semibold text-slate-600 uppercase tracking-widest'>or</span>
                            <div className='flex-1 h-px bg-white/[0.08]' />
                        </div>

                        <form className='flex flex-col gap-3.5' onSubmit={handleEmailAuth}>
                            {mode === "signup" && (
                                <div className='flex flex-col gap-1.5'>
                                    <label className='text-[12px] font-medium text-slate-400'>Full Name</label>
                                    <input
                                        type='text'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder='John Doe'
                                        className='w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-[13.5px] text-slate-200 placeholder:text-slate-600 outline-none focus:border-indigo-500/50 transition-colors duration-150'
                                    />
                                </div>
                            )}

                            <div className='flex flex-col gap-1.5'>
                                <label className='text-[12px] font-medium text-slate-400'>Email</label>
                                <input
                                    type='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='you@example.com'
                                    autoComplete='email'
                                    className='w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-[13.5px] text-slate-200 placeholder:text-slate-600 outline-none focus:border-indigo-500/50 transition-colors duration-150'
                                />
                            </div>

                            <div className='flex flex-col gap-1.5'>
                                <label className='text-[12px] font-medium text-slate-400'>Password</label>
                                <div className='relative'>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='••••••••'
                                        autoComplete={mode === "login" ? "current-password" : "new-password"}
                                        className='w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-3.5 py-2.5 pr-10 text-[13.5px] text-slate-200 placeholder:text-slate-600 outline-none focus:border-indigo-500/50 transition-colors duration-150'
                                    />
                                    <button
                                        type='button'
                                        onClick={() => setShowPassword((p) => !p)}
                                        className='absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 bg-transparent border-none cursor-pointer'
                                    >
                                        {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                                    </button>
                                </div>
                            </div>

                            {mode === "signup" && (
                                <div className='flex flex-col gap-1.5'>
                                    <label className='text-[12px] font-medium text-slate-400'>Confirm Password</label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder='••••••••'
                                        autoComplete='new-password'
                                        className='w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-[13.5px] text-slate-200 placeholder:text-slate-600 outline-none focus:border-indigo-500/50 transition-colors duration-150'
                                    />
                                </div>
                            )}

                            {mode === "login" && (
                                <button
                                    type='button'
                                    onClick={handleForgotPassword}
                                    className='self-end text-[12px] text-indigo-400 hover:text-indigo-300 bg-transparent border-none cursor-pointer p-0'
                                >
                                    Forgot password?
                                </button>
                            )}

                            {error && <p className='text-[12.5px] text-red-400 leading-snug'>{error}</p>}
                            {info && <p className='text-[12.5px] text-emerald-400 leading-snug'>{info}</p>}

                            <button
                                type='submit'
                                disabled={loading}
                                className='w-full flex items-center justify-center gap-2 text-sm font-medium text-white bg-linear-to-br from-indigo-500 to-violet-700 rounded-xl py-[11px] border-none cursor-pointer hover:opacity-90 transition-opacity duration-150 disabled:opacity-60 disabled:cursor-not-allowed'
                            >
                                {loading ? "Please wait..." : mode === "login" ? "Login" : "Sign Up"}
                            </button>
                        </form>

                        <p className='text-[13px] text-slate-500 text-center'>
                            {mode === "login" ? "Don't have an account? " : "Already have an account? "}
                            <button
                                type='button'
                                onClick={() => switchMode(mode === "login" ? "signup" : "login")}
                                className='text-indigo-400 hover:text-indigo-300 font-medium bg-transparent border-none cursor-pointer p-0'
                            >
                                {mode === "login" ? "Sign up" : "Login"}
                            </button>
                        </p>
                    </div>
                </div>}

        </div>
    )
}

export default Home