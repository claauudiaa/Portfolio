import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function CardContact() {
    const form = useRef();
    const [sent, setSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.SERVICE_ID,
                import.meta.env.TEMPLATE_ID,
                form.current,
                import.meta.env.PUBLIC_KEY
            )
            .then(
                () => {
                    setSent(true);
                    form.current.reset();
                },
                (error) => {
                    console.error("❌ Error al enviar:", error.text);
                }
            );
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 items-stretch mb-10">

            {/* Columna izquierda - Datos de contacto */}
            <div className="flex flex-col justify-between bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex flex-col gap-6">
                    {/* Email */}
                    <div className="flex items-center gap-4 bg-white/10 border border-white/20 rounded-xl p-4 hover:bg-white/30 transition-all duration-300">
                        <i className="fas fa-envelope text-2xl text-white/90"></i>
                        <div>
                            <p className="font-semibold text-lg">Email</p>
                            <p className="opacity-90">claudiacandelas2005@gmail.com</p>
                        </div>
                    </div>

                    {/* Teléfono */}
                    <div className="flex items-center gap-4 bg-white/10 border border-white/20 rounded-xl p-4 hover:bg-white/30 transition-all duration-300">
                        <i className="fas fa-phone text-2xl text-white/90"></i>
                        <div>
                            <p className="font-semibold text-lg">Teléfono</p>
                            <p className="opacity-90">+34 654 93 53 58</p>
                        </div>
                    </div>

                    {/* Ubicación */}
                    <div className="flex items-center gap-4 bg-white/10 border border-white/20 rounded-xl p-4 hover:bg-white/30 transition-all duration-300">
                        <i className="fas fa-map-marker-alt text-2xl text-white/90"></i>
                        <div>
                            <p className="font-semibold text-lg">Ubicación</p>
                            <p className="opacity-90">Madrid, España</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 bg-white/10 border border-white/20 rounded-xl p-4 hover:bg-white/30 transition-all duration-300">
                        <i className="fas fa-file text-2xl text-white/90"></i>
                        <div>
                            <p className="font-semibold text-lg">CV</p>
                            <a
                                href="/Claudia_Candelas_CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="opacity-90 hover:underline cursor-pointer"
                            >
                                Ver CV
                            </a>
                        </div>
                    </div>

                </div>

                {/* Redes sociales */}
                <div className="mt-8">
                    <p className="font-semibold mb-3 text-lg text-center md:text-left">Mis redes</p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <a
                            href="https://github.com/claauudiaa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white/30 border border-white/20 rounded-xl p-4 transition-all duration-300"
                        >
                            <i className="fab fa-github text-2xl"></i>
                        </a>
                        <a
                            href="https://linkedin.com/in/dsd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white/30 border border-white/20 rounded-xl p-4 transition-all duration-300"
                        >
                            <i className="fab fa-linkedin-in text-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Columna derecha - Formulario */}
            <div className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 text-white flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-center">Contacta conmigo</h3>

                    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="destinatario" className="mb-1 font-medium">
                                Tu dirección de email *
                            </label>
                            <input
                                type="email"
                                id="destinatario"
                                name="destinatario"
                                placeholder="Dirección de email"
                                className="p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-pink-300/60"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="asunto" className="mb-1 font-medium">
                                Asunto *
                            </label>
                            <input
                                type="text"
                                id="asunto"
                                name="asunto"
                                placeholder="Asunto del mensaje"
                                className="p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-pink-300/60"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="mensaje" className="mb-1 font-medium">
                                Mensaje *
                            </label>
                            <textarea
                                id="mensaje"
                                name="mensaje"
                                placeholder="Ingrese el mensaje"
                                rows="5"
                                className="p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-pink-300/60"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="mt-4 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 hover:scale-105
    bg-gradient-to-r from-pink-300/80 to-purple-300/80 text-[#581c87]"
                        >
                            {sent ? "¡Mensaje enviado!" : "Enviar mensaje"}
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}