import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/UI/Button"
import { ArrowCircleDown } from "@/components/UI/icons/Phospor"
import { bibliografia } from "@/data"
import { Modal } from "@/components/UI/modal-root"

export default function Contas() {



    return (
        <>
            <main className="min-h-screen container m-auto flex flex-col lg:pt-40 pt-20 lg:pb-20 pb-10 overflow-hidden">
                <aside className="px-3 lg:px-8 py-5 pt-3 text-black-custom max-w-2xl small-notbook:max-w-4xl  flex flex-col gap-5 md:py-10 xl:self-start xl:gap-8">
                    <h1 className="text-2xl font-bold md:text-5xl lg:text-6xl">Contas</h1>
                    <h3 className="text-lg py-5 md:text-xl">Visualize a lista das suas contas</h3>
                </aside>

                <section className="bg-black w-full h-32 m-auto">
                    <h2 className="text-2xl font-bold md:text-4xl">Água</h2>

                </section>



            </main>

            {/* <section className="bg-black-custom pt-10">
                <aside className="container m-auto lg:px-8 py-10 px-3">
                    <h2 className="text-3xl md:text-5xl font-bold pb-10 pt-8">Bibliografia</h2>

                    <div className="w-full max-w-72 bg-white shadow-2xl rounded-2xl">
                        a
                    </div>
 
                </aside>
            </section> */}
       
        </>
    )
}