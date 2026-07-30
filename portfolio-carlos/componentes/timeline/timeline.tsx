import styles from "./timeline.module.css";

const Timeline = () =>{
return(
    <div className={styles.timeline}>
        <h1 className={styles.title}>Timeline</h1>   

        {/**Evento 1 - Izquierda*/}
        <div className={`${styles.event} ${styles.left} ${styles.orange}`}>
            <div className={styles.eventContent}>
                <h3>Sistemas Microinformáticos y Redes</h3>
                <h6>2022-2024</h6>
                <p>Inicié mi especialización tecnológica cursando el ciclo formativo de Grado Medio en Sistemas Microinformáticos y Redes (SMR). Esta etapa me brindó una base sólida en el soporte técnico, la configuración de equipos y la administración de redes, despertando mi interés por la programación y el desarrollo web a través de mis primeros proyectos prácticos.</p>
            </div>
        </div> 

        {/**Evento 2 - Derecha*/}
        <div className={`${styles.event} ${styles.right} ${styles.blue}`}>
            <div className={styles.eventContent}>
                <h3>Desarrollo de Aplicaciones Web</h3>
                <h6>2024-2026</h6>
                <p>Cursé el Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web (DAW), donde adquirí una sólida base en programación, bases de datos, desarrollo frontend y backend, y diseño de aplicaciones. Durante esta etapa me especialicé en el desarrollo de aplicaciones web, trabajando con diferentes tecnologías y metodologías que me permitieron desarrollar proyectos reales y fortalecer mis habilidades técnicas. Esta formación marcó el inicio de mi trayectoria profesional en el sector IT y consolidó mi interés por el desarrollo de software.</p>
            </div>
        </div>

        {/**Evento 3 - Izquierda*/}
        <div className={`${styles.event} ${styles.left} ${styles.green}`}>
            <div className={styles.eventContent}>
                <h3>Desarrollo de Aplicaciones Multiplataforma</h3>
                <h6>2026-2027</h6>
                <p>Tras completar mi formación en DAW, amplié mis conocimientos cursando el Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM). Esta etapa me permitió profundizar en el desarrollo de software para diferentes plataformas, reforzando mis competencias en programación orientada a objetos, arquitectura de aplicaciones, bases de datos y desarrollo de soluciones escalables.</p>
            </div>
        </div> 
    </div>
)
}
export default Timeline;