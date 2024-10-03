const About = () => {
    return (
        <div className="flex gap-16 justify-center">
            <img src="./about.png" alt="" height={738} width={605} />
            <div className="">
                <span className="text-sm font-bold text-[var(--verde-footer)] uppercase">sobre nós</span>
                <h1 className="font-bold text-4xl py-6">
                    Cuidando com Carinho: <br /> Nossa Trajetória
                </h1>
                <p className="text-left max-w-md text-xl font-medium">
                    Fundado com a paixão por animais e o desejo de proporcionar o melhor para nossos amigos peludos,
                    nosso pet shop nasceu da ideia de criar um espaço onde o carinho e o bem-estar dos pets são sempre a
                    prioridade. Com uma equipe dedicada e experiente, oferecemos produtos de alta qualidade e serviços
                    personalizados para garantir que cada visita seja uma experiência positiva tanto para você quanto
                    para o seu companheiro.
                </p>
            </div>
        </div>
    );
};

export default About;
