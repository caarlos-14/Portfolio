import styles from './about.module.css';
import Image from 'next/image';

const AboutMe = () => {
    return (
    <section className={styles.about}>
        <div className={styles.container}>

            {/** Imagen de perfil (Ocupa la mitad izquierda) */}
            <div className={styles.foto}>
                <Image 
                src="/carlos_desarrollador.png"
                alt="Foto de perfil" 
                width={400} 
                height={400} 
                className={styles.imagen}/>
            </div>

            {/** Información personal (Ocupa la mitad derecha) */}
            <div className={styles.info}>
                <h2 className={styles.nombre}>Carlos Sánchez</h2>
                <p className={styles.descripcion}>
                    Soy un apasionado del desarrollo web frontend, siempre en busca de nuevos desafíos y oportunidades para crecer profesionalmente. Me encanta aprender nuevas tecnologías y aplicarlas en proyectos innovadores.
                </p>
            
                <ul className={styles.gridInfo}>
                    <li><strong>Nombre:</strong> Carlos Sánchez</li>
                    <li><strong>Edad:</strong> 20 años</li>
                    <li><strong>Ubicación:</strong> Madrid, España</li>
                    <li><strong>Correo electrónico:</strong> <a href="mailto:carlossanchezgarcia2005@gmail.com">carlossanchezgarcia2005@gmail.com</a></li>
                    <li><strong>Teléfono:</strong> +34 684 15 38 17</li>
                </ul>
            </div>
        </div>
    </section>
    )
}

export default AboutMe;