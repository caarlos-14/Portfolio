"use client"

import styles from "@/componentes/amadeus/amadeus.module.css"
import Image from "next/image";
import {useState} from "react";

const Amadeus = () => {

    const [openCard, setOpenCard] = useState(false);
    const toggleCard = () =>{
        setOpenCard(!openCard);
    }
    return(
        <div className="container">
            <div className="row">
                <div className={`${styles.card_project} d-flex align-items-center`} onClick={toggleCard}>
                    <div className={`${styles.card_image}`}>
                        <Image src="/logo_blanco.png" alt="Amadeus" width={500} height={500} />
                    </div>
                    <div className="card_content">
                    <div className={`${styles.card_title}`}>
                        <h3>TFG Lenguajes de Signos Española (LSE)</h3>
                    </div>
                    <div className={`${styles.card_body}`}>
                        <p>Proyecto de fin de grado <strong>(Desarrollado para el grado de Desarollo de Aplicaciones Web)</strong>sobre el lenguaje de signos español. Que busca romper la barrera comunicativa entre personas con discapacidad auditiva y el resto de la sociedad.</p>
                    </div>
                    <div className="card_footer">
                        <a href="#" className={`${styles.btn_mas}`}>
                            {openCard ? "Cerrar detalles" : "Ver detalles"}
                        </a>
                    </div>
                    </div>
                </div>
            </div>
            {openCard && (
                <div className={`${styles.pop_up_container}`} onClick={toggleCard}>
                    <div className="pop_up_title">
                        <h2>TFG Lenguajes de Signos Española (LSE)</h2>
                    </div>
                    <div className="pop_up_body">
                        <p>Detalles del proyecto en desarrollo...</p>
                    </div>
                    <div className="pop_up_footer">
                        <button className={`${styles.btn_cerrar}`} onClick={toggleCard}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
        
        
  

        
    )

}
export default Amadeus;