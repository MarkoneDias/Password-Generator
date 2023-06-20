import React, { useState } from "react";
import style from "./form.module.css";
export let numberPassword = "";
export let textOfPassword = "";

export function getNumberPassword() {
  return numberPassword;
}

export default function Form() {
  const [number, setNumber] = useState(6);
  const [textPassword, setTextPassword] = useState("");
  const [showEdit, setShowEdit] = useState(false);

  numberPassword = number;
  textOfPassword = textPassword;

  function changeCheckBox() {
    setShowEdit((currentState) => !currentState);
    setNumber(6);
    setTextPassword("");
  }

  function handleNumber(e) {
    setNumber(e.target.value);
  }

  function handleText(e) {
    setTextPassword(e.target.value);
  }

  return (
    <form>
      <div className={style.container}>
        <div className={style.showInput}>
          <div className={style.showCheckBox}>
            <h3>Editar senha</h3>
            <input
              type="checkbox"
              id="inputEdit"
              value={showEdit}
              onChange={changeCheckBox}
              className={style.showEditBtn}
            />
          </div>
          {showEdit && (
            <div>
              <h3>Número de caracteres</h3>
              <input
                type="number"
                onChange={handleNumber}
                className={style.input}
                value={numberPassword}
              />
              <h3>Inserir palavra</h3>
              <input
                type="text"
                id="textPassword"
                onChange={handleText}
                className={style.input}
              />
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
