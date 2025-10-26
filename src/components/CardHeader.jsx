import image from '../assets/imagen.jpeg';

export default function CardHeader() {
  return (
    <div className="bg-white/30 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl z-10 
                w-full max-w-6xl mx-auto p-8 text-white flex flex-col sm:flex-row items-center gap-6">

      <img
        src={image}
        alt="Claudia Candelas"
        className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border border-white/30 shadow-md flex-shrink-0"
      />
      <p className="flex-1 leading-relaxed text-sm md:text-base text-center sm:text-left">
        Mi nombre es <strong>Claudia Candelas</strong>, soy una desarrolladora de software apasionada por crear
        aplicaciones útiles, funcionales y bien diseñadas. Me motiva aprender, explorar nuevas herramientas y enfrentarme
        a nuevos retos que salgan de lo normal. Busco una oportunidad donde aportar mis ideas, crecer en el sector y
        colaborar en el desarrollo de soluciones óptimas.
      </p>
    </div>
  );
}
