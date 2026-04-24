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
             <div className="container">
              <div className="row">
                <div className="col-12 col-md-10 col-lg-8 mx-auto mt-3">
                  <h3 className="text-white">Mis redes Sociales</h3>
                  <div className={`${styles.redes_sociales} d-flex justify-content-around align-items-center mt-3`}>
                    
                    
                    <a href="https://www.linkedin.com/in/carlos-s%C3%A1nchez-garc%C3%ADa/" className={`${styles.redes_sociales_link} text-white d-flex flex-column align-items-center`}>
                      <i className="bi bi-linkedin fs-2"></i>
                      LinkedIn
                    </a>
                    <a href="https://github.com/caarlos-14" className={`${styles.redes_sociales_link} text-white d-flex flex-column align-items-center `}>
                      <i className="bi bi-github fs-2"></i>
                      GitHub
                    </a>
                    <a href="https://www.instagram.com/_caarloss_14?igsh=eHgxbm50c21lMm40" className={`${styles.redes_sociales_link} text-white d-flex flex-column align-items-center `}>
                      <i className="bi bi-instagram fs-2"></i>
                      Instagram
                    </a>
                    <a href="https://www.tiktok.com/@_caarloss_14" target="_blank" rel="noopener noreferrer" className={`${styles.redes_sociales_link} text-white d-flex flex-column align-items-center `}>
                      <i className="bi bi-tiktok fs-2"></i>
                      TikTok
                    </a>
                    
                  </div>
                </div>
              </div>
             </div>
            </div>
    </div>
</div>
  );
}