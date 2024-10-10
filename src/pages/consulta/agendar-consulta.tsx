import Footer from "../../ui/components/footer";
import Navbar from "../../ui/navbar";

const AgendarConsulta = () => {
    const horarios = ["8:30", "9:30", "10:30", "11:30", "14:30", "15:30", "16:30"];
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

                        <div className="space-y-2">
                            <label htmlFor="" className="font-semibold text-xl">
                                Escolha o Horário: <span className="text-red-600">*</span>
                            </label>
                            <div className="flex justify-between">
                                {horarios.map((horario) => (
                                    <button
                                        key={horario}
                                        className="h-14 w-28 bg-[var(--cor-de-texto)] rounded-2xl font-bold text-xl border-solid border-[var(--borda-input)] border-[1px]"
                                    >
                                        {horario}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-x-16 gap-2 flex">
                            <div className="w-full space-y-2">
                                <label htmlFor="serviços" className="font-semibold text-xl">
                                    Escolha o Serviço: <span className="text-red-600">*</span>
                                </label>

                                <div>
                                    <select
                                        id="serviços"
                                        className="bg-[var(--cor-de-texto)] w-full h-14 rounded-2xl text-2xl px-4 placeholder:font-semibold placeholder:text-xl border-2 border-transparent focus:border-[var(--verde-footer)] focus:outline-none focus:rounded-b-none"
                                    >
                                        <option value="Selecione o serviço desejado">
                                            Selecione o serviço desejado
                                        </option>
                                        <option value="Atendimento clínico">Atendimento clínico 🩺</option>
                                        <option value="Serviços estéticos">Serviços estéticos ✂️</option>
                                        <option value="Adestramento">Adestramento 🐕‍🦺</option>
                                        <option value="Farmácia e higiene" className="rounded-t-2xl">
                                            Farmácia e higiene 🧴
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-full space-y-2">
                                <label htmlFor="" className="font-semibold text-xl">
                                    Data: <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="date"
                                    name=""
                                    className="w-full h-14 rounded-2xl text-2xl px-4 placeholder:font-semibold placeholder:text-xl border-2 border-transparent focus:border-[var(--verde-footer)] focus:outline-none"
                                    placeholder="Rex"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid justify-center mt-16 mb-40">
                        <button className="h-16 w-52 items-center bg-[var(--verde-principal)] px-9 text-3xl font-semibold text-[var(--cor-de-texto)] rounded-2xl">
                            Agendar
                        </button>
                    </div>
                </form>
            </div>

            <Footer />
        </>
    );
};

export default AgendarConsulta;
