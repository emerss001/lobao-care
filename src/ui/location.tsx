const Location = () => {
    return (
        <div className="grid justify-center text-center mb-20">
            <span className="text-sm font-bold text-[var(--verde-footer)] uppercase">nossa localização</span>
            <h1 className="font-bold text-4xl py-6">Traga seu pet agora mesmo!</h1>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.494372385003!2d-42.78270378976253!3d-14.224358586201506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75ac47bdafb41f7%3A0x14bbb192c99c574c!2sR.%20Casemiro%20de%20Abreu%2C%20157%20-%20Guanambi%2C%20BA%2C%2046430-000!5e0!3m2!1spt-BR!2sbr!4v1727922554049!5m2!1spt-BR!2sbr"
                width="910"
                height="615"
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default Location;
