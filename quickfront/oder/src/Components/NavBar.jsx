import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Link} from 'react-router-dom'

const NavBar = () => {
    const [btn, setBtn] = useState(false)

    return (
        <>
            <header className={`${btn ? "bg-neutral-700" : "bg-neutral-600"} w-20 flex justify-center rounded-2xl p-2 h-fit ml-10 mt-5`}>
                <button onClick={() => setBtn(!btn)} className={`hover:scale-110 transition-all duration-150 ${btn ? "-rotate-90" : ""}`}>
                    {btn ? (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.0} stroke="white" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                            </svg>
                        </>
                    ):(
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.0} stroke="white" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5" />
                            </svg>
                        </>
                    )}
                </button>

                <AnimatePresence>
                    {btn && (
                        <motion.div initial={{opacity: 0, x: -20}} animate={{ opacity: 1, x: 0 }} 
                                    exit={{ opacity: 0, x: -20 }}  transition={{ duration: 0.30 }}
                                    className="absolute top-6 left-1/2 -translate-x-1/2 bg-neutral-700 text-white p-4 rounded-xl shadow-lg flex gap-2 h-fit w-fit ">
                            <Link
                                to="/"
                                    className="relative font-bold text-neutral-400 hover:text-white transition-colors duration-250
                                            after:content-[''] after:absolute after:left-0 after:-bottom-2
                                            after:h-0.5 after:w-0 after:bg-white 
                                            after:transition-all after:duration-400
                                            hover:after:w-full">
                                Home
                            </Link>

                            <Link
                                to="/about"
                                    className="relative font-bold text-neutral-400 hover:text-white transition-colors duration-250
                                            after:content-[''] after:absolute after:left-0 after:-bottom-2
                                            after:h-0.5 after:w-0 after:bg-white 
                                            after:transition-all after:duration-400
                                            hover:after:w-full">
                                About
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>

    )
}

export default NavBar