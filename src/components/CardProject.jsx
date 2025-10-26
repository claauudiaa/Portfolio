export default function CardProject({ name, texto, stack = [], url }) {
    return (
        <div className="bg-white/30 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl z-10 
                    w-full max-w-5xl mx-auto p-8 text-white flex flex-col gap-4">

            <p className="leading-relaxed text-sm md:text-base text-center sm:text-left">
                <strong>{name}</strong> {texto}
            </p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-2">
                {stack.map((tech, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 bg-white/20 border border-white/20 rounded-full text-xs md:text-sm font-medium shadow-sm hover:bg-white/30 transition">
                        {tech}
                    </span>
                ))}
            </div>
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 backdrop-blur-md border border-white/30 rounded-xl text-white font-medium shadow hover:bg-white/30 hover:scale-105 transition duration-100 ease-in-out flex justify-center cursor-pointer">Ver proyecto</a>
        </div>
    );
}
