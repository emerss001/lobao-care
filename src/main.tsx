import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./pages/home/Home.tsx";
import "./index.css";
import AgendarConsulta from "./pages/consulta/agendar-consulta.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AgendarConsulta />
    </StrictMode>
);
