'use client'


import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/UI/Button"
import { ArrowCircleDown } from "@/components/UI/icons/Phospor"
import WaterConsumptionAndBillChart from "./_components/water/water-bill"
import WaterConsumptionAndBillGoalsChart from "./_components/water/water-goal"
import EnergyConsumptionAndBillGoalsChart from "./_components/energy/energy-goal"
import EnergyConsumptionAndBillChart from "./_components/energy/energy-bill"
import { Modal } from "@/components/UI/modal-root"
import AccountForm from "./_components/forms/account/create-new-account-modal"
import { MapContext } from "@/contexts/MapContext"
import { useContext } from "react"
import GoalForm from "./_components/forms/goal/update-goal-modal"

export default function Dados() {

    const { modalIsOpen, setModalIsOpen, editGoalModalIsOpen, setEditGoalModalIsOpen } = useContext(MapContext);

    return (
        <>
            <main className="max-md:min-h-screen md:min-h-[70vh] container m-auto flex flex-wrap items-center justify-center lg:pt-40 pt-20 lg:pb-20 pb-10 xl:flex-row xl:flex-nowrap xl:justify-evenly overflow-hidden">
                <aside className="px-3 lg:px-8 py-5 pt-3 text-black-custom max-w-2xl small-notbook:max-w-4xl  flex flex-col gap-5 md:py-10 xl:self-start xl:gap-8">
                    <h1 className="text-2xl font-bold md:text-5xl lg:text-6xl">Suas contas e metas</h1>
                    <p className="text-lg py-5 md:text-xl">Acompanhe suas contas e metas!<br /><br /> Para acompanhar suas metas, é necessário registrar a partir de três contas de luz e três contas de água, garantindo assim uma avaliação mais confiável e precisa.
                        Além disso, é fundamental definir uma meta de consumo e uma meta de valor gasto. Isso permitirá avaliar os parâmetros e identificar pontos de melhoria ou piora, em uma representação gráfica de fácil compreensão.</p>
                    <div className="flex gap-3 max-md:flex-col">
                        <Button Title='Editar metas' onClick={() => { setEditGoalModalIsOpen(!editGoalModalIsOpen) }} />
                        <Button Title='Adicionar contas' onClick={() => setModalIsOpen(!modalIsOpen)} />
                    </div>

                </aside>
                <Image src={"/assets/ilustration/search.svg"} alt="Ilustração dos membros da equipe" width={487} height={400} className="m-auto px-3" />
            </main>

            <section className="bg-black-custom pt-10">
                <aside className="w-full lg:px-8 py-10 px-3 flex flex-wrap">
                    <section className="container m-auto flex flex-col items-center">
                        <h2 className="text-xl md:text-2xl font-bold pb-10 pt-8">Água, consumo e custo</h2>
                        < WaterConsumptionAndBillChart />
                    </section>

                    <section className="container m-auto flex flex-col items-center">
                        <h2 className="text-xl md:text-2xl font-bold pb-10 pt-8">Água, consumo, custo em relação a meta</h2>
                        <WaterConsumptionAndBillGoalsChart />
                    </section>

                    <section className="container m-auto flex flex-col items-center">
                        <h2 className="text-xl md:text-2xl font-bold pb-10 pt-8">Energia, consumo e custo</h2>
                        <EnergyConsumptionAndBillChart />
                    </section>
                    <section className="container m-auto flex flex-col items-center">
                        <h2 className="text-xl md:text-2xl font-bold pb-10 pt-8">Energia, consumo, custo em relação a meta</h2>
                        <EnergyConsumptionAndBillGoalsChart />
                    </section>
                </aside>
            </section>

            
            {editGoalModalIsOpen && (
             
                <Modal title="Editar meta" onClose={() => {setEditGoalModalIsOpen(!editGoalModalIsOpen)}} visible={editGoalModalIsOpen}>
                    <GoalForm />
                </Modal>
        
            )}


            {modalIsOpen && (
                <Modal title="Cadastrar nova conta" onClose={() => setModalIsOpen(!modalIsOpen)} visible={modalIsOpen}>
                    <AccountForm />
                </Modal>
            )}
 
        </>
    )
}