import Informations from "../../ui/components/informations";
import Location from "../../ui/location";
import Navbar from "../../ui/navbar";

function App() {
    return (
        <>
            <Navbar />
            <main className="px-20 pt-28">
                <div className="flex justify-between">
                    <div>
                        <span className="uppercase text-xl">BOAS VINDAS AO LOBÃOCARE 👋</span>
                        <h1 className="font-bold text-5xl py-6">
                            Assistência em cuidados <br /> completo para seu pet.
                        </h1>
                        <p className="text-lg font-bold text-[var(--cor-texto-p)] leading-6">
                            Aqui na LobãoCare, cuidamos do seu melhor amigo com carinho, <br /> oferecendo atenção
                            especial para garantir saúde e bem-estar.
                        </p>
                    </div>

                    <img src="./dog_inicial.png" alt="" height={347} width={357} className="-mt-20" />
                </div>

                <Informations />

                <div className="grid justify-center my-16">
                    <button className="bg-[var(--verde-principal)] py-7 px-9 text-3xl font-semibold text-[var(--cor-de-texto)] rounded-2xl">
                        Veja nossos serviços
                    </button>
                </div>

                <Location />
            </main>
        </>
    );
}

export default App;
