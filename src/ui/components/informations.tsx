const Informations = () => {
    return (
        <div className="w-full h-44 bg-[var(--verde-card)] rounded-2xl flex items-center justify-evenly">
            <div className="flex items-center">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">+3.500</h1>
                    <p className="text-xl font-normal text-[var(--verde-footer)]">Pets atendidos</p>
                </div>
            </div>

            <div className="h-20 w-px bg-[var(--verde-footer)] mx-4"></div>

            <div className="flex items-center">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">+9</h1>
                    <p className="text-xl font-normal text-[var(--verde-footer)]">Especialistas disponíveis</p>
                </div>
            </div>

            <div className="h-20 w-px bg-[var(--verde-footer)] mx-4"></div>

            <div className="flex items-center">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">+5</h1>
                    <p className="text-xl font-normal text-[var(--verde-footer)]">Anos no mercado</p>
                </div>
            </div>
        </div>
    );
};

export default Informations;
