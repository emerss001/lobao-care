import clsx from "clsx";

interface ButtonNavbarProps {
    title: string;
    isActive: boolean;
    onClick: () => void;
}

const ButtonNavbar = ({ title, isActive, onClick }: ButtonNavbarProps) => {
    return (
        <>
            <button
                // TODO: Arrumar cursor pointer e perder o estado
                onClick={onClick}
                className={clsx("text-base text-[var(--cor-de-texto)] font-bold duration-100 cursor-pointer", {
                    "border-[var(---cor-de-texto)] border-solid border-b-2 pb-0 mb-2px": isActive,
                })}
            >
                {title}
            </button>
        </>
    );
};

export default ButtonNavbar;
