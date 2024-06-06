'use client'

import { Bus, CarProfile, Drop, Lightning, PersonSimpleBike, PersonSimpleWalk } from '@phosphor-icons/react';
import { motion } from "framer-motion";
import { fromTheBotton } from '@/components/animations/data';
import { accountOpt } from '@/contexts/MapProvider';
import { useContext } from 'react';
import { MapContext } from '@/contexts/MapContext';


export const Fieldset = () => {

    const { accountType, setAccountType } = useContext(MapContext)

    return (
        <fieldset className="flex items-center md:gap-16 max-md:justify-evenly pt-3 pb-8 overflow-hidden">
            <motion.button
                onClick={() => setAccountType(accountOpt.WATER)}
                {...fromTheBotton}
                className={`px-1 py-1 rounded-lg ${accountType === 'water' ? "bg-black-custom " : "bg-default text-[#837c7c]"} transition-all`}  >
                <Drop size={50} weight="fill" className='text-[#1E90FF]' />
            </motion.button>
            <motion.button
                onClick={() => setAccountType(accountOpt.ENERGY)}
                {...fromTheBotton}
                className={`px-1 py-1 rounded-lg ${accountType === 'energy' ? "bg-black-custom text " : "bg-default text-[#837c7c]"} transition-all`}   >
                <Lightning size={50} weight="fill" className='text-orange-400' />
            </motion.button>
        </fieldset>
    )
}