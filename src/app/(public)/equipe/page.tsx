import Image from "next/image";
import { Button } from "@/components/UI/Button";
import Link from "next/link";
import { TeamMember } from "@/components/TeamMembers";

export default function Equipe() {
    return (
        <>
            <main className="max-md:min-h-screen md:min-h-[70vh] container m-auto flex flex-wrap items-center justify-center lg:pt-40 pt-20 lg:pb-20 pb-10 xl:flex-row xl:flex-nowrap xl:justify-evenly overflow-hidden">
                <aside className="px-3 lg:px-8 py-5 pt-3 text-black-custom max-w-2xl min-[992px]:max-w-3xl  flex flex-col gap-5 md:py-10 xl:self-start xl:gap-8">
                    <h1 className="text-2xl font-bold md:text-5xl lg:text-6xl">Sobre nós</h1>
                    <p className="text-lg py-5 md:text-xl">Somos uma equipe de jovens universitários criativos que estão iniciando sua jornada no mundo de tecnologia. As ilustrações foram adaptadas e pensadas para parecem conosco. <br /><br />Você pode conhecer cada um de nós logo abaixo! </p>
                    <Link className="w-full" href={"#time"}>
                        <Button Title={"Conheça nosso time"} />
                    </Link>
                </aside>
                <Image src={"/assets/brand/team.svg"} alt="Ilustração dos membros da equipe" width={687} height={480} className="m-auto px-3" />
            </main>

            <section className="relative bg-black-custom py-20">
                <aside className="small-notbook:py-20 container m-auto flex flex-col justify-center px-3 lg:px-8" id="time">
                    <h2 className="text-xl font-bold md:text-4xl max-lg:text-center text-white lg:pb-10">Conheça nossa equipe!</h2>
                    <article className="flex flex-col items-center justify-center">
                        <TeamMember name="julia" title="Julia Casimiro" subtitle="Scrum Master e Desenvolvedora" description="Gosto de ler, ouvir musica e aprender coisas novas. Entusiasta pela tecnologia porque ela pode ser usada para criar coisas incríveis e ajudar pessoas." typeAnimation="fromTheLeft"/>

                        <TeamMember typeAnimation="fromTheRight" reverse name="matheus" title="Matheus Passos" subtitle="Desenvolvedor Full Stack e Designer" description="Gosto de montanhas e paisagens bonitas. Amo a tecnologia e a infinidade de possibilidades que ela proporciona. Sou um desenvolvedor autodidata que adora trabalhar e em equipe e construir projetos incríveis" />

                        <TeamMember typeAnimation="fromTheLeft" name="hugo" title="Hugo Santana" subtitle="Desenvolvedor Java" description="Gosto de jogar futebol e de esportes. Apaixonado pela linguagem Java." />

                        <TeamMember  typeAnimation="fromTheRight" reverse name="allef" title="Allef dos Santos" subtitle="Desenvolvedor Python" description="Gosto de viajar e estar com a familia. Entusiasta em tecnologia com grande apego à linguagem Python." />
                    </article>
                </aside>
            </section>


        </>
    )
}