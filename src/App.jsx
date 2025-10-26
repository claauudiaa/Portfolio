import LiquidEther from './components/LiquidEther.jsx';
import SplitText from './components/SplitText.jsx'
import CardHeader from './components/CardHeader.jsx';
import CardProject from './components/CardProject.jsx';
import CardStack from './components/CardStack.jsx';
import CardExperience from './components/CardExperience.jsx';
import CardContact from './components/CardContact.jsx';

export default function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-20 px-4">
      {/* Fondo animado */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LiquidEther
          style={{ width: '100%', height: '100%' }}
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={0}
          autoRampDuration={0.6}
        />
      </div>

      {/* Degradado de fondo */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-indigo-950 via-slate-950 to-black" />

      {/* Tarjeta principal (centrada) */}
      <div className="flex justify-center mb-16">
        <CardHeader />
      </div>

      {/* Título proyectos */}
      <div className="relative z-10 max-w-6xl mx-auto mt-16 px-4 sm:px-0">
        <SplitText
          text="Mis proyectos"
          className="text-2xl font-semibold text-left"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
      </div>

      {/* Sección de proyectos */}
      <section className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto mt-4 px-4 sm:px-0">
        <CardProject
          name="Generador de paleta de colores"
          texto="Aplicación web para generar 5 colores, con posibilidad de copiar el código, bloquear el color y generar nuevas tonalidades."
          stack={["HTML", "CSS", "JavaScript"]}
          url="https://github.com/claauudiaa/generador-paleta-colores"
        />

        <CardProject
          name="Chatbot"
          texto="Aplicación web desarrollada como proyecto personal para mejorar mis habilidades, con un chatbot especializado en colorimetría integrado con la API de Groq."
          stack={["Angular", "Node.js", "Express", "Groq"]}
          url="https://github.com/claauudiaa/ChatBot-con-Angular"
        />

        <CardProject
          name="PlanMatch aplicación móvil"
          texto="Versión principal de mi TFG, una aplicación que conecta con gente para realizar actividades deportivas y conocer gente."
          stack={["Java", "XML", "Firebase"]}
          url="https://github.com/claauudiaa/PlanMatch-movil"
        />

        <CardProject
          name="PlanMatch aplicación web"
          texto="Extensión de mi TFG a una versión web para mejorar la accesibilidad, desplegada en Render."
          stack={["HTML", "CSS", "JavaScript", "Firebase", "Render"]}
          url="https://github.com/claauudiaa/PlanMatch-web"
        />

        <CardProject
          name="Mi portfolio personal"
          texto="Aplicación web desarrollada para mostrar mis proyectos y experiencia, desplegada en Vercel."
          stack={["React", "TailwindCSS", "Vite", "Vercel"]}
          url="https://github.com/claauudiaa/Portfolio"
        />

      </section>

      {/* Sección de tecnologías */}
      <section className="relative z-10 max-w-6xl mx-auto mt-16">
        <SplitText
          text="Tecnologías"
          className="text-2xl font-semibold mb-5"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        {/* <h2 className="text-white text-2xl font-semibold mb-6">
          Stack tecnológico
        </h2> */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <CardStack name="HTML" icon="fab fa-html5" level="Avanzado" />
          <CardStack name="CSS" icon="fab fa-css3-alt" level="Avanzado" />
          <CardStack name="JavaScript" icon="fab fa-js-square" level="Avanzado" />
          <CardStack name="React" icon="fab fa-react" level="Intermedio" />
          <CardStack name="Angular" icon="fab fa-angular" level="Intermedio" />
          <CardStack name="Java" icon="fab fa-java" level="Intermedio" />
          <CardStack name="Python" icon="fab fa-python" level="Intermedio" />
          <CardStack name="Node.js" icon="fab fa-node-js" level="Intermedio" />
          <CardStack name="Git" icon="fab fa-git-alt" level="Avanzado" />
          <CardStack name="Github" icon="fab fa-github" level="Avanzado" />
          <CardStack name="PHP" icon="fab fa-php" level="Intermedio" />
          <CardStack name="SQL" icon="fas fa-database" level="Avanzado" />
          <CardStack name="Figma" icon="fab fa-figma" level="Intermedio" />
          <CardStack name="Trello" icon="fab fa-trello" level="Avanzado" />
          <CardStack name="Jira" icon="fab fa-jira" level="Avanzado" />
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto mt-16">
        <SplitText
          text="Experiencia y educación"
          className="text-2xl font-semibold"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <CardExperience />
      </section>

      <section className="relative z-10 max-w-6xl mx-auto mt-16">
        <SplitText
          text="Contacta conmigo"
          className="text-2xl font-semibold mb-5"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <CardContact />
      </section>

    </main>
  );
}
