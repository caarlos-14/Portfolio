"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/componentes/navbar/navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark container">
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
            className="navbar-toggler d-lg-none me-4"
            type="button"
            onClick={toggleMenu}
            aria-controls="offcanvasMenu"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Contenido — solo escritorio, sin cambios */}
          <div
            className={`collapse navbar-collapse ${styles.navegacion}`}
            id="navbarContent"
          >
            <div className={`${styles.links} d-flex flex-column flex-md-row align-items-center flex-grow-1`}>
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
              <div className="mt-3 mt-md-0">
                <a className={`m-2 ${styles.link} ${styles.btn_contacto}`} href="#contacto">
                  Contactame <i className={`bi bi-arrow-up-right ${styles.flecha}`} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Offcanvas Bootstrap — solo móvil */}
      <div
        className={`offcanvas offcanvas-end d-lg-none ${isOpen ? "show" : ""}`}
        tabIndex={-1}
        id="offcanvasMenu"
        style={{ visibility: isOpen ? "visible" : "hidden" }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-white">Menú</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={closeMenu}
            aria-label="Cerrar"
          />
        </div>

        <div className="offcanvas-body d-flex flex-column gap-3">
          <Link className={`${styles.link}`} href="/" onClick={closeMenu}>
            <i className="bi bi-person me-2" /> Sobre Mi
          </Link>
          <Link className={`${styles.link}`} href="/Habilidades" onClick={closeMenu}>
            <i className="bi bi-code-slash me-2" /> Habilidades
          </Link>
          <Link className={`${styles.link}`} href="/Proyectos" onClick={closeMenu}>
            <i className="bi bi-folder me-2" /> Proyectos
          </Link>

          <div className="mt-auto">
            <a className={`${styles.link} ${styles.btn_contacto}`} href="#contacto" onClick={closeMenu}>
              Contactame <i className={`bi bi-arrow-up-right ${styles.flecha}`} />
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop Bootstrap */}
      {isOpen && (
        <div
          className="offcanvas-backdrop fade show"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;