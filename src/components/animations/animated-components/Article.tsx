'use client'

import { motion } from "framer-motion"
import { fromTheLeft } from "../data"
import { UsersThree, Mountains, Recycle } from "@phosphor-icons/react"

export const Article = () => {

    return (
        <article className="relative text-black-custom m-auto flex flex-col items-start gap-10 pb-10 px-3 lg:px-8 overflow-hidden xl:max-w-3xl min-[1535px]:max-w-4xl  min-[1620px]:max-w-none">
            <h2 className="text-2xl font-semibold md:text-3xl self-start">O que é ESG?</h2>
            <p className="text-lg max-w-5xl">O termo ESG foi apresentado pela primeira vez em 2004, em um relatório da ONU
                chamado “Global Compact” intitulado “Who Cares Wins: Connecting Financial Markets
                to a Changing World". Nesse relatório, o ex-secretário da ONU, Kofi Annan, propôs uma
                iniciativa às organizações privadas, visando o desenvolvimento de uma cultura
                organizacional que melhorasse a integração das questões ambientais, sociais e de
                governança corporativa.<br /> <br/>Essas diretrizes de acompanhamento visam aprimorar os
                pilares defendidos pelo termo ESG, levando a avaliação de mercado de uma empresa
                além das questões financeiras. Deste modo, ESG como um conjunto de diretrizes,
                busca promover empresas que enxergam além do lucro, e que sejam responsáveis
                socialmente e ambientalmente.</p>

            <motion.aside className="flex"  {...fromTheLeft}>
                <figure>
                    <h4 className="flex items-center gap-2 font-bold text-lg"><Recycle size={40} weight="fill" /> (E)</h4>
                    <p className="text-lg py-5 max-w-5xl">Refere-se aos princípios de práticas que as empresas trabalham buscando promover
                        ações sustentáveis aliadas a sustentabilidade visando menor impacto no meio
                        ambiente focando na diminuição da poluição, desmatamento, emissão de carbono e
                        gestão de resíduos. (estamos aqui!)</p>
                </figure>
            </motion.aside>

            <motion.aside className="flex"  {...fromTheLeft}>
                <figure>
                    <h4 className="flex items-center gap-2 font-bold text-lg"><UsersThree size={40} weight="fill" /> (S)</h4>
                    <p className="text-lg py-5 max-w-5xl">
                        Refere-se a maneira como as empresas se relacionam com o social ao seu redor, o
                        público como indivíduo ou organização que sofre a ação desta empresa. </p>
                </figure>
            </motion.aside>

            <motion.aside className="flex"  {...fromTheLeft}>
                <figure>
                    <h4 className="flex items-center gap-2 font-bold text-lg"><Mountains size={40} weight="fill" /> (G)</h4>
                    <p className="text-lg py-5 max-w-5xl">Refere-se a maneira que as empresas conduzem sua gestão além de representar as
                        diretrizes, regras, normas e processos que guiam a empresa como um todo.</p>
                </figure>
            </motion.aside>
        </article >
    )

}