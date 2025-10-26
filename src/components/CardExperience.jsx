import { useState } from "react";

export default function CardExperience() {
    const [modo, setModo] = useState("experiencia");

    const toggleModo = () => {
        setModo((prev) => (prev === "experiencia" ? "educacion" : "experiencia"));
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto mt-24">
            {/* Toggle flotante más alto y centrado */}
            <div
                className="absolute -top-16 left-1/2 -translate-x-1/2 z-20 cursor-pointer
        bg-white/10 backdrop-blur-lg border border-white/20 w-60 h-14 rounded-xl
        flex items-center justify-between p-1 text-sm md:text-base font-medium shadow-2xl"
                onClick={toggleModo}
            >
                {/* Fondo deslizante pastel */}
                <div
                    className={`absolute top-1 bottom-1 w-[48%] rounded-lg 
            bg-gradient-to-r from-pink-300/80 to-purple-300/80 
            transition-transform duration-500 ease-in-out ${modo === "educacion" ? "translate-x-[104%]" : "translate-x-0"
                        }`}
                ></div>

                <div className="relative z-10 flex justify-between w-full px-4 select-none items-center">
                    <span
                        className={`transition-colors duration-300 ${modo === "experiencia" ? "text-purple-900" : "text-white/60"
                            }`}
                    >
                        Experiencia
                    </span>
                    <span
                        className={`transition-colors duration-300 ${modo === "educacion" ? "text-purple-900" : "text-white/60"
                            }`}
                    >
                        Educación
                    </span>
                </div>
            </div>

            {/* Contenedor principal con misma anchura que CardHeader */}
            <div
                className="bg-white/30 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl z-10 
        w-full max-w-6xl mx-auto p-8 text-white flex flex-col items-center gap-6 mt-30"
            >
                <div className="transition-all duration-700 ease-in-out text-center">
                    {modo === "experiencia" ? (
                        <div className="space-y-3">
                            <div className="border border-white/20 rounded-2xl p-6 flex flex-col gap-4 bg-white/10"><h3 className="text-xl font-semibold">Desarrolladora Frontend</h3>
                                <p className="text-sm md:text-base text-white/80">
                                    VASALTO tech and talent · Julio 2025 - Octubre 2025
                                </p>
                                <p className="text-sm md:text-base text-white/70 max-w-3xl mx-auto">
                                    Mantenimiento y desarrollo de aplicaciones full stack integradas en el ERP de la empresa usando HTML, CSS, JavaScript, Python y MySQL. Automatización de procesos y refactorización de código. Optimización eficaz de procesos internos mediante la gestión de incidencias y resolución de problemas técnicos del día a día.
                                </p>
                            </div>

                            <div className="border border-white/20 rounded-2xl p-6 flex flex-col gap-4 bg-white/10"><h3 className="text-xl font-semibold">Desarrollo Frontend - Prácticas</h3>
                                <p className="text-sm md:text-base text-white/80">
                                    ChisoftPC · Marzo 2025 - Junio 2025
                                </p>
                                <p className="text-sm md:text-base text-white/70 max-w-3xl mx-auto">
                                    Desarrollo de un dashboard para un CRM utilizando HTML, CSS, JavaScript y Bootstrap. Participación en la maquetación y diseño de la interfaz de usuario. Colaboración en un entorno de desarrollo en línea.
                                </p>
                            </div>
                        </div>

                    ) : (
                        <div className="space-y-3">
                            <div className="border border-white/20 rounded-2xl p-6 flex flex-col gap-4 bg-white/10"><h3 className="text-xl font-semibold">Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)</h3>
                                <p className="text-sm md:text-base text-white/80">
                                    Linkia FP · Septiembre 2023 - Marzo 2025
                                </p>
                                <p className="text-sm md:text-base text-white/70 max-w-3xl mx-auto">
                                    Programación backend y frontend, gestión de bases de datos y diseños responsive.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
