import styles from "./hero.module.css";
import Image from "next/image"
import Link from "next/link"
export default function Hero() {
  return (
<div className="container">
    <div className="row gx-0">
        <div className={styles.container} >
          <h3 className={styles.nombre}>Soy <span className={styles.minombre}><i>Carlos Sánchez</i></span></h3>
          <p className={styles.trabajo}>FrontEnd Developer</p>
            <div className={styles.imagen_carlos}>
                <Image
                alt="Foto Carlos Sánchez"
                src="/carlos_desarrollador.png"
                width={350}
                height={120}
                />
              <div className={styles.btn_container} >
                <Link className={styles.btn_project} href="/Proyectos">Mis proyectos</Link>
              </div>
            </div>
            </div>
    </div>
</div>
  );
}