'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import { fromTheBotton, fromTheLeft, fromTheRight } from "../data"

type IlustrationProps = {
    person: string;
    typeAnimation: 'fromTheLeft' | 'fromTheRight' | 'fromTheBotton'
}

const AnimationTypes = {
    fromTheLeft: fromTheLeft,
    fromTheRight: fromTheRight,
    fromTheBotton: fromTheBotton
}

export const Ilustration = ({ person, typeAnimation }: IlustrationProps) => {
    const Animation = AnimationTypes[typeAnimation];

    return (
        <motion.figure {...Animation} className="px-3 py-5 overflow-hidden">
            <Image width={430} height={330} src={`/assets/persons/${person}.svg`} alt={`Ilustração do(a) integrante ${person}`} />
        </motion.figure>
    );
};
