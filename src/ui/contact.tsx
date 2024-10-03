import { Instagram, Mail, MapPin, PawPrint } from "lucide-react";

const Contatc = () => {
    return (
        <div className="flex justify-between mt-10">
            <div className="space-y-6   ">
                <h1 className="font-bold text-4xl py-6">
                    Entre em contato <br /> com a gente!
                </h1>
                <div className="space-y-2">
                    <div className="flex gap-3 items-center">
                        <MapPin width={23} height={23} className="" color="var(--verde-principal)" />
                        <p className="text-2xl text-[var(--cor-texto-p)]">R. Casimiro de Abreu, 157</p>
                    </div>

                    <div className="flex gap-3 items-center">
                        <Mail width={23} height={23} className="" color="var(--verde-principal)" />
                        <p className="text-2xl text-[var(--cor-texto-p)]">contato@lobaocare.com</p>
                    </div>

                    <div className="flex gap-3 items-center">
                        <Instagram width={23} height={23} className="" color="var(--verde-principal)" />
                        <p className="text-2xl text-[var(--cor-texto-p)]">lobaocare.gbi</p>
                    </div>
                </div>

                <button className="uppercase bg-[var(--verde-principal)] py-5 px-8 flex gap-4 rounded-[40px] text-[var(--cor-de-texto)] font-bold">
                    <PawPrint color="var(--cor-de-texto)" />
                    agende sua consulta
                </button>
            </div>

            <img src="contact.png" alt="" height={380} width={590} />
        </div>
    );
};

export default Contatc;
