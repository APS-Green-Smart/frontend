'use client'
import Image from "next/image"
import { motion } from "framer-motion"

export const Logo = () => {
    return (
        <figure className="flex items-center gap-2 py-1">
            <motion.figure initial={{x: -1000, rotate: -180}} animate={{x: 0, rotate: 0}} transition={{ease: "easeInOut", duration: 1.3, delay: 0.2}} className="overflow-hidden">
                <Image src="/assets/brand/logo-smart-carbon.svg" alt="Logo da Smart Carbon" width={30} height={30} />
            </motion.figure>
            <h2 className="text-xl max-md:hidden lg:text-2xl">Smart Green</h2>
        </figure>
    )
}