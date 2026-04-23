"use client"
import style from '@/componentes/card_experience/card_experience.module.css';
import {useState} from "react";
const Card_Experience = () =>{

const [active,setActive] = useState(false);
    return(
        <div className="container">
            <div className="row">
                <div className={`${style.card} ${active ? style.active:""}`} onClick={() => setActive(!active)}>
                    <div className={style.titulo_card}>
                        <h4>Acerca de mí</h4>
                        <div className="contenido_card">
                        <p>Soy una persona con gran interés en la superación personal y la tecnología, especialmente en desarrollo web frontend. Aunque estoy comenzando, tengo muchas ganas de aprender y seguir desarrollándome profesionalmente.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card_Experience;