'use client'
import { MapContext } from "@/contexts/MapContext";
import Link from "next/link"
import { useSelectedLayoutSegments } from "next/navigation"
import { useContext } from "react";
import { Button } from "./Button";


export const Routes = () => {

    const segment = useSelectedLayoutSegments();

    const { user } = useContext(MapContext)

    let routes = [
        { name: "Início", href: "/", current: `${segment}` == "" ? true : false },
        { name: "Dados", href: "/dados", current: `${segment[1]}` === "dados" ? true : false },
        { name: "Contas", href: "/contas", current: `${segment[1]}` === "contas" ? true : false },
    ]


    return (
        <ul className="flex items-center gap-5 text-lg font-normal max-small-notbook:hidden">
            {user && routes.map((route, index) => {
                return (
                    <li key={index} className={`relative text-white ${route.current ? 'font-bold hover:after:opacity-100 hover:after:w-full after:bg-green-custom after:opacity-100 after:w-full' : ' '} after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 after:opacity-0 after:w-0 after:h-[3px]`}>
                        <Link href={route.href}>
                            {route.name}
                        </Link>
                    </li>
                )
            })}
            {!user && <>
                <Link href={"/login"}>
                    <Button Title="Login" />
                </Link>
                <Link href={"registro"}>
                    <Button Title="Registrar" />
                </Link>
            </>}

        </ul>
    )
}