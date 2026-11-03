'use client';import {motion,useReducedMotion} from 'framer-motion';
export default function Reveal({children,delay=0,className=''}){const reduced=useReducedMotion();return <motion.div className={className} initial={reduced?false:{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.75,delay,ease:[.2,.7,.2,1]}}>{children}</motion.div>}
