import React from 'react'
import { motion } from 'framer-motion'

import Law from '../../assets/image.jpg'

import './Main.css'

const Main = () => {
    return (
        <>
            <div className="container">
                <motion.div className="mid_container">
                    <motion.img
                        animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 180, 180, 0],
                            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 0.5
                        }}
                    src={Law} alt="" 
                    />
                </motion.div>
            </div>
        </>
    )
}

export default Main