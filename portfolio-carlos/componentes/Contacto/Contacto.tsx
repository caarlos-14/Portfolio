import Image from "next/image";
import Link from "next/link";
import styles from "@/componentes/Contacto/Contacto.module.css"

const Contacto = () =>{

    return(
    <div className={`${styles.contacto_container} container mt-5`}>
        <div className="row g-0">
            <div className={`${styles.formulario} d-flex justify-content-center mb-5`}>
                <div className={`col-12 col-md-10`}>
                    <h2 className="text-center mx-auto" id="contacto">Contáctame</h2>
                    <form method="POST" className="d-flex flex-column align-items-center" action="https://formspree.io/f/xdaywvow">
                        <input placeholder="Tu nombre o de Empresa" className="form-control" name="nombre" id="nombre"/>
                        <input placeholder="Email Personal o de Empresa" className="form-control mt-3" name="correo" id="correo"/>
                        <textarea className="form-control mt-3" name="mensaje" id="mensaje" placeholder="Escriba su mensaje aqui..."></textarea>
                        <button type="submit" className="btn btn-primary mt-3 mb-5 ">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Contacto;