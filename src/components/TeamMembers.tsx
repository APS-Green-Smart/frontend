import Image from "next/image"
import { Ilustration } from "./animations/animated-components/Ilustration"

interface TeamMemberProps {
    name: string
    title: string
    description: string
    subtitle: string
    reverse?: boolean
    notDark?: boolean
    typeAnimation: "fromTheLeft" | "fromTheRight" | "fromTheBotton"
}

export const TeamMember = ({ name, title, description, subtitle, reverse = false, notDark = false, typeAnimation }: TeamMemberProps) => {
    return (
        <article className={`px-3 py-10 pb-20 relative flex flex-col items-center gap-10 ${reverse ? 'lg:flex-row-reverse' : "lg:flex-row"}`}>
            <aside className={`flex flex-col items-center gap-10 ${reverse ? 'lg:flex-row-reverse' : "lg:flex-row"}`}>
                <picture className={`relative ${notDark && 'text-black-custom'}`}>
                    <div className="lg:hidden pb-5">
                        <h3 className="pt-5 text-2xl max-lg:text-center">{title}</h3>
                        <h5 className="text-base max-lg:text-center">{subtitle}</h5>
                    </div>
                    <figure className="relative overflow-hidden">
                        <Ilustration person={`alone${name}`} typeAnimation={typeAnimation} />
                    </figure>
                </picture>
                <aside className={`lg:self-start flex flex-col lg:items-start gap-5 ${notDark && 'text-black-custom'}`} >
                    <div className="max-lg:hidden" >
                        <h3 className="pt-5 text-2xl max-lg:text-center font-semibold">{title}</h3>
                        <h5 className="text-base max-lg:text-center">{subtitle}</h5>
                    </div>
                    <p className="text-lg max-w-xl max-lg:text-center">{description}</p>
                </aside>
            </aside>
        </article>
    )
}