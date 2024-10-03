import { useState } from "react";
import ButtonNavbar from "./components/button-navbar";

const Navbar = () => {
    const [activeButton, setActiveButton] = useState("INÍCIO");

    const handleButtonClick = (title: string) => {
        setActiveButton(title); // Atualiza o botão ativo ao clicar em um novo
    };

    return (
        <div className="bg-[var(--verde-principal)] w-full h-24 px-20 items-center flex justify-between">
            <div className="flex items-center gap-4">
                <img src="./logo/lobo.png" alt="" height={85} width={75} />
                <img src="./logo/Logo.svg" alt="" height={68} width={267} />
            </div>

            <div className="gap-8 flex">
                <ButtonNavbar
                    title="INÍCIO"
                    isActive={activeButton === "INÍCIO"}
                    onClick={() => handleButtonClick("INÍCIO")}
                />
                <ButtonNavbar
                    title="PRODUTOS"
                    isActive={activeButton === "PRODUTOS"}
                    onClick={() => handleButtonClick("PRODUTOS")}
                />
                <ButtonNavbar
                    title="SERVIÇOS"
                    isActive={activeButton === "SERVIÇOS"}
                    onClick={() => handleButtonClick("SERVIÇOS")}
                />
                <ButtonNavbar
                    title="DEPOIMENTOS"
                    isActive={activeButton === "DEPOIMENTOS"}
                    onClick={() => handleButtonClick("DEPOIMENTOS")}
                />

                <button className="text-base py-3 px-7 text-[var(--cor-de-texto)] font-bold border-[var(---cor-de-texto)] border-solid border rounded-3xl">
                    AGENDAR CONSULTA
                </button>
            </div>
        </div>
    );
};

export default Navbar;
