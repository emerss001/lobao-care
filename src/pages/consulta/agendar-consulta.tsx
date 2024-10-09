import Navbar from "../../ui/navbar";

const AgendarConsulta = () => {
    return (
        <>
            <Navbar />
            <div className="text-center max-w-[600px] mx-auto mt-14 mb-20">
                <h1 className="font-bold text-5xl">Preencha o formulário para agendar a consulta</h1>
            </div>

            <div>
                <form action="">
                    <div className="px-40 space-y-11">
                        <div className="space-y-2">
                            <label htmlFor="" className="font-semibold text-xl">
                                Nome do Responsável: <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="text"
                                name=""
                                className="w-full h-14 rounded-2xl text-2xl px-4 placeholder:font-semibold placeholder:text-xl border-2 border-transparent focus:border-[var(--verde-footer)] focus:outline-none"
                                placeholder="Jhon Caster"
                            />
                        </div>

                        <div className="space-y-2 flex gap-16">
                            <div className="w-full">
                                <label htmlFor="" className="font-semibold text-xl">
                                    Telefone de Contato: <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    name=""
                                    className="w-full h-14 rounded-2xl text-2xl px-4 placeholder:font-semibold placeholder:text-xl border-2 border-transparent focus:border-[var(--verde-footer)] focus:outline-none"
                                    placeholder="77 9 9999-9999"
                                />
                            </div>

                            <div className="w-full">
                                <label htmlFor="" className="font-semibold text-xl">
                                    email:
                                </label>
                                <input
                                    type="text"
                                    name=""
                                    className="w-full h-14 rounded-2xl text-2xl px-4 placeholder:font-semibold placeholder:text-xl border-2 border-transparent focus:border-[var(--verde-footer)] focus:outline-none"
                                    placeholder="jhon.caster@gmail.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2 flex gap-16">
                            <div className="w-full">
                                <label htmlFor="" className="font-semibold text-xl">
                                    Node do Pet: <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    name=""
                                    className="w-full h-14 rounded-2xl text-2xl px-4 placeholder:font-semibold placeholder:text-xl border-2 border-transparent focus:border-[var(--verde-footer)] focus:outline-none"
                                    placeholder="Rex"
                                />
                            </div>

                            <div className="w-full">
                                <label htmlFor="" className="font-semibold text-xl">
                                    Espécie do Pet:
                                </label>
                                <input
                                    type="text"
                                    name=""
                                    className="w-full h-14 rounded-2xl text-2xl px-4 placeholder:font-semibold placeholder:text-xl border-2 border-transparent focus:border-[var(--verde-footer)] focus:outline-none"
                                    placeholder="Cachorro, Gato, Outro..."
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AgendarConsulta;
