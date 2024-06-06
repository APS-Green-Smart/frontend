'use client'
import { MapContext } from "@/contexts/MapContext"
import { X } from "@phosphor-icons/react"
import { useContext, useState } from "react"

interface ModalProps {
    title: string,
    children?: React.ReactNode
    subtitle?: string
    onClose?: () => void
    visible: boolean
}

export const Modal = ({ children, title, subtitle, onClose, visible }: ModalProps) => {
 
    

    return (
        <dialog className={`w-full h-full fixed bg-black bg-opacity-70 z-30 transition-all ease-in duration-300 top-0 left-0 ${visible ? "" : "hidden"} flex items-center z-[999] !overflow-hidden`}>
            <dialog className="transition-all py-3 text-black-custom bg-white m-auto rounded-2xl flex flex-col max-581:rounded-none min-581:max-h-[34.375rem] max-581:h-screen max-581:w-screen" style={{ zIndex: 50 }}>
                <header className="w-full pb-3 flex border-b border-zinc-300">
                    <div style={{ width: 24 }} />
                    <h1 className="m-auto text-center font-semibold text-2xl text-black">{title}</h1>
                    <button role="Fechar Modal" onClick={onClose}>
                        <X size={24} weight="bold" style={{ marginRight: "12px" }} />
                    </button>
                </header>
                <p className="px-6 pt-2 min-581:m-auto text-base text-justify max-w-[400px] text-zinc-500">{subtitle}</p>
                <section className="px-3 overflow-y-auto max-581:py-5  max-581:w-full">
                    {children}
                </section>
            </dialog>
        </dialog>
    )
}