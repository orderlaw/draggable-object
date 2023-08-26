import React, { useRef } from 'react'
import { motion } from 'framer-motion'

import Law from '../../assets/image.jpg'

import './Main.css'

const Main = () => {

    const constraintsRef = useRef(null)

    return (
        <>
            <div className="container">
                <motion.div className="mid_container" ref={constraintsRef}>
                    <motion.img
                        drag
                        dragConstraints={constraintsRef}
                    src={Law} alt="" 
                    />
                </motion.div>
            </div>
        </>
    )
}

export default Main