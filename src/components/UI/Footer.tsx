import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="bg-black-custom py-5 px-3">
            <section className="flex justify-evenly px-5 py-5 m-auto container">
                <figure className="flex items-center gap-2 py-1">
                    <Image src="/assets/brand/logo-smart-carbon.svg" alt="Logo da Smart Carbon" width={30} height={30} />
                    <h2 className="text-xl">Smart Carbon</h2>
                </figure>
            </section>
            <div className="text-center py-3 bg-black-custom">
                <span className="text-white text-xl">SCARBON - Smart Carbon</span>
            </div>
        </footer>
    )
}