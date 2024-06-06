'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import { fromTheLeft, fromTheRight} from "../data"

export const Florest = () => {

    const florest = {
        initial: { opacity: 0.5, y: 100, scale: 0.5 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0.5, y: 100, scale: 0.5 },
        transition: { duration: 0.5, delay: 0.2 },
    }

    return (

        <figure className="px-1 overflow-hidden">
            <figure className="flex justify-between overflow-hidden">
                <motion.div {...fromTheLeft}>
                    <Image width={147} height={26} src={"/assets/ilustration/florestcloudleft.svg"} alt="Ilustração de nuvens vindo da esquerda." />
                </motion.div>
                <motion.div {...fromTheRight}>
                    <Image width={163} height={63} src={"/assets/ilustration/florestcloudright.svg"} alt="Ilustração de uma floresta." />
                </motion.div>
            </figure>
            <motion.div {...florest}>
                <Image width={430} height={330} src={"/assets/ilustration/florestnoclouds.svg"} alt="Ilustração de uma floresta." />
            </motion.div>
        </figure>

    )
}