import { 
  Mail, 
  Smartphone, 
  MapPin, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Award, 
  ShieldCheck, 
  Database, 
  Layout, 
  Cpu
} from 'lucide-react';
import './App.css';

const GithubIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

function App() {
  return (
    <div className="container">
      
      {/* HEADER / HERO SECTION */}
      <section className="hero">
        <h2 className="text-accent">Hola, soy</h2>
        <h1>Alejandro Mejia</h1>
        <h2>Desarrollador Android Senior</h2>
        <p>
          <MapPin size={18} style={{ display: 'inline', marginRight: '5px', verticalAlign: 'text-bottom' }} /> CDMX, México
        </p>
        <p>
          Especializado en fintech, seguridad móvil y arquitecturas modernas (MVVM, Clean Architecture). 
          Apasionado por crear experiencias nativas con alto rendimiento y escalabilidad.
        </p>
        
        <div className="social-links">
          <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={20} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="Github">
            <GithubIcon size={20} />
          </a>
          <a href="mailto:alejandromevi26@gmail.com" aria-label="Mail">
            <Mail size={20} />
          </a>
          <a href="https://wa.me/525514023853" target="_blank" rel="noreferrer" aria-label="Phone">
            <Smartphone size={20} />
          </a>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about">
        <h2>Sobre Mí</h2>
        <p className="about-text">
          Desarrollador Android Senior con <strong>+4 años de experiencia</strong> en aplicaciones nativas de alto tráfico, especializado en <strong>fintech, seguridad móvil y arquitecturas modernas</strong> (MVVM, Clean Architecture). 
        </p>
        <p className="about-text">
          Tengo experiencia sólida trabajando con <strong>Jetpack Compose, Kotlin, Coroutines</strong> y mecanismos de seguridad financiera (como SSL Pinning, biometría y cifrado avanzado). Además, poseo un fuerte enfoque en el rendimiento de las apps, modernización de proyectos *legacy* y optimización de la experiencia de usuario.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <h2>Experiencia Profesional</h2>
        
        <div className="experience-card">
          <div className="card-header">
            <div className="card-title">
              <h3>Desarrollador Android</h3>
              <h4>HYPERTECH</h4>
            </div>
            <div className="card-date">Julio 2024 - Actualidad</div>
          </div>
          <ul>
            <li>Desarrollé y optimicé aplicaciones Android para el sector financiero y automotriz, aplicando arquitecturas modernas (MVVM, Clean Architecture) y tecnología como Jetpack Compose, Kotlin, Coroutines/Flows e inyección de dependencias con Hilt.</li>
            <li>Implementé soluciones seguras y escalables con enfoque en rendimiento, mantenibilidad y experiencia de usuario.</li>
            <li>Fortalecí la seguridad en aplicaciones financieras: autenticación biométrica, cifrado de datos mediante EncryptedSharedPreferences y Room, detección de dispositivos rooteados y SSL Pinning para validar certificados.</li>
            <li>Diseñé e integré renovación automática de tokens (refresh token) y APIs RESTful mediante Retrofit con manejo robusto de errores.</li>
            <li>Lideré procesos de migración de legacy a View Binding y Jetpack Compose, y manejé dinámicamente permisos y geolocalización.</li>
            <li>Desarrollé e integré el SDK de CoDi (Banxico) para pagos (cobro QR, notificaciones push, y comandos de voz para ejecutar pagos mediante reconocimiento de voz y confirmación biométrica).</li>
            <li>Integré Firebase Analytics, Crashlytics y Remote Config, y desarrollé pruebas unitarias con JUnit, Mockito y MockK para ViewModels, casos de uso y repositorios.</li>
          </ul>
        </div>

        <div className="experience-card">
          <div className="card-header">
            <div className="card-title">
              <h3>Desarrollador Android</h3>
              <h4>VENTURESSOFT</h4>
            </div>
            <div className="card-date">2021 - 2024</div>
          </div>
          <ul>
            <li>Lideré el desarrollo integral (desde cero) de una nueva aplicación móvil robusta, definiendo Clean Architecture y MVVM para garantizar la escalabilidad del producto.</li>
            <li>Implementé asincronismo eficiente con Kotlin y Coroutines/Flows, asegurando un código libre de *memory leaks*.</li>
            <li>Diseñé la persistencia y gestión de datos con Room (local) y Datastore (preferencias), optimizando el modo offline de las aplicaciones.</li>
            <li>Configuré la capa de red con Retrofit para APIs RESTful, e inyección de dependencias modular mediante Hilt/Dagger.</li>
            <li>Enriquecí la UI manejando Material Design 3 y construyendo interfaces reactivas avanzadas con el patrón Observer.</li>
            <li>Mantenimiento y evolución constante en 4 aplicaciones activas en producción (Human eTime, Human eTime Admi, Human WorkSocial), migrando módulos enteros de Java a Kotlin progresivamente.</li>
          </ul>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <h2>Habilidades Técnicas</h2>
        <div className="skills-grid">
          
          <div className="skill-category">
            <h3><Code2 size={24} className="text-accent" /> Lenguajes & Bases</h3>
            <div className="tag-container">
              <span className="tag">Kotlin</span>
              <span className="tag">Java</span>
            </div>
          </div>

          <div className="skill-category">
            <h3><Cpu size={24} className="text-accent" /> ASYNC / Datos</h3>
            <div className="tag-container">
              <span className="tag">Coroutines</span>
              <span className="tag">Flow</span>
              <span className="tag">RxJava</span>
              <span className="tag">Room</span>
              <span className="tag">Datastore</span>
              <span className="tag">Retrofit</span>
            </div>
          </div>

          <div className="skill-category">
            <h3><Layout size={24} className="text-accent" /> UI / Android</h3>
            <div className="tag-container">
              <span className="tag">Jetpack Compose</span>
              <span className="tag">XML</span>
              <span className="tag">Material Design</span>
            </div>
          </div>

          <div className="skill-category">
            <h3><Database size={24} className="text-accent" /> Arquitectura</h3>
            <div className="tag-container">
              <span className="tag">Clean Architecture</span>
              <span className="tag">MVVM</span>
              <span className="tag">Modularización</span>
              <span className="tag">MVP</span>
            </div>
          </div>

          <div className="skill-category">
            <h3><ShieldCheck size={24} className="text-accent" /> Seguridad</h3>
            <div className="tag-container">
              <span className="tag">SSL Pinning</span>
              <span className="tag">Biometría</span>
              <span className="tag">Root Detection</span>
              <span className="tag">EncryptedSP</span>
            </div>
          </div>

          <div className="skill-category">
            <h3><Briefcase size={24} className="text-accent" /> DI / Testing & CI</h3>
            <div className="tag-container">
              <span className="tag">Hilt</span>
              <span className="tag">Dagger</span>
              <span className="tag">JUnit</span>
              <span className="tag">Mockito</span>
              <span className="tag">MockK</span>
              <span className="tag">Firebase Crashlytics</span>
              <span className="tag">GitLab CI</span>
            </div>
          </div>

        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <h2>Educación y Certificaciones</h2>
        
        <div className="education-card">
          <div className="card-header">
            <div className="card-title">
              <h3><GraduationCap size={24} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'text-bottom' }} className="text-accent" />Licenciatura en Ciencias de la Informática</h3>
              <h4>Instituto Politécnico Nacional - UPIICSA</h4>
            </div>
          </div>
        </div>

        <h3><Award size={24} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'text-bottom' }} className="text-accent" /> Cursos Destacados</h3>
        <div className="tag-container" style={{ marginTop: '1rem' }}>
          <span className="tag">Android con Kotlin (67.5h)</span>
          <span className="tag">Jetpack Compose (27.5h)</span>
          <span className="tag">Fundamentos Apps Android (10h)</span>
          <span className="tag">Android Testing: TDD, Junit, Mockito (3h)</span>
          <span className="tag">Creación de base de datos (2h)</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2>Trabajos Propios</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>📱 LashesLam</h3>
            <p>App propia con arquitectura escalable y flujo de producto real. Publicada en entorno de prueba.</p>
            <a href="https://github.com/alejandromevi" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '1rem' }}>Ver Repositorio →</a>
          </div>

          <div className="project-card">
            <h3>⚛️ KMP Experimental</h3>
            <p>Lógica compartida Android/iOS con Kotlin Multiplatform. Incluye Ktor Client, Clean Use Cases y Repository Pattern.</p>
            <a href="https://github.com/alejandromevi" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '1rem' }}>Ver Repositorio →</a>
          </div>
        </div>
      </section>
      
      <footer style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>© {new Date().getFullYear()} Alejandro Mejia. Desarrollado con React y Vite.</p>
      </footer>
    </div>
  )
}

export default App
