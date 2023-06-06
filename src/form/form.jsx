import React, { useState } from "react";
import style from "./form.module.css";
export let numberPassword = "";

export function getNumberPassword() {
  return numberPassword;
}

export default function Form() {
  const [number, setNumber] = useState("");

  numberPassword = number;

  function handleNumber(e) {
    setNumber(e.target.value);
  }

  return (
    <form>
      <h3>Número de caracteres acima de 6</h3>
      <input type="number" onChange={handleNumber} />
    </form>
  );
}
