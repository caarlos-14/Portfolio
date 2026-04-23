"use client"; // Importante para usar hooks en Next.js App Router
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/componentes/navbar/navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg container">
      <div className="container-fluid g-0">
        {/* Logo */}
        <div className={styles.logo}>
          <Image
            alt="Logo Personal"
            src="/logo.png"
            width={140}
            height={120}
            className="img-fluid"
          />
        </div>

        {/* Botón Hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenido Colapsable */}
        <div 
          className={`collapse navbar-collapse ${isOpen ? "show" : ""} ${styles.navegacion}`} 
          id="navbarContent"
        >
          <div className={`${styles.links} d-flex flex-column flex-md-row align-items-center flex-grow-1`}>
            
            {/* Links Centrales */}
            <div className="mx-auto d-flex flex-column flex-md-row text-center">
              <Link className={`me-md-5 mb-3 mb-md-0 ${styles.link}`} href="/">
                <i className="bi bi-person" /> Sobre Mi
              </Link>
              <Link className={`me-md-5 mb-3 mb-md-0 ${styles.link}`} href="/Habilidades">
                <i className="bi bi-code-slash" /> Habilidades
              </Link>
              <Link className={`me-md-5 mb-3 mb-md-0 ${styles.link}`} href="/Proyectos">
                <i className="bi bi-folder" /> Proyectos
              </Link>
            </div>

            {/* Botón Contacto */}
            <div className="mt-3 mt-md-0">
              <a className={`m-2 ${styles.link} ${styles.btn_contacto}`} href="#contacto">
                Contactame <i className={`bi bi-arrow-up-right ${styles.flecha}`} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;