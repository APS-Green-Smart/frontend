'use client'
import Link from "next/link"
import { useSelectedLayoutSegments } from "next/navigation"


export const Routes = () => {

    const segment = useSelectedLayoutSegments();

    const routes = [
        { name: "Início", href: "/", current: `${segment}` == "" ? true : false },
        { name: "Pesquisa", href: "/pesquisa", current: `${segment[1]}` === "pesquisa" ? true : false },
        { name: "Sobre nós", href: "/equipe", current: `${segment[1]}` === "equipe" ? true : false },
        { name: "Dados", href: "/dados", current: `${segment[1]}` === "dados" ? true : false },
    ]


    return (
        <ul className="flex gap-5 text-lg font-normal max-small-notbook:hidden">
            {routes.map((route, index) => {
                return (
                    <li key={index} className={`relative text-white ${route.current ? 'font-bold hover:after:opacity-100 hover:after:w-full after:bg-green-custom after:opacity-100 after:w-full' : ' '} after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 after:opacity-0 after:w-0 after:h-[3px]`}>
                        <Link href={route.href}>
                            {route.name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}