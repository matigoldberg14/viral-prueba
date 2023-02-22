import React from "react";
import logoGrande from "../assets/logoGrande.png";
import { CiShoppingCart } from "react-icons/ci";
import { BsGlobe } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";
import { BsPlus } from "react-icons/bs";

export function Navbar() {
  const [toggleButtonRedes, setToggleButtonRedes] = useState(false);
  const [toggleButtonMusica, setToggleButtonMusica] = useState(false);
  const [toggleButtonOtros, setToggleButtonOtros] = useState(false);

  const handleClick = (Redes, Musica, Otros) => {
    if (Redes && toggleButtonRedes == false) {
      setToggleButtonRedes(true);
      setToggleButtonMusica(false);
      setToggleButtonOtros(false);
    } else if (Redes && toggleButtonRedes) {
      setToggleButtonRedes(false);
      setToggleButtonMusica(false);
      setToggleButtonOtros(false);
    } else if (Musica && toggleButtonMusica == false) {
      setToggleButtonMusica(true);
      setToggleButtonOtros(false);
      setToggleButtonRedes(false);
    } else if (Musica && toggleButtonMusica) {
      setToggleButtonMusica(false);
      setToggleButtonOtros(false);
      setToggleButtonRedes(false);
    } else if (Otros && toggleButtonOtros == false) {
      setToggleButtonOtros(true);
      setToggleButtonMusica(false);
      setToggleButtonRedes(false);
    } else if (Otros && toggleButtonOtros) {
      setToggleButtonOtros(false);
      setToggleButtonMusica(false);
      setToggleButtonRedes(false);
    }
  };

  return (
    <div className={styles.container}>
      <img className={styles.imagen} src={logoGrande}></img>
      {toggleButtonRedes && (
        <div className={styles.redes}>
          <div className={styles.red}>
            <div>
              Instagram <BsPlus />
            </div>
          </div>
          <div className={styles.red}>
            <div>
              Facebook <BsPlus />
            </div>
          </div>
          <div className={styles.red}>
            <div>
              Twitter <BsPlus />
            </div>
          </div>
          <div className={styles.red}>
            <div>
              Tiktok <BsPlus />
            </div>
          </div>
        </div>
      )}

      {toggleButtonMusica && (
        <div className={styles.musica}>
          <div className={styles.music}>
            <div>
              YouTube <BsPlus />
            </div>
          </div>
          <div className={styles.music}>
            <div>
              Spotify <BsPlus />
            </div>
          </div>
        </div>
      )}
      {toggleButtonOtros && (
        <div className={styles.otros}>
          <div className={styles.otro}>
            <div>
              Linkedin <BsPlus />
            </div>
          </div>
          <div className={styles.otro}>
            <div>
              Twitch <BsPlus />
            </div>
          </div>
        </div>
      )}
      <div className={styles.categorias}>
        <div
          className={
            toggleButtonRedes
              ? `${styles.categoria} ${styles.paint}`
              : styles.categoria
          }
          onClick={() => handleClick(true, false, false)}
        >
          Redes Sociales
          <IoIosArrowDown className={styles.arrow} />
        </div>
        <div
          className={
            toggleButtonMusica
              ? `${styles.categoria} ${styles.paint}`
              : styles.categoria
          }
          onClick={() => handleClick(false, true, false)}
        >
          Música <IoIosArrowDown className={styles.arrow} />
        </div>
        <div
          className={
            toggleButtonOtros
              ? `${styles.categoria} ${styles.paint}`
              : styles.categoria
          }
          onClick={() => handleClick(false, false, true)}
        >
          Otros
          <IoIosArrowDown className={styles.arrow} />
        </div>
        <CiShoppingCart size={"6%"} className={styles.categoria} />
        <BsGlobe size={"4%"} className={styles.categoria} />
      </div>
    </div>
  );
}
