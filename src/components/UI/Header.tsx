'use client'
import { useContext } from "react"
import { Routes } from "./Linking"
import { Logo } from "./Logo"
import { Sidenav } from "./Sidenav"
import { MapContext } from "@/contexts/MapContext"


export const Header = () => {

    const {hasOpen, setHasOpen} = useContext(MapContext)

    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-black-custom py-1 lg:py-2" style={{ zIndex: 1000 }}>
                <aside className="container m-auto flex items-center justify-between px-3 h-8 md:h-12">
                    <figure>
                        <Logo />
                    </figure>

                    <nav className="flex gap-5 text-lg font-normal">
                        <Routes />
                        <Sidenav />
                    </nav>
                </aside>

            </header>
            <div className={`lg:hidden w-full h-screen fixed bg-black opacity-70 z-30 transition-all ease-in duration-300 ${hasOpen ? "" : "hidden"}`} onClick={() => setHasOpen(!hasOpen)}></div>
        </>
    )

}
