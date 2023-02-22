import React from "react";
import cuadroGrande from "../assets/cuadroGrande.jpg";
import styles from "../styles/CuadroPrincipal.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { BsBootstrap } from "react-icons/bs";

export function Boton() {
  return <div class={styles.boton}>Elegir Plan <IoIosArrowForward/></div>;
}


export function CuadroPrincipal() {
  return (
    <div className={styles.container}>
    <img className={styles.imagen} src={cuadroGrande}></img>
    <Boton/>
    </div>
    
  );
}

