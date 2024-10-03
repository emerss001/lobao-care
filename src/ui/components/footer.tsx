import { Facebook, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[var(--verde-footer)] w-full h-56 mt-12 px-44 items-center flex justify-between">
            <div className="grid space-y-4">
                <img src="./logo/Logo.svg" alt="" />
                <span className="text-[var(--cor-de-texto)] text-sm font-normal">©2024 - LobãoCare.</span>
                <span className="text-[var(--cor-de-texto)] text-sm font-normal">Todos os direitos reservados.</span>
            </div>

            <div className="flex gap-8">
                <img src="./svg/zap.svg" alt="" height={24} width={24} />
                <Facebook size={24} color="var(--cor-de-texto)" />
                <Youtube size={24} color="var(--cor-de-texto)" />
            </div>
        </footer>
    );
};

export default Footer;
